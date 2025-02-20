/*
http://www.zdic.net/z/zb/cc1.htm
2500个中前面的1626常用字，且将91个负能量字进行替换
http://en.wiktionary.org/wiki/Wiktionary:Frequency_lists/Contemporary_poetry
*/

function mn_encode(str) {
    var out = [];
    var n = mn_words.length;
    for (var i = 0; i < str.length; i += 8) {
        var x = parseInt(str.substr(i, 8), 16);
        var w1 = (x % n);
        var w2 = (Math.floor(x/n) + w1) % n;
        var w3 = (Math.floor(Math.floor(x/n)/n) + w2) % n;
        out = out.concat([mn_words[w1], mn_words[w2], mn_words[w3]]);
    }
    return out.join('');
}

function mn_mod(a, b) {
    return a < 0 ? b + a : a % b;
}
function hz_decode(str) {
	str = str.replace(/\n/g,'');
	str = str.replace(/ /g,'');
	str = str.replace(/-/g,'');
	str = str.replace(/[『』【】\[\]]/g,'');
	var n=str.length;
	var s="";	
	for (var i = 0; i < n; i ++){
		for (var k = 0; k < mn_words.length; k++) {
		if(mn_words[k]==str.substr(i,1)||mn_wordys[k]==str.substr(i,1))break;
		}
		if(k<mn_words.length){
	    s=s+okmn_words[k]+" ";}
	    else{
		s=s+"[no] ";
	    }
	}
	return s;
}

function mn_decode(str) {
    var out = '';
    var n = okmn_words.length;
    str = str.replace(/^[ \r\n]+|[ \r\n ]+$/gm,'');
		str = str.replace(/\[no\] /g,'');
    var wlist = str.split(/[ \r\n]+/);//str.split(" ");
    for (var i = 0; i < wlist.length; i += 3) {
        var w1 = okmn_words.indexOf(wlist[i]);
        var w2 = okmn_words.indexOf(wlist[i+1]) % n;
        var w3 = okmn_words.indexOf(wlist[i+2]) % n;
		if(w1<0||w2<0||w3<0){out +="（试试密语词组）";break;}
        var x = w1 + n * mn_mod((w2 - w1), n) + n * n * mn_mod((w3 - w2), n);
        out += ('0000000' + x.toString(16)).slice(-8);
    }
    return out;
}


var mn_word ="一,乙,烘,十,丁,厂,七,卜,人,入,八,九,几,儿,了,力,乃,刀,又,三,于,干,亏,士,工,土,才,寸,下,大,丈,与,万,上,小,口,巾,山,千,乞,川,亿,个,勺,久,凡,及,夕,丸,么,广,亡,门,义,之,尸,弓,己,已,子,卫,也,女,飞,刃,习,叉,马,乡,丰,王,井,开,夫,天,无,元,专,云,扎,艺,木,五,支,厅,不,太,犬,区,历,尤,友,匹,车,巨,牙,屯,比,互,切,瓦,止,少,日,中,冈,贝,内,水,见,午,牛,手,毛,气,升,长,仁,什,片,仆,化,仇,币,仍,仅,斤,爪,反,介,父,从,今,凶,分,乏,公,仓,月,氏,勿,欠,风,丹,匀,乌,凤,勾,文,六,方,火,为,斗,忆,订,计,户,认,心,尺,引,丑,巴,孔,队,办,以,允,予,劝,双,书,幻,玉,刊,示,末,未,击,打,巧,正,扑,扒,功,扔,去,甘,世,古,节,本,术,可,丙,左,厉,右,石,布,龙,平,灭,轧,东,卡,北,占,业,旧,帅,归,且,旦,目,叶,甲,申,叮,电,号,田,由,史,只,央,兄,叼,叫,另,叨,叹,四,生,失,禾,丘,付,仗,代,仙,们,仪,白,仔,他,斥,瓜,乎,丛,令,用,甩,印,乐,句,匆,册,犯,外,处,冬,鸟,务,包,饥,主,市,立,闪,兰,半,汁,汇,头,汉,宁,穴,它,讨,写,让,礼,训,必,议,讯,记,永,司,尼,民,出,辽,奶,奴,加,召,皮,边,发,孕,圣,对,台,矛,纠,母,幼,丝,式,刑,动,扛,寺,吉,扣,考,托,老,执,巩,圾,扩,扫,地,扬,场,耳,共,芒,亚,芝,朽,朴,机,权,过,臣,再,协,西,压,厌,在,有,百,存,而,页,匠,夸,夺,灰,达,列,死,成,夹,轨,邪,划,迈,毕,至,此,贞,师,尘,尖,劣,光,当,早,吐,吓,虫,曲,团,同,吊,吃,因,吸,吗,屿,帆,岁,回,岂,刚,则,肉,网,年,朱,先,丢,舌,竹,迁,乔,伟,传,乒,乓,休,伍,伏,优,伐,延,件,任,伤,价,份,华,仰,仿,伙,伪,自,血,向,似,后,行,舟,全,会,杀,合,兆,企,众,爷,伞,创,肌,朵,杂,危,旬,旨,负,各,名,多,争,色,壮,冲,冰,庄,庆,亦,刘,齐,交,次,衣,产,决,充,妄,闭,问,闯,羊,并,关,米,灯,州,汗,污,江,池,汤,忙,兴,宇,守,宅,字,安,讲,军,许,论,农,讽,设,访,寻,那,迅,尽,导,异,孙,阵,阳,收,阶,阴,防,奸,如,妇,好,她,妈,戏,羽,观,欢,买,红,纤,级,约,纪,驰,巡,寿,弄,麦,形,进,戒,吞,远,违,运,扶,抚,坛,技,坏,扰,拒,找,批,扯,址,走,抄,坝,贡,攻,赤,折,抓,扮,抢,孝,均,抛,投,坟,抗,坑,坊,抖,护,壳,志,扭,块,声,把,报,却,劫,芽,花,芹,芬,苍,芳,严,芦,劳,克,苏,杆,杠,杜,材,村,杏,极,李,杨,求,更,束,豆,两,丽,医,辰,励,否,还,歼,来,连,步,坚,旱,盯,呈,时,吴,助,县,里,呆,园,旷,围,呀,吨,足,邮,男,困,吵,串,员,听,吩,吹,呜,吧,吼,别,岗,帐,财,针,钉,告,我,乱,利,秃,秀,私,每,兵,估,体,何,但,伸,作,伯,伶,佣,低,你,住,位,伴,身,皂,佛,近,彻,役,返,余,希,坐,谷,妥,含,邻,岔,肝,肚,肠,龟,免,狂,犹,角,删,条,卵,岛,迎,饭,饮,系,言,冻,状,亩,况,床,库,疗,应,冷,这,序,辛,弃,冶,忘,闲,间,闷,判,灶,灿,弟,汪,沙,汽,沃,泛,沟,没,沈,沉,怀,忧,快,完,宋,宏,牢,究,穷,灾,良,证,启,评,补,初,社,识,诉,诊,词,译,君,灵,即,层,尿,尾,迟,局,改,张,忌,际,陆,阿,陈,阻,附,妙,妖,妨,努,忍,劲,鸡,驱,纯,纱,纳,纲,驳,纵,纷,纸,纹,纺,驴,纽,奉,玩,环,武,青,责,现,表,规,抹,拢,拔,拣,担,坦,押,抽,拐,拖,拍,者,顶,拆,拥,抵,拘,势,抱,垃,拉,拦,拌,幸,招,坡,披,拨,择,抬,其,取,苦,若,茂,苹,苗,英,范,直,茄,茎,茅,林,枝,杯,柜,析,板,松,枪,构,杰,述,枕,丧,或,画,卧,事,刺,枣,雨,卖,矿,码,厕,奔,奇,奋,态,欧,垄,妻,轰,顷,转,斩,轮,软,到,非,叔,肯,齿,些,虎,虏,肾,贤,尚,旺,具,果,味,昆,国,昌,畅,明,易,昂,典,固,忠,咐,呼,鸣,咏,呢,岸,岩,帖,罗,帜,岭,凯,败,贩,购,图,钓,制,知,垂,牧,物,乖,刮,秆,和,季,委,佳,侍,供,使,例,版,侄,侦,侧,凭,侨,佩,货,依,的,迫,质,欣,征,往,爬,彼,径,所,舍,金,命,斧,爸,采,受,乳,贪,念,贫,肤,肺,肢,肿,胀,朋,股,肥,服,胁,周,昏,鱼,兔,狐,忽,狗,备,饰,饱,饲,变,京,享,店,夜,庙,府,底,剂,郊,废,净,盲,放,刻,育,闸,闹,郑,券,卷,单,炒,炊,炕,炎,炉,沫,浅,法,泄,河,沾,泪,油,泊,沿,泡,注,泻,泳,泥,沸,波,泼,泽,治,怖,性,怕,怜,怪,学,宝,宗,定,宜,审,宙,官,空,帘,实,试,郎,诗,肩,房,诚,衬,衫,视,话,诞,询,该,详,建,肃,录,隶,居,届,刷,屈,弦,承,孟,孤,陕,降,限,妹,姑,姐,姓,始,驾,参,艰,线,练,组,细,驶,织,终,驻,驼,绍,经,贯,奏,春,帮,珍,玻,毒,型,挂,封,持,项,垮,挎,城,挠,政,赴,赵,挡,挺,括,拴,拾,挑,指,垫,挣,挤,拼,挖,按,挥,挪,某,甚,革,荐,巷,带,草,茧,茶,荒,茫,荡,荣,故,胡,南,药,标,枯,柄,栋,相,查,柏,柳,柱,柿,栏,树,要,咸,威,歪,研,砖,厘,厚,砌,砍,面,耐,耍,牵,残,殃,轻,鸦,皆,背,战,点,临,览,竖,省,削,尝,是,盼,眨,哄,显,哑,冒,映,星,昨,畏,趴,胃,贵,界,虹,虾,蚁,思,蚂,虽,品,咽,骂,哗,咱,响,哈,咬,咳,哪,炭,峡,罚,贱,贴,骨,钞,钟,钢,钥,钩,卸,缸,拜,看,矩,怎,牲,选,适,秒,香,种,秋,科,重,复,竿,段,便,俩,贷,顺,修,保,促,侮,俭,俗,俘,信,皇,泉,鬼,侵,追,俊,盾,待,律,很,须,叙,剑,逃,食,盆,胆,胜,胞,胖,脉,勉,狭,狮,独,狡,狱,狠,贸,怨,急,饶,蚀,饺,饼,弯,将,奖,哀,亭,亮,度,迹,庭,疮,疯,疫,疤,姿,亲,音,帝,施,闻,阀,阁,差,养,美,姜,叛,送,类,迷,前,首,逆,总,炼,炸,炮,烂,剃,洁,洪,洒,浇,浊,洞,测,洗,活,派,洽,染,济,洋,洲,浑,浓,津,恒,恢,恰,恼,恨,举,觉,宣,室,宫,宪,突,穿,窃,客,冠,语,扁,袄,祖,神,祝,误,诱,说,诵,垦,退,既,屋,昼,费,陡,眉,孩,除,险,院,娃,姥,姨,姻,娇,怒,架,贺,盈,勇,怠,柔,垒,绑,绒,结,绕,骄,绘,给,络,骆,绝,绞,统,耕,耗,艳,泰,珠,班,素,蚕,顽,盏,匪,捞,栽,捕,振,载,赶,起,盐,捎,捏,埋,捉,捆,捐,损,都,哲,逝,捡,换,挽,热,恐,壶,挨,耻,耽,恭,莲,莫,荷,获,晋,恶,真,框,桂,档,桐,株,桥,桃,格,校,核,样,根,索,哥,速,逗,栗,配,翅,辱,唇,夏,础,破,原,套,逐,烈,殊,顾,轿,较,顿,毙,致,柴,桌,虑,监,紧,党,晒,眠,晓,鸭,晃,晌,晕,蚊,哨,哭,恩,唤,啊,唉,罢,峰,圆,贼,贿,钱,钳,钻,铁,铃,铅,缺,氧,特,牺,造,乘,敌,秤,租,积,秧,秩,称,秘,透,笔,笑,笋,债,借,值,倚,倾,倒,倘,俱,倡,候,俯,倍,倦,健,臭,射,躬,息,徒,徐,舰,舱,般,航,途,拿,爹,爱,颂,翁,脆,脂,胸,胳,脏,胶,脑,狸,狼,逢,留,皱,饿,恋,桨,浆,衰,高,席,准,座,脊,症,病,疾,疼,疲,效,离,唐,资,凉,站,剖,竞,部,旁,旅,畜,阅,羞,瓶,拳,粉,料,益,兼,烤,二";
var mn_words =mn_word.split(",");
var mn_wordys =mn_word.split(",");

var badci=",入,亏,土,亡,尸,己,已,仇,凶,丑,末,灭,犯,奴,刑,圾,死,邪,劣,岂,伤,伪,杀,危,妄,污,讽,奸,坏,坟,坑,劫,歼,伶,皂,灿,忧,尿,驴,垃,苦,丧,厕,虏,败,贪,泪,毒,挎,茧,残,殃,哑,骂,罚,贱,侮,鬼,逃,狱,怨,哀,疮,疯,疫,疤,烂,恼,恨,窃,怒,怠,匪,损,逝,耻,辱,毙,哭,贼,贿,牺,臭,脏,桨,症,病,疾,疼,疲,畜";
var hcs=badci.split(",");
var xuhao="";
for(i=0;i<mn_words.length;i++){
	if(badci.indexOf(mn_words[i]) > 0)xuhao=xuhao+i+",";
}
var xcs=xuhao.split(",");

var xinci="烦,烧,烛,烟,递,涛,浙,涝,酒,涉,消,浩,海,涂,浴,浮,流,润,浪,浸,涨,烫,涌,悟,悄,悔,悦,害,宽,家,宵,宴,宾,窄,容,宰,案,请,朗,诸,读,扇,袜,袖,袍,被,祥,课,谁,调,冤,谅,谈,谊,剥,恳,展,剧,屑,弱,陵,陶,陷,陪,娱,娘,通,能,难,预,桑,绢,绣,验,继,球,理,捧,堵,描,域,掩,捷,排,掉,堆,推,掀,授,教,掏,掠,培,接,控,探,据,掘,职,基,著,勒,黄,萌,萝,菌,菜,萄,菊,萍,菠,营,械";
//"营,械,,,,,露,囊,罐"; 后面更多见miyu.js
xincis=xinci.split(",");
var xinc="";
for(i=0;i<xcs.length-1;i++){
	k=xcs[i];
//	xinc=xinc+mn_words[k]+",";
//xinc=xinc+i+mn_words[k]+"~"+xincis[i]+",";
mn_words[k]=xincis[i];
}

/**document.write(xinc);**/
var okmn_words = [
    "like", "just", "love", "know", "never", "want", "time", "out", "there",
    "make", "look", "eye", "down", "only", "think", "heart", "back", "then",
    "into", "about", "more", "away", "still", "them", "take", "thing", "even",
    "through", "long", "always", "world", "too", "friend", "tell", "try",
    "hand", "thought", "over", "here", "other", "need", "smile", "again",
    "much", "cry", "been", "night", "ever", "little", "said", "end", "some",
    "those", "around", "mind", "people", "girl", "leave", "dream", "left",
    "turn", "myself", "give", "nothing", "really", "off", "before",
    "something", "find", "walk", "wish", "good", "once", "place", "ask",
    "stop", "keep", "watch", "seem", "everything", "wait", "got", "yet",
    "made", "remember", "start", "alone", "run", "hope", "maybe", "believe",
    "body", "hate", "after", "close", "talk", "stand", "own", "each", "hurt",
    "help", "home", "god", "soul", "new", "many", "two", "inside", "should",
    "true", "first", "fear", "mean", "better", "play", "another", "gone",
    "change", "use", "wonder", "someone", "hair", "cold", "open", "best",
    "any", "behind", "happen", "water", "dark", "laugh", "stay", "forever",
    "name", "work", "show", "sky", "break", "came", "deep", "door", "put",
    "black", "together", "upon", "happy", "such", "great", "white", "matter",
    "fill", "past", "please", "burn", "cause", "enough", "touch", "moment",
    "soon", "voice", "scream", "anything", "stare", "sound", "red", "everyone",
    "hide", "kiss", "truth", "death", "beautiful", "mine", "blood", "broken",
    "very", "pass", "next", "forget", "tree", "wrong", "air", "mother",
    "understand", "lip", "hit", "wall", "memory", "sleep", "free", "high",
    "realize", "school", "might", "skin", "sweet", "perfect", "blue", "kill",
    "breath", "dance", "against", "fly", "between", "grow", "strong", "under",
    "listen", "bring", "sometimes", "speak", "pull", "person", "become",
    "family", "begin", "ground", "real", "small", "father", "sure", "feet",
    "rest", "young", "finally", "land", "across", "today", "different", "guy",
    "line", "fire", "reason", "reach", "second", "slowly", "write", "eat",
    "smell", "mouth", "step", "learn", "three", "floor", "promise", "breathe",
    "darkness", "push", "earth", "guess", "save", "song", "above", "along",
    "both", "color", "house", "almost", "sorry", "anymore", "brother", "okay",
    "dear", "game", "fade", "already", "apart", "warm", "beauty", "heard",
    "notice", "question", "shine", "began", "piece", "whole", "shadow",
    "secret", "street", "within", "finger", "point", "morning", "whisper",
    "child", "moon", "green", "story", "glass", "kid", "silence", "since",
    "soft", "yourself", "empty", "shall", "angel", "answer", "baby", "bright",
    "dad", "path", "worry", "hour", "drop", "follow", "power", "war", "half",
    "flow", "heaven", "act", "chance", "fact", "least", "tired", "children",
    "near", "quite", "afraid", "rise", "sea", "taste", "window", "cover",
    "nice", "trust", "lot", "sad", "cool", "force", "peace", "return", "blind",
    "easy", "ready", "roll", "rose", "drive", "held", "music", "beneath",
    "hang", "mom", "paint", "emotion", "quiet", "clear", "cloud", "few",
    "pretty", "bird", "outside", "paper", "picture", "front", "rock", "simple",
    "anyone", "meant", "reality", "road", "sense", "waste", "bit", "leaf",
    "thank", "happiness", "meet", "men", "smoke", "truly", "decide", "self",
    "age", "book", "form", "alive", "carry", "escape", "damn", "instead",
    "able", "ice", "minute", "throw", "catch", "leg", "ring", "course",
    "goodbye", "lead", "poem", "sick", "corner", "desire", "known", "problem",
    "remind", "shoulder", "suppose", "toward", "wave", "drink", "jump",
    "woman", "pretend", "sister", "week", "human", "joy", "crack", "grey",
    "pray", "surprise", "dry", "knee", "less", "search", "bleed", "caught",
    "clean", "embrace", "future", "king", "son", "sorrow", "chest", "hug",
    "remain", "sat", "worth", "blow", "daddy", "final", "parent", "tight",
    "also", "create", "lonely", "safe", "cross", "dress", "evil", "silent",
    "bone", "fate", "perhaps", "anger", "class", "scar", "snow", "tiny",
    "tonight", "continue", "control", "dog", "edge", "mirror", "month",
    "suddenly", "comfort", "given", "loud", "quickly", "gaze", "plan", "rush",
    "stone", "town", "battle", "ignore", "spirit", "stood", "stupid", "yours",
    "brown", "build", "dust", "hey", "kept", "pay", "phone", "twist",
    "although", "ball", "beyond", "hidden", "nose", "taken", "fail", "float",
    "pure", "somehow", "wash", "wrap", "angry", "cheek", "creature",
    "forgotten", "heat", "rip", "single", "space", "special", "weak",
    "whatever", "yell", "anyway", "blame", "job", "choose", "country", "curse",
    "drift", "echo", "figure", "grew", "laughter", "neck", "suffer", "worse",
    "yeah", "disappear", "foot", "forward", "knife", "mess", "somewhere",
    "stomach", "storm", "beg", "idea", "lift", "offer", "breeze", "field",
    "five", "often", "simply", "stuck", "win", "allow", "confuse", "enjoy",
    "except", "flower", "seek", "strength", "calm", "grin", "gun", "heavy",
    "hill", "large", "ocean", "shoe", "sigh", "straight", "summer", "tongue",
    "accept", "crazy", "everyday", "exist", "grass", "mistake", "sent", "shut",
    "surround", "table", "ache", "brain", "destroy", "heal", "nature", "shout",
    "sign", "stain", "choice", "doubt", "glance", "glow", "mountain", "queen",
    "stranger", "throat", "tomorrow", "city", "either", "fish", "flame",
    "rather", "shape", "spin", "spread", "ash", "distance", "finish", "image",
    "imagine", "important", "nobody", "shatter", "warmth", "became", "feed",
    "flesh", "funny", "lust", "shirt", "trouble", "yellow", "attention",
    "bare", "bite", "money", "protect", "amaze", "appear", "born", "choke",
    "completely", "daughter", "fresh", "friendship", "gentle", "probably",
    "six", "deserve", "expect", "grab", "middle", "nightmare", "river",
    "thousand", "weight", "worst", "wound", "barely", "bottle", "cream",
    "regret", "relationship", "stick", "test", "crush", "endless", "fault",
    "itself", "rule", "spill", "art", "circle", "join", "kick", "mask",
    "master", "passion", "quick", "raise", "smooth", "unless", "wander",
    "actually", "broke", "chair", "deal", "favorite", "gift", "note", "number",
    "sweat", "box", "chill", "clothes", "lady", "mark", "park", "poor",
    "sadness", "tie", "animal", "belong", "brush", "consume", "dawn", "forest",
    "innocent", "pen", "pride", "stream", "thick", "clay", "complete", "count",
    "draw", "faith", "press", "silver", "struggle", "surface", "taught",
    "teach", "wet", "bless", "chase", "climb", "enter", "letter", "melt",
    "metal", "movie", "stretch", "swing", "vision", "wife", "beside", "crash",
    "forgot", "guide", "haunt", "joke", "knock", "plant", "pour", "prove",
    "reveal", "steal", "stuff", "trip", "wood", "wrist", "bother", "bottom",
    "crawl", "crowd", "fix", "forgive", "frown", "grace", "loose", "lucky",
    "party", "release", "surely", "survive", "teacher", "gently", "grip",
    "speed", "suicide", "travel", "treat", "vein", "written", "cage", "chain",
    "conversation", "date", "enemy", "however", "interest", "million", "page",
    "pink", "proud", "sway", "themselves", "winter", "church", "cruel", "cup",
    "demon", "experience", "freedom", "pair", "pop", "purpose", "respect",
    "shoot", "softly", "state", "strange", "bar", "birth", "curl", "dirt",
    "excuse", "lord", "lovely", "monster", "order", "pack", "pants", "pool",
    "scene", "seven", "shame", "slide", "ugly", "among", "blade", "blonde",
    "closet", "creek", "deny", "drug", "eternity", "gain", "grade", "handle",
    "key", "linger", "pale", "prepare", "swallow", "swim", "tremble", "wheel",
    "won", "cast", "cigarette", "claim", "college", "direction", "dirty",
    "gather", "ghost", "hundred", "loss", "lung", "orange", "present", "swear",
    "swirl", "twice", "wild", "bitter", "blanket", "doctor", "everywhere",
    "flash", "grown", "knowledge", "numb", "pressure", "radio", "repeat",
    "ruin", "spend", "unknown", "buy", "clock", "devil", "early", "false",
    "fantasy", "pound", "precious", "refuse", "sheet", "teeth", "welcome",
    "add", "ahead", "block", "bury", "caress", "content", "depth", "despite",
    "distant", "marry", "purple", "threw", "whenever", "bomb", "dull",
    "easily", "grasp", "hospital", "innocence", "normal", "receive", "reply",
    "rhyme", "shade", "someday", "sword", "toe", "visit", "asleep", "bought",
    "center", "consider", "flat", "hero", "history", "ink", "insane", "muscle",
    "mystery", "pocket", "reflection", "shove", "silently", "smart", "soldier",
    "spot", "stress", "train", "type", "view", "whether", "bus", "energy",
    "explain", "holy", "hunger", "inch", "magic", "mix", "noise", "nowhere",
    "prayer", "presence", "shock", "snap", "spider", "study", "thunder",
    "trail", "admit", "agree", "bag", "bang", "bound", "butterfly", "cute",
    "exactly", "explode", "familiar", "fold", "further", "pierce", "reflect",
    "scent", "selfish", "sharp", "sink", "spring", "stumble", "universe",
    "weep", "women", "wonderful", "action", "ancient", "attempt", "avoid",
    "birthday", "branch", "chocolate", "core", "depress", "drunk",
    "especially", "focus", "fruit", "honest", "match", "palm", "perfectly",
    "pillow", "pity", "poison", "roar", "shift", "slightly", "thump", "truck",
    "tune", "twenty", "unable", "wipe", "wrote", "coat", "constant", "dinner",
    "drove", "egg", "eternal", "flight", "flood", "frame", "freak", "gasp",
    "glad", "hollow", "motion", "peer", "plastic", "root", "screen", "season",
    "sting", "strike", "team", "unlike", "victim", "volume", "warn", "weird",
    "attack", "await", "awake", "built", "charm", "crave", "despair", "fought",
    "grant", "grief", "horse", "limit", "message", "ripple", "sanity",
    "scatter", "serve", "split", "string", "trick", "annoy", "blur", "boat",
    "brave", "clearly", "cling", "connect", "fist", "forth", "imagination",
    "iron", "jock", "judge", "lesson", "milk", "misery", "nail", "naked",
    "ourselves", "poet", "possible", "princess", "sail", "size", "snake",
    "society", "stroke", "torture", "toss", "trace", "wise", "bloom", "bullet",
    "cell", "check", "cost", "darling", "during", "footstep", "fragile",
    "hallway", "hardly", "horizon", "invisible", "journey", "midnight", "mud",
    "nod", "pause", "relax", "shiver", "sudden", "value", "youth", "abuse",
    "admire", "blink", "breast", "bruise", "constantly", "couple", "creep",
    "curve", "difference", "dumb", "emptiness", "gotta", "honor", "plain",
    "planet", "recall", "rub", "ship", "slam", "soar", "somebody", "tightly",
    "weather", "adore", "approach", "bond", "bread", "burst", "candle",
    "coffee", "cousin", "crime", "desert", "flutter", "frozen", "grand",
    "heel", "hello", "language", "level", "movement", "pleasure", "powerful",
    "random", "rhythm", "settle", "silly", "slap", "sort", "spoken", "steel",
    "threaten", "tumble", "upset", "aside", "awkward", "bee", "blank", "board",
    "button", "card", "carefully", "complain", "crap", "deeply", "discover",
    "drag", "dread", "effort", "entire", "fairy", "giant", "gotten", "greet",
    "illusion", "jeans", "leap", "liquid", "march", "mend", "nervous", "nine",
    "replace", "rope", "spine", "stole", "terror", "accident", "apple",
    "balance", "boom", "childhood", "collect", "demand", "depression",
    "eventually", "faint", "glare", "goal", "group", "honey", "kitchen",
    "laid", "limb", "machine", "mere", "mold", "murder", "nerve", "painful",
    "poetry", "prince", "rabbit", "shelter", "shore", "shower", "soothe",
    "stair", "steady", "sunlight", "tangle", "tease", "treasure", "uncle",
    "begun", "bliss", "canvas", "cheer", "claw", "clutch", "commit", "crimson",
    "crystal", "delight", "doll", "existence", "express", "fog", "football",
    "gay", "goose", "guard", "hatred", "illuminate", "mass", "math", "mourn",
    "rich", "rough", "skip", "stir", "student", "style", "support", "thorn",
    "tough", "yard", "yearn", "yesterday", "advice", "appreciate", "autumn",
    "bank", "beam", "bowl", "capture", "carve", "collapse", "confusion",
    "creation", "dove", "feather", "girlfriend", "glory", "government",
    "harsh", "hop", "inner", "loser", "moonlight", "neighbor", "neither",
    "peach", "pig", "praise", "screw", "shield", "shimmer", "sneak", "stab",
    "subject", "throughout", "thrown", "tower", "twirl", "wow", "army",
    "arrive", "bathroom", "bump", "cease", "cookie", "couch", "courage", "dim",
    "guilt", "howl", "hum", "husband", "insult", "led", "lunch", "mock",
    "mostly", "natural", "nearly", "needle", "nerd", "peaceful", "perfection",
    "pile", "price", "remove", "roam", "sanctuary", "serious", "shiny",
    "shook", "sob", "stolen", "tap", "vain", "void", "warrior", "wrinkle",
    "affection", "apologize", "blossom", "bounce", "bridge", "cheap",
    "crumble", "decision", "descend", "desperately", "dig", "dot", "flip",
    "frighten", "heartbeat", "huge", "lazy", "lick", "odd", "opinion",
    "process", "puzzle", "quietly", "retreat", "score", "sentence", "separate",
    "situation", "skill", "soak", "square", "stray", "taint", "task", "tide",
    "underneath", "veil", "whistle", "anywhere", "bedroom", "bid", "bloody",
    "burden", "careful", "compare", "concern", "curtain", "decay", "defeat",
    "describe", "double", "dreamer", "driver", "dwell", "evening", "flare",
    "flicker", "grandma", "guitar", "harm", "horrible", "hungry", "indeed",
    "lace", "melody", "monkey", "nation", "object", "obviously", "rainbow",
    "salt", "scratch", "shown", "shy", "stage", "stun", "third", "tickle",
    "useless", "weakness", "worship", "worthless", "afternoon", "beard",
    "boyfriend", "bubble", "busy", "certain", "chin", "concrete", "desk",
    "diamond", "doom", "drawn", "due", "felicity", "freeze", "frost", "garden",
    "glide", "harmony", "hopefully", "hunt", "jealous", "lightning", "mama",
    "mercy", "peel", "physical", "position", "pulse", "punch", "quit", "rant",
    "respond", "salty", "sane", "satisfy", "savior", "sheep", "slept",
    "social", "sport", "tuck", "utter", "valley", "wolf", "aim", "alas",
    "alter", "arrow", "awaken", "beaten", "belief", "brand", "ceiling",
    "cheese", "clue", "confidence", "connection", "daily", "disguise", "eager",
    "erase", "essence", "everytime", "expression", "fan", "flag", "flirt",
    "foul", "fur", "giggle", "glorious", "ignorance", "law", "lifeless",
    "measure", "mighty", "muse", "north", "opposite", "paradise", "patience",
    "patient", "pencil", "petal", "plate", "ponder", "possibly", "practice",
    "slice", "spell", "stock", "strife", "strip", "suffocate", "suit",
    "tender", "tool", "trade", "velvet", "verse", "waist", "witch", "aunt",
    "bench", "bold", "cap", "certainly", "click", "companion", "creator",
    "dart", "delicate", "determine", "dish", "dragon", "drama", "drum", "dude",
    "everybody", "feast", "forehead", "former", "fright", "fully", "gas",
    "hook", "hurl", "invite", "juice", "manage", "moral", "possess", "raw",
    "rebel", "royal", "scale", "scary", "several", "slight", "stubborn",
    "swell", "talent", "tea", "terrible", "thread", "torment", "trickle",
    "usually", "vast", "violence", "weave", "acid", "agony", "ashamed", "awe",
    "belly", "blend", "blush", "character", "cheat", "common", "company",
    "coward", "creak", "danger", "deadly", "defense", "define", "depend",
    "desperate", "destination", "dew", "duck", "dusty", "embarrass", "engine",
    "example", "explore", "foe", "freely", "frustrate", "generation", "glove",
    "guilty", "health", "hurry", "idiot", "impossible", "inhale", "jaw",
    "kingdom", "mention", "mist", "moan", "mumble", "mutter", "observe", "ode",
    "pathetic", "pattern", "pie", "prefer", "puff", "rape", "rare", "revenge",
    "rude", "scrape", "spiral", "squeeze", "strain", "sunset", "suspend",
    "sympathy", "thigh", "throne", "total", "unseen", "weapon", "weary"
];
