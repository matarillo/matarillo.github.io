/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allWordList; });
var allWordList = [
    "aback", "abacus", "abandon", "abandoned", "abandonment", "abashed", "abate", "abbey", "abbreviate", "abbreviation", "abdicate", "abdication", "abdomen", "abdominal", "abduct", "abduction", "aberration", "abet", "abhor", "abhorrence", "abhorrent", "abide", "abiding", "ability", "abject", "ablaze", "able", "ably", "abnormal", "abnormality", "abnormally", "aboard", "abolish", "abolition", "abolitionist", "abominable", "aboriginal", "aborigine", "abort", "abortion", "abortive", "abound", "about", "above", "aboveboard", "abrasive", "abrasively", "abreast", "abridge", "abridgment", "abroad", "abrupt", "abruptly", "abruptness", "abscess", "abscond", "absence", "absent", "absentee", "absenteeism", "absently", "absolute", "absolutely", "absolve", "absorb", "absorbed", "absorbent", "absorbing", "absorption", "abstain", "abstention", "abstinence", "abstinent", "abstract", "abstraction", "absurd", "absurdity", "absurdly", "abundance", "abundant", "abundantly", "abuse", "abusive", "abysmal", "abysmally", "abyss", "academic", "academically", "academy", "accelerate", "acceleration", "accelerator", "accent", "accented", "accentuate", "accept", "acceptability", "acceptable", "acceptably", "acceptance", "accepted", "access", "accessibility", "accessible", "accessory", "accident", "accidental", "accidentally", "acclaim", "acclaimed", "acclimate", "acclimation", "accolade", "accommodate", "accommodating", "accommodation", "accommodations", "accompaniment", "accompanist", "accompany", "accomplice", "accomplish", "accomplished", "accomplishment", "accord", "accordance", "accordingly", "accordion", "accost", "account", "accountability", "accountable", "accountant", "accounting", "accreditation", "accredited", "accrue", "accumulate", "accumulation", "accuracy", "accurate", "accurately", "accusation", "accuse", "accused", "accuser", "accusing", "accusingly", "accustom", "accustomed", "ace", "acerbic", "ache", "achieve", "achievement", "achiever", "achy", "acid", "acidic", "acidity", "acknowledge", "acknowledged", "acknowledgment", "acne", "acorn", "acoustic", "acoustics", "acquaint", "acquaintance", "acquainted", "acquiesce", "acquiescence", "acquire", "acquisition", "acquit", "acquittal", "acre", "acrid", "acrimonious", "acrimony", "acrobat", "acrobatic", "acrobatics", "acronym", "across", "acrylic", "act", "acting", "action", "activate", "activation", "active", "activism", "activist", "activity", "actor", "actress", "actual", "actuality", "actualization", "actually", "acumen", "acupuncture", "acute", "acutely", "ad", "adage", "adamant", "adamantly", "adapt", "adaptable", "adaptation", "adapter", "add", "addict", "addicted", "addiction", "addictive", "addition", "additional", "additionally", "additive", "address", "adept", "adeptly", "adequacy", "adequate", "adequately", "adhere", "adherence", "adherent", "adhesion", "adhesive", "adjacent", "adjectival", "adjective", "adjoin", "adjoining", "adjourn", "adjournment", "adjudicate", "adjudicator", "adjunct", "adjust", "adjustable", "adjustment", "administer", "administration", "administrative", "administrator", "admirable", "admirably", "admiral", "admiration", "admire", "admirer", "admiring", "admiringly", "admissible", "admission", "admit", "admittance", "admittedly", "admonish", "admonition", "adobe", "adolescence", "adolescent", "adopt", "adopted", "adoption", "adoptive", "adorable", "adoration", "adore", "adorn", "adornment", "adrenaline", "adrift", "adroit", "adroitly", "adulation", "adult", "adulterate", "adulteration", "adultery", "advance", "advanced", "advancement", "advantage", "advantageous", "advent", "adventure", "adventurer", "adventurous", "adverb", "adverbial", "adversary", "adverse", "adversely", "adversity", "advertise", "advertisement", "advertiser", "advertising", "advice", "advisable", "advise", "adviser", "advisory", "advocacy", "advocate", "aerial", "aerobic", "aerobics", "aerodynamic", "aerodynamics", "aerosol", "aerospace", "aesthetic", "aesthetically", "aesthetics", "afar", "affable", "affably", "affair", "affairs", "affect", "affectation", "affected", "affection", "affectionate", "affectionately", "affidavit", "affiliate", "affiliated", "affiliation", "affinity", "affirm", "affirmation", "affirmative", "affirmatively", "affix", "afflict", "affliction", "affluence", "affluent", "afford", "affordable", "affront", "afloat", "afraid", "afresh", "africa", "african", "after", "aftereffect", "afterlife", "aftermath", "afternoon", "aftershave", "aftershock", "afterthought", "afterward", "afterwards", "again", "against", "age", "aged", "agency", "agenda", "agent", "ages", "aggravate", "aggravating", "aggravation", "aggression", "aggressive", "aggressively", "aggressiveness", "aggressor", "aggrieved", "aghast", "agile", "agility", "aging", "agitate", "agitated", "agitation", "agitator", "agnostic", "agnosticism", "ago", "agonize", "agonized", "agonizing", "agonizingly", "agony", "agree", "agreeable", "agreeably", "agreed", "agreement", "agricultural", "agriculture", "ah", "aha", "ahead", "aid", "aide", "ailing", "ailment", "aim", "aimless", "aimlessly", "air", "airborne", "aircraft", "airfare", "airfield", "airily", "airing", "airless", "airline", "airliner", "airmail", "airplane", "airport", "airs", "airspace", "airstrip", "airtight", "airwaves", "airy", "aisle", "ajar", "akin", "alarm", "alarmed", "alarming", "alarmingly", "alarmist", "alas", "albeit", "albino", "album", "alcohol", "alcoholic", "alcoholism", "alcove", "alderman", "alderwoman", "ale", "alert", "alfalfa", "algae", "algebra", "algebraic", "algorithm", "alias", "alibi", "alien", "alienate", "alienation", "alight", "align", "alignment", "alike", "alimony", "alive", "alkali", "alkaline", "all", "allah", "allay", "allegation", "allege", "alleged", "allegedly", "allegiance", "allegorical", "allegory", "allergic", "allergy", "alleviate", "alleviation", "alley", "alliance", "allied", "alligator", "allocate", "allocation", "allot", "allotment", "allow", "allowable", "allowance", "alloy", "allude", "allure", "alluring", "allusion", "ally", "almanac", "almighty", "almond", "almost", "alms", "aloft", "aloha", "alone", "along", "alongside", "aloof", "aloud", "alphabet", "alphabetical", "alphabetically", "alpine", "already", "alright", "also", "altar", "alter", "alteration", "altercation", "alternate", "alternately", "alternation", "alternative", "alternatively", "although", "altitude", "alto", "altogether", "altruism", "altruistic", "aluminum", "alumna", "alumnae", "alumni", "alumnus", "always", "am", "amalgamate", "amalgamation", "amass", "amateur", "amateurish", "amaze", "amazed", "amazement", "amazing", "amazingly", "ambassador", "ambassadorial", "amber", "ambiance", "ambidextrous", "ambiguity", "ambiguous", "ambiguously", "ambition", "ambitious", "ambitiously", "ambivalence", "ambivalent", "amble", "ambulance", "ambush", "ameliorate", "amelioration", "amen", "amenable", "amend", "amendment", "amends", "amenity", "america", "american", "americana", "americanism", "amiable", "amiably", "amicable", "amicably", "amid", "amidst", "amiss", "ammo", "ammonia", "ammunition", "amnesia", "amnesiac", "amnesty", "amoeba", "amok", "among", "amongst", "amoral", "amorous", "amorphous", "amount", "amp", "ampere", "amphetamine", "amphibian", "amphibious", "amphitheater", "ample", "amplification", "amplifier", "amplify", "amply", "amputate", "amputation", "amputee", "amuse", "amused", "amusement", "amusing", "an", "anachronism", "anachronistic", "anagram", "anal", "analgesic", "analogous", "analogy", "analyses", "analysis", "analyst", "analytic", "analyze", "anarchist", "anarchy", "anatomical", "anatomy", "ancestor", "ancestral", "ancestry", "anchor", "anchorman", "anchorwoman", "anchovy", "ancient", "and", "anecdotal", "anecdote", "anemia", "anemic", "anesthesia", "anesthesiologist", "anesthetic", "anesthetist", "anesthetize", "anew", "angel", "angelic", "angelically", "anger", "angle", "angler", "anglican", "angling", "anglo", "angrily", "angry", "angst", "anguish", "anguished", "angular", "animal", "animate", "animated", "animation", "animosity", "ankle", "annals", "annex", "annexation", "annihilate", "annihilation", "anniversary", "annotated", "announce", "announcement", "announcer", "annoy", "annoyance", "annoyed", "annoying", "annual", "annually", "annuity", "annul", "annulment", "anoint", "anomalous", "anonymity", "anonymous", "anonymously", "anorexia", "anorexic", "another", "answer", "answerable", "ant", "antacid", "antagonism", "antagonist", "antagonistic", "antagonistically", "antagonize", "antarctic", "antarctica", "ante", "antebellum", "antelope", "antenna", "antennae", "anthem", "anthill", "anthology", "anthropological", "anthropologist", "anthropology", "antibiotic", "antibody", "anticipate", "anticipation", "anticlimactic", "anticlimax", "antics", "antidote", "antifreeze", "antihistamine", "antipathy", "antiperspirant", "antiquated", "antique", "antiquity", "antiseptic", "antisocial", "antithesis", "antitrust", "antler", "antonym", "anus", "anvil", "anxiety", "anxious", "anxiously", "any", "anybody", "anyhow", "anymore", "anyone", "anyplace", "anything", "anytime", "anyway", "anywhere", "apart", "apartheid", "apartment", "apathetic", "apathy", "ape", "aperitif", "aperture", "apex", "aphorism", "aphrodisiac", "apiece", "aplomb", "apocalypse", "apocalyptic", "apolitical", "apologetic", "apologetically", "apologize", "apology", "apoplectic", "apoplexy", "apostle", "apostolic", "apostrophe", "appall", "appalling", "appallingly", "apparatus", "apparel", "apparent", "apparently", "apparition", "appeal", "appealing", "appear", "appearance", "appease", "appeasement", "append", "appendage", "appendices", "appendicitis", "appendix", "appetite", "appetizer", "appetizing", "applaud", "applause", "apple", "applesauce", "appliance", "applicable", "applicant", "application", "applicator", "applied", "apply", "appoint", "appointed", "appointee", "appointment", "apportion", "appraisal", "appraise", "appreciable",
    "appreciate", "appreciation", "appreciative", "appreciatively", "apprehend", "apprehension", "apprehensive", "apprentice", "apprenticeship", "apprise", "approach", "approachable", "approbation", "appropriate", "appropriately", "appropriation", "approval", "approve", "approving", "approvingly", "approximate", "approximately", "approximation", "apricot", "april", "apron", "apt", "aptitude", "aptly", "aquaria", "aquarium", "aquarius", "aquatic", "aqueduct", "arab", "arabic", "arable", "arbiter", "arbitrarily", "arbitrary", "arbitrate", "arbitration", "arbitrator", "arc", "arcade", "arch", "archaeological", "archaeologist", "archaeology", "archaic", "archbishop", "arched", "archipelago", "architect", "architectural", "architecture", "archive", "archives", "archway", "arctic", "ardent", "ardently", "ardor", "arduous", "are", "area", "arena", "arguable", "arguably", "argue", "argument", "argumentative", "aria", "arid", "aries", "arise", "arisen", "aristocracy", "aristocrat", "aristocratic", "arithmetic", "arm", "armadillo", "armaments", "armband", "armchair", "armed", "armful", "armhole", "armistice", "armor", "armored", "armory", "armpit", "arms", "army", "aroma", "aromatic", "arose", "around", "arousal", "arouse", "arraign", "arraignment", "arrange", "arrangement", "array", "arrears", "arrest", "arrival", "arrive", "arrogance", "arrogant", "arrogantly", "arrow", "arsenal", "arsenic", "arson", "arsonist", "art", "arterial", "artery", "arthritic", "arthritis", "artichoke", "article", "articulate", "articulately", "articulation", "artifact", "artificial", "artificially", "artillery", "artisan", "artist", "artistic", "artistically", "artistry", "arts", "artsy", "artwork", "as", "asbestos", "ascend", "ascendancy", "ascending", "ascent", "ascertain", "ascetic", "ascribe", "asexual", "ash", "ashamed", "ashen", "ashes", "ashore", "ashtray", "asia", "asian", "aside", "ask", "askance", "askew", "asleep", "asparagus", "aspect", "aspersion", "asphalt", "asphyxiate", "asphyxiation", "aspiration", "aspire", "aspirin", "aspiring", "ass", "assailant", "assassin", "assassinate", "assassination", "assault", "assemble", "assembly", "assemblyman", "assemblywoman", "assent", "assert", "assertion", "assertive", "assertively", "assertiveness", "assess", "assessment", "asset", "asshole", "assign", "assignment", "assimilate", "assimilation", "assist", "assistance", "assistant", "associate", "association", "assorted", "assortment", "assume", "assumption", "assurance", "assure", "assured", "assuredly", "asterisk", "asteroid", "asthma", "asthmatic", "astonish", "astonished", "astonishing", "astonishingly", "astonishment", "astound", "astounding", "astray", "astride", "astringent", "astrologer", "astrological", "astrology", "astronaut", "astronomer", "astronomical", "astronomy", "astroturf", "astute", "astutely", "asylum", "at", "ate", "atheism", "atheist", "athlete", "athletic", "athletics", "atlantic", "atlas", "atmosphere", "atmospheric", "atom", "atomic", "atonement", "atrocious", "atrociously", "atrocity", "attach", "attache", "attached", "attachment", "attack", "attacker", "attain", "attainable", "attainment", "attempt", "attend", "attendance", "attendant", "attention", "attentive", "attentively", "attest", "attic", "attire", "attitude", "attorney", "attract", "attraction", "attractive", "attractively", "attractiveness", "attributable", "attribute", "attribution", "attuned", "auburn", "auction", "auctioneer", "audacious", "audacity", "audible", "audibly", "audience", "audio", "audiovisual", "audit", "audition", "auditor", "auditorium", "augment", "august", "aunt", "aura", "aural", "auspices", "auspicious", "austere", "austerity", "australia", "australian", "authentic", "authentically", "authenticate", "authenticity", "author", "authoritarian", "authoritative", "authoritatively", "authority", "authorization", "authorize", "authorship", "autistic", "auto", "autobiographical", "autobiography", "autocracy", "autocrat", "autocratic", "autograph", "automate", "automatic", "automatically", "automation", "automobile", "automotive", "autonomous", "autonomously", "autonomy", "autopsy", "autoworker", "autumn", "autumnal", "auxiliary", "avail", "availability", "available", "avalanche", "avarice", "avaricious", "avenge", "avenue", "average", "averse", "aversion", "avert", "aviation", "aviator", "avid", "avidly", "avocado", "avoid", "avoidable", "avoidance", "avow", "avowal", "avowed", "aw", "await", "awake", "awaken", "awakening", "award", "aware", "awareness", "awash", "away", "awe", "awesome", "awful", "awfully", "awhile", "awkward", "awkwardly", "awkwardness", "awning", "awoke", "awoken", "awry", "ax", "axes", "axiom", "axiomatic", "axis", "axle",
    "baa", "babble", "babe", "baboon", "baby", "babysat", "babysit", "babysitter", "bachelor", "back", "backbone", "backbreaking", "backdrop", "backer", "backfire", "backgammon", "background", "backhand", "backhanded", "backing", "backlash", "backlog", "backpack", "backpacker", "backside", "backstage", "backstroke", "backtrack", "backup", "backward", "backwards", "backwoods", "backyard", "bacon", "bacteria", "bad", "bade", "badge", "badger", "badlands", "badly", "badminton", "badmouth", "baffle", "baffled", "baffling", "bag", "bagel", "baggage", "baggy", "bagpipes", "bail", "bailiff", "bait", "bake", "baker", "bakery", "balance", "balanced", "balcony", "bald", "balding", "bale", "baleful", "balk", "ball", "ballad", "ballerina", "ballet", "ballistic", "ballistics", "balloon", "ballot", "ballpark", "ballroom", "balls", "balm", "balmy", "baloney", "bamboo", "bamboozle", "ban", "banal", "banality", "banana", "band", "bandage", "bandanna", "bandit", "bandstand", "bandwagon", "bandy", "bane", "bang", "bangle", "bangs", "banish", "banister", "banjo", "bank", "banker", "banking", "bankrupt", "bankruptcy", "banner", "banquet", "banter", "baptism", "baptismal", "baptist", "baptize", "bar", "barbarian", "barbaric", "barbarism", "barbecue", "barbell", "barber", "barbiturate", "bare", "barefoot", "barely", "barf", "bargain", "barge", "baritone", "bark", "barley", "barn", "barnacle", "barnyard", "barometer", "barometric", "baron", "barracks", "barrage", "barrel", "barren", "barricade", "barrier", "barring", "barrio", "barroom", "bartender", "barter", "base", "baseball", "basement", "bases", "bash", "bashful", "bashing", "basic", "basically", "basics", "basin", "basis", "bask", "basket", "basketball", "bass", "bassist", "bassoon", "bastard", "bat", "batch", "bated", "bath", "bathe", "bathrobe", "bathroom", "bathtub", "baton", "battalion", "batter", "battered", "battery", "battle", "battlefield", "battleground", "battleship", "bawdy", "bawl", "bay", "bayonet", "bayou", "bazaar", "be", "beach", "beacon", "bead", "beady", "beagle", "beak", "beaker", "beam", "bean", "bear", "bearable", "beard", "bearded", "bearer", "bearing", "beast", "beat", "beaten", "beater", "beating", "beautician", "beautiful", "beautifully", "beauty", "beaver", "bebop", "became", "because", "beckon", "become", "becoming", "bed", "bedbug", "bedclothes", "bedding", "bedlam", "bedpan", "bedraggled", "bedridden", "bedroom", "bedside", "bedspread", "bedtime", "bee", "beech", "beef", "beefy", "beehive", "beeline", "been", "beep", "beeper", "beer", "beeswax", "beet", "beetle", "befall", "befallen", "befell", "befit", "befitting", "before", "beforehand", "befriend", "beg", "began", "beggar", "begin", "beginner", "beginning", "begrudge", "beguile", "begun", "behalf", "behave", "behavior", "behead", "behind", "behold", "beholder", "beige", "being", "belated", "belatedly", "belch", "belie", "belief", "believable", "believe", "believer", "belittle", "bell", "belligerence", "bellow", "belly", "bellybutton", "belong", "belongings", "beloved", "below", "belt", "beltway", "bemused", "bench", "benchmark", "bend", "beneath", "benediction", "benefactor", "beneficial", "beneficiary", "benefit", "benevolence", "benevolent", "benign", "bent", "bequeath", "bequest", "berate", "bereaved", "bereavement", "bereft", "beret", "berry", "berserk", "berth", "beset", "beside", "besides", "besiege", "best", "bestial", "bestiality", "bestow", "bestseller", "bet", "betray", "betrayal", "better", "betterment", "between", "beveled", "beverage", "beware", "bewildered", "bewildering", "bewilderment", "bewitching", "beyond", "bias", "biased", "bib", "bible", "biblical", "bibliography", "bicentennial", "biceps", "bicker", "bicycle", "bid", "bidden", "bidder", "bidding", "bide", "biennial", "bifocals", "big", "bigamist", "bigamous", "bigamy", "biggie", "bigmouth", "bigot", "bigoted", "bigotry", "bigwig", "bike", "biker", "bikini", "bilateral", "bilaterally", "bile", "bilingual", "bill", "billboard", "billfold", "billiards", "billion", "billionaire", "billionth", "billow", "bimbo", "bimonthly", "bin", "binary", "bind", "binder", "binding", "binge", "bingo", "binoculars", "biochemistry", "biodegradable", "biographer", "biographical", "biography", "biological", "biologist", "biology", "biopsy", "bipartisan", "biped", "biplane", "birch", "bird", "birdbrained", "birdseed", "birth", "birthday", "birthmark", "birthplace", "birthrate", "biscuit", "bisect", "bisection", "bisexual", "bishop", "bison", "bit", "bitch", "bitchy", "bite", "biting", "bitten", "bitter", "bitterly", "bitterness", "biweekly", "bizarre", "blab", "blabbermouth", "black", "blackberry", "blackbird", "blackboard", "blacken", "blackhead", "blackjack", "blacklist", "blackmail", "blackmailer", "blackness", "blackout", "blacksmith", "blacktop", "bladder", "blade", "blah", "blame", "blameless", "blanch", "bland", "blandly", "blank", "blanket", "blankly", "blankness", "blare", "blase", "blaspheme", "blasphemous", "blasphemy", "blast", "blastoff", "blatant", "blatantly", "blaze", "blazer", "bleach", "bleachers", "bleak", "bleakly", "bleakness", "blearily", "bleary", "bled", "bleed", "bleeding", "blemish", "blemished", "blend", "blender", "bless", "blessed", "blessing", "blew", "blight", "blimp", "blind", "blindfold", "blindly", "blindness", "blink", "blip", "bliss", "blissful", "blissfully", "blister", "blistering", "blithe", "blithely", "blitz", "blizzard", "bloated", "blob", "bloc", "block", "blockade", "blockage", "blockbuster", "blockhead", "blond", "blood", "bloodbath", "bloodhound", "bloodless", "bloodshed", "bloodshot", "bloodstain", "bloodstained", "bloodstream", "bloodthirsty", "bloody", "bloom", "blooper", "blossom", "blot", "blotch", "blotchy", "blotter", "blouse", "blow", "blown", "blowout", "blowtorch", "blowup", "blubber", "bludgeon", "blue", "bluebell", "blueberry", "bluebird", "bluegrass", "blueprint", "blues", "bluff", "bluish", "blunder", "blunt", "bluntly", "bluntness", "blur", "blurb", "blurred", "blurry", "blurt", "blush", "blusher", "boa", "boar", "board", "boarder", "boardinghouse", "boardroom", "boardwalk", "boast", "boastful", "boat", "bob", "bobbin", "bobcat", "bobsled", "bodice", "bodily", "body", "bodybuilding", "bodyguard", "bodywork", "bog", "bogeyman", "boggle", "bogus", "bohemian", "boil", "boiler", "boiling", "boisterous", "bold", "boldly", "boldness", "bologna", "bolster", "bolt", "bomb", "bombard", "bombardment", "bombed", "bomber", "bombshell", "bonanza", "bond", "bondage", "bone", "bonfire", "bongo", "bonkers", "bonnet", "bonus", "bony", "boo", "boob", "boogie", "book", "bookcase", "bookend", "bookie", "booking", "bookkeeper", "bookkeeping", "booklet", "bookmaker", "bookmark", "books", "bookstore", "bookworm", "boom", "boomerang", "boon", "boondocks", "boor", "boorish", "boost", "booster", "boot", "bootee", "booth", "bootleg", "bootlegger", "bootstraps", "booty", "booze", "boozer", "bop", "border", "borderline", "bore", "bored", "boredom", "boring", "born", "borne", "borough", "borrow", "borrower", "bosom", "boss", "bossily", "bossiness", "bossy", "botanical", "botanist", "botany", "botch", "both", "bother", "bothersome", "bottle", "bottled", "bottleneck", "bottom", "bottomless", "bottoms", "bough", "bought", "boulder", "boulevard", "bounce", "bouncer", "bouncy", "bound", "boundary", "boundless", "bounds", "bountiful", "bounty", "bouquet", "bourbon", "bourgeois", "bourgeoisie", "bout", "boutique", "bovine", "bow", "bowel", "bowl", "bowlegged", "bowling", "box", "boxcar", "boxer", "boxing", "boy", "boycott", "boyfriend", "boyhood", "boyish", "bozo", "bra", "brace", "bracelet", "braces", "bracing", "bracket", "brackish", "brag", "braggart", "braid", "braille", "brain", "brainchild", "brainless", "brains", "brainstorm", "brainwash", "brainwashing", "brainy", "braise", "brake", "bran", "branch", "brand", "brandish", "brandy", "brash", "brass", "brassiere", "brassy", "brat", "bravado", "brave", "bravely", "bravery", "bravo", "brawl", "brawn", "brawny", "bray", "brazen", "brazenly", "brazier", "breach", "bread", "breadbasket", "breadth", "breadwinner", "break", "breakable", "breakdown", "breakfast", "breakneck", "breakthrough", "breakup", "breakwater", "breast", "breaststroke", "breath", "breathe", "breather", "breathing", "breathless", "breathlessly", "breathtaking", "breathtakingly", "bred", "breed", "breeder", "breeding", "breeze", "breezy", "brethren", "brevity", "brew", "brewer", "brewery", "bribe", "bribery", "brick", "bricklayer", "bricklaying", "bridal", "bride", "bridegroom", "bridesmaid", "bridge", "bridle", "brief", "briefcase", "briefing", "briefly", "briefs", "brigade", "bright", "brighten", "brightly", "brightness", "brilliance", "brilliant", "brilliantly", "brim", "brine", "bring", "brink", "briny", "brisk", "briskly", "bristle", "britain", "britches", "british", "brittle", "broach", "broad", "broadcast", "broadcaster", "broaden", "broadly", "broadside", "broccoli", "brochure", "brogue", "broil", "broiler", "broke", "broken", "brokenhearted", "broker", "brokerage", "bronchitis", "bronco", "bronze", "brooch", "brood", "brook", "broom", "broomstick", "broth", "brothel", "brother", "brotherhood", "brotherly", "brought", "brow", "browbeat", "brown", "brownie", "brownies", "brownish", "brownstone", "browse", "browser", "bruise", "brunch", "brunette", "brunt", "brush", "brusque", "brutal", "brutality", "brutalize", "brutally", "brute", "brutish", "bubble", "bubbly", "buck", "bucket", "buckle", "bucktoothed", "bud", "buddha", "buddhism", "buddhist", "budding", "buddy", "budge", "budget", "buff", "buffalo", "buffer", "buffet", "buffoon", "bug", "buggy", "bugle", "build", "builder", "building", "buildup", "built", "bulb", "bulbous", "bulge", "bulging", "bulk", "bulky", "bull", "bulldog", "bulldoze", "bulldozer", "bullet", "bulletin", "bulletproof", "bullfight", "bullfighter", "bullfighting", "bullion", "bullish", "bullshit", "bully", "bum", "bumblebee", "bumbling", "bummer", "bump", "bumper", "bumpy",
    "bun", "bunch", "bundle", "bungalow", "bungle", "bungler", "bunion", "bunk", "bunker", "bunny", "buns", "buoy", "buoyancy", "buoyant", "buoyantly", "burden", "bureau", "bureaucracy", "bureaucrat", "bureaucratic", "burger", "burglar", "burglarize", "burglary", "burial", "burlap", "burly", "burn", "burner", "burning", "burnish", "burnt", "burp", "burrow", "bursar", "burst", "bury", "bus", "busboy", "bush", "bushed", "bushel", "bushy", "busily", "business", "businesslike", "businessman", "businesswoman", "busing", "bust", "buster", "bustle", "busy", "busybody", "busywork", "but", "butcher", "butchery", "butler", "butt", "butte", "butter", "buttercup", "butterfingers", "butterfly", "buttermilk", "butterscotch", "buttock", "button", "buttonhole", "buttress", "buxom", "buy", "buyer", "buyout", "buzz", "buzzard", "buzzer", "buzzword", "by", "bye", "bygone", "bylaw", "bypass", "bystander", "byte", "byway",
    "cab", "cabaret", "cabbage", "cabby", "cabin", "cabinet", "cable", "caboose", "cache", "cachet", "cackle", "cacti", "cactus", "cadaver", "cadence", "cadet", "cadre", "cafe", "cafeteria", "caffeine", "cage", "caged", "cagey", "cahoots", "cajole", "cake", "calamity", "calcium", "calculate", "calculated", "calculating", "calculation", "calculator", "calculus", "calendar", "calf", "caliber", "calibrate", "calibration", "calico", "call", "caller", "calligraphy", "calling", "callous", "callously", "callousness", "callus", "calm", "calmly", "calmness", "calorie", "calves", "camaraderie", "camcorder", "came", "camel", "camellia", "cameo", "camera", "cameraman", "camerawoman", "camouflage", "camp", "campaign", "campaigner", "camper", "campground", "camping", "campsite", "campus", "can", "canadian", "canal", "canary", "cancel", "cancellation", "cancer", "candid", "candidacy", "candidate", "candidly", "candle", "candlelight", "candlestick", "candor", "candy", "cane", "canine", "canister", "canker", "cannabis", "canned", "cannery", "cannibal", "cannibalism", "cannon", "cannonball", "cannot", "canny", "canoe", "canopied", "canopy", "cantaloupe", "cantankerous", "canteen", "canter", "cantonese", "canvas", "canvass", "canyon", "cap", "capability", "capable", "capacity", "cape", "caper", "capillary", "capital", "capitalism", "capitalist", "capitalization", "capitalize", "capitol", "capitulate", "capitulation", "cappuccino", "caprice", "capricious", "capriciously", "capricorn", "capsize", "capsule", "captain", "caption", "captivate", "captivating", "captive", "captivity", "captor", "capture", "car", "caramel", "carat", "caravan", "carbohydrate", "carbon", "carbonated", "carburetor", "carcass", "card", "cardboard", "cardiac", "cardigan", "cardinal", "cardiology", "cards", "care", "careen", "career", "carefree", "careful", "carefully", "carefulness", "careless", "carelessly", "carelessness", "caress", "caretaker", "cargo", "caribbean", "caribou", "caricature", "caring", "carjacker", "carjacking", "carnage", "carnal", "carnation", "carnival", "carnivore", "carnivorous", "carol", "carouse", "carousel", "carp", "carpenter", "carpentry", "carpet", "carpeted", "carpeting", "carriage", "carrier", "carrot", "carry", "carryout", "cart", "cartel", "cartilage", "cartographer", "cartography", "carton", "cartoon", "cartoonist", "cartridge", "cartwheel", "carve", "carving", "cascade", "case", "casework", "caseworker", "cash", "cashew", "cashier", "cashmere", "casing", "casino", "cask", "casket", "casserole", "cassette", "cast", "castaway", "caste", "caster", "castigate", "castigation", "casting", "castle", "castoff", "castrate", "castration", "casual", "casually", "casualness", "casualty", "cat", "cataclysm", "cataclysmic", "catalog", "catalyst", "catamaran", "catapult", "cataract", "catastrophe", "catastrophic", "catch", "catching", "catchy", "catechism", "categorical", "categorically", "categorize", "category", "cater", "caterer", "catering", "caterpillar", "catfish", "cathedral", "catholic", "catholicism", "catnap", "catnip", "cattle", "catty", "catwalk", "caucasian", "caucus", "caught", "cauliflower", "cause", "caustic", "caution", "cautionary", "cautious", "cautiously", "cavalier", "cavalry", "cave", "caveman", "cavern", "caviar", "cavity", "cavort", "cease", "ceaseless", "ceaselessly", "cedar", "cede", "ceiling", "celebrate", "celebrated", "celebration", "celebrity", "celery", "celestial", "celibacy", "celibate", "cell", "cellar", "cellist", "cello", "cellophane", "cellular", "celluloid", "cellulose", "celsius", "cement", "cemetery", "censor", "censorship", "censure", "census", "cent", "centenary", "centennial", "center", "centerpiece", "centigrade", "centimeter", "centipede", "central", "centralize", "centrally", "century", "ceramic", "ceramics", "cereal", "cerebral", "ceremonial", "ceremony", "certain", "certainly", "certainty", "certifiable", "certificate", "certification", "certify", "cervical", "cervix", "cesarean", "cessation", "cesspool", "chafe", "chagrin", "chain", "chainsaw", "chair", "chairman", "chairmanship", "chairperson", "chairwoman", "chalet", "chalk", "chalkboard", "chalky", "challenge", "challenged", "challenger", "challenging", "chamber", "chameleon", "champ", "champagne", "champion", "championship", "chance", "chancellor", "chandelier", "change", "changeable", "changeover", "channel", "chant", "chaos", "chaotic", "chap", "chapel", "chaperone", "chaplain", "chapped", "chaps", "chapter", "char", "character", "characteristic", "characteristically", "characterization", "characterize", "charade", "charades", "charcoal", "charge", "chariot", "charisma", "charismatic", "charitable", "charitably", "charity", "charlatan", "charm", "charmed", "charmer", "charming", "charred", "chart", "charter", "charts", "chase", "chasm", "chassis", "chaste", "chasten", "chastise", "chastisement", "chastity", "chat", "chateau", "chateaux", "chatter", "chatterbox", "chatty", "chauffeur", "chauvinism", "chauvinist", "chauvinistic", "cheap", "cheapen", "cheaply", "cheapness", "cheapskate", "cheat", "cheater", "check", "checkbook", "checked", "checker", "checkerboard", "checkered", "checkers", "checklist", "checkmate", "checkout", "checkpoint", "checkup", "cheddar", "cheek", "cheekbone", "cheer", "cheerful", "cheerfully", "cheerfulness", "cheerleader", "cheers", "cheery", "cheese", "cheeseburger", "cheesecake", "cheesecloth", "cheetah", "chef", "chemical", "chemically", "chemist", "chemistry", "chemotherapy", "cherish", "cherry", "cherub", "chess", "chessboard", "chest", "chestnut", "chew", "chewy", "chic", "chicano", "chick", "chickadee", "chicken", "chide", "chief", "chiefly", "chieftain", "chiffon", "child", "childbearing", "childbirth", "childcare", "childhood", "childish", "childishly", "childless", "childlike", "childproof", "children", "chili", "chill", "chilling", "chilly", "chime", "chimney", "chimp", "chimpanzee", "chin", "china", "chinatown", "chinese", "chink", "chinos", "chintz", "chip", "chipmunk", "chipper", "chiropractor", "chirp", "chisel", "chit", "chitchat", "chivalrous", "chivalry", "chives", "chlorinate", "chlorine", "chloroform", "chlorophyll", "chocolate", "choice", "choir", "choke", "cholera", "cholesterol", "choose", "choosy", "chop", "chopper", "choppiness", "choppy", "chopsticks", "choral", "chord", "chore", "choreograph", "choreographer", "choreography", "chortle", "chorus", "chose", "chosen", "chow", "chowder", "christ", "christen", "christening", "christian", "christianity", "christmas", "chrome", "chromium", "chromosome", "chronic", "chronically", "chronicle", "chronological", "chronologically", "chronology", "chrysanthemum", "chubby", "chuck", "chuckle", "chug", "chum", "chump", "chunk", "chunky", "church", "churchgoer", "churlish", "churn", "chute", "chutzpah", "cider", "cigar", "cigarette", "cinch", "cinder", "cinema", "cinematographer", "cinnamon", "cipher", "circa", "circle", "circuit", "circuitous", "circular", "circulate", "circulation", "circulatory", "circumcise", "circumcision", "circumference", "circumstance", "circumstances", "circumstantial", "circumvent", "circumvention", "circus", "cirrhosis", "cistern", "citation", "cite", "citizen", "citizenship", "citrus", "city", "civic", "civics", "civil", "civilian", "civilization", "civilize", "civilized", "civilly", "clack", "clad", "claim", "clairvoyance", "clairvoyant", "clam", "clamber", "clammy", "clamor", "clamp", "clampdown", "clan", "clandestine", "clang", "clank", "clap", "clapboard", "clapper", "clarification", "clarify", "clarinet", "clarity", "clash", "clasp", "class", "classic", "classical", "classically", "classics", "classification", "classified", "classify", "classmate", "classroom", "classy", "clatter", "clause", "claustrophobia", "claustrophobic", "claw", "clay", "clean", "cleaner", "cleaners", "cleaning", "cleanliness", "cleanly", "cleanse", "cleanser", "cleanup", "clear", "clearance", "clearing", "clearly", "cleat", "cleavage", "cleaver", "clef", "cleft", "clemency", "clench", "clergy", "clergyman", "clergywoman", "cleric", "clerical", "clerk", "clever", "cleverly", "cleverness", "cliche", "click", "client", "clientele", "cliff", "cliffhanger", "climactic", "climate", "climatic", "climax", "climb", "climber", "clinch", "cling", "clinging", "clinic", "clinical", "clinically", "clinician", "clink", "clip", "clipboard", "clippers", "clipping", "clique", "clitoris", "cloak", "cloakroom", "clobber", "clock", "clockwise", "clockwork", "clod", "clog", "clone", "close", "closed", "closely", "closeness", "closeout", "closet", "closure", "clot", "cloth", "clothe", "clothed", "clothes", "clothesline", "clothespin", "clothing", "cloud", "cloudburst", "cloudless", "cloudy", "clout", "clove", "clover", "clown", "club", "clubhouse", "clubs", "cluck", "clue", "clueless", "clump", "clumsily", "clumsiness", "clumsy", "clung", "clunk", "cluster", "clutch", "clutches", "clutter", "cluttered", "coach", "coagulate", "coagulation", "coal", "coalesce", "coalition", "coals", "coarse", "coarsely", "coarsen", "coast", "coastal", "coaster", "coastline", "coat", "coating", "coax", "cob", "cobbler", "cobblestone", "cobra", "cobweb", "cocaine", "cock", "cockeyed", "cockiness", "cockpit", "cockroach", "cocktail", "cocky", "cocoa", "coconut", "cocoon", "cod", "code", "coed", "coeducational", "coerce", "coercion", "coercive", "coexist", "coexistence", "coffee", "coffeehouse", "coffin", "cog", "cogency", "cogent", "cogently", "cognac", "cohabit", "cohabitation", "coherence", "coherent", "coherently", "cohesion", "coil", "coin", "coincide", "coincidence", "coincidental", "coincidentally", "coke", "cola", "colander", "cold", "coldly", "coldness", "coleslaw", "colic", "collaborate", "collaboration", "collaborator", "collage", "collapse", "collapsible", "collar", "collarbone", "collate", "collateral", "colleague", "collect", "collected", "collectible", "collection", "collective", "collectively", "collector", "college", "collegiate", "collide", "collie", "collision",
    "colloquial", "colloquialism", "colloquially", "collusion", "cologne", "colon", "colonel", "colonial", "colonialism", "colonist", "colonization", "colonize", "colony", "color", "colorblind", "colored", "colorful", "coloring", "colorless", "colossal", "colt", "column", "columnist", "coma", "comatose", "comb", "combat", "combatant", "combative", "combination", "combine", "combined", "combustible", "combustion", "come", "comeback", "comedian", "comedown", "comedy", "comet", "comeuppance", "comfort", "comfortable", "comfortably", "comforter", "comforting", "comfy", "comic", "comical", "comics", "coming", "comma", "command", "commandant", "commandeer", "commander", "commanding", "commandment", "commando", "commemorate", "commemoration", "commemorative", "commence", "commencement", "commend", "commendable", "commendation", "comment", "commentary", "commentate", "commentator", "commerce", "commercial", "commercialize", "commercially", "commiserate", "commiseration", "commission", "commissioner", "commit", "commitment", "committed", "committee", "commodity", "commodore", "common", "commonly", "commonplace", "commonwealth", "commotion", "communal", "commune", "communicable", "communicate", "communication", "communications", "communicative", "communion", "communique", "communism", "communist", "community", "commute", "commuter", "compact", "companion", "companionable", "companionship", "company", "comparable", "comparative", "comparatively", "compare", "compared", "comparison", "compartment", "compartmentalize", "compass", "compassion", "compassionate", "compatibility", "compatible", "compatriot", "compel", "compelling", "compensate", "compensation", "compensatory", "compete", "competence", "competent", "competently", "competition", "competitive", "competitively", "competitiveness", "competitor", "compilation", "compile", "complacency", "complacent", "complain", "complaint", "complement", "complementary", "complete", "completely", "completion", "complex", "complexion", "complexity", "compliance", "compliant", "complicate", "complicated", "complication", "complicity", "compliment", "complimentary", "compliments", "comply", "component", "compose", "composed", "composer", "composite", "composition", "compost", "composure", "compound", "comprehend", "comprehensible", "comprehension", "comprehensive", "compress", "compression", "comprise", "compromise", "compulsion", "compulsive", "compulsory", "compunction", "computation", "compute", "computer", "computerize", "computing", "comrade", "comradeship", "con", "concave", "conceal", "concealment", "concede", "conceit", "conceited", "conceivable", "conceivably", "conceive", "concentrate", "concentrated", "concentration", "concentric", "concept", "conception", "conceptual", "concern", "concerned", "concerning", "concert", "concerted", "concerto", "concession", "concierge", "conciliate", "conciliation", "conciliatory", "concise", "concisely", "conciseness", "conclude", "concluding", "conclusion", "conclusive", "conclusively", "concoct", "concoction", "concourse", "concrete", "concretely", "concur", "concurrence", "concurrent", "concurrently", "concussion", "condemn", "condemnation", "condensation", "condense", "condescend", "condescending", "condescension", "condiment", "condition", "conditional", "conditionally", "conditioner", "conditions", "condo", "condolence", "condom", "condominium", "condone", "condor", "conducive", "conduct", "conductor", "cone", "confederacy", "confederate", "confederation", "confer", "conference", "confess", "confessed", "confession", "confetti", "confidant", "confide", "confidence", "confident", "confidential", "confidentiality", "confidentially", "confidently", "confine", "confined", "confinement", "confines", "confirm", "confirmation", "confirmed", "confiscate", "confiscation", "conflict", "conform", "conformist", "conformity", "confound", "confront", "confrontation", "confuse", "confused", "confusing", "confusion", "congeal", "congenial", "congenital", "congested", "congestion", "conglomerate", "congratulate", "congratulations", "congratulatory", "congregate", "congregation", "congress", "congressional", "congressman", "congresswoman", "conical", "conifer", "coniferous", "conjecture", "conjugal", "conjugate", "conjugation", "conjunction", "conjure", "connect", "connected", "connection", "connivance", "connive", "connoisseur", "connotation", "connote", "conquer", "conqueror", "conquest", "conscience", "conscientious", "conscientiously", "conscious", "consciously", "consciousness", "consecrate", "consecration", "consecutive", "consecutively", "consensus", "consent", "consequence", "consequent", "consequently", "conservation", "conservationist", "conservatism", "conservative", "conservatively", "conservator", "conservatory", "conserve", "consider", "considerable", "considerably", "considerate", "considerately", "consideration", "considering", "consign", "consignment", "consist", "consistency", "consistent", "consistently", "consolation", "console", "consolidate", "consolidation", "consomme", "consonant", "consort", "consortia", "consortium", "conspicuous", "conspicuously", "conspiracy", "conspirator", "conspiratorial", "conspire", "constant", "constantly", "constellation", "consternation", "constipated", "constipation", "constituency", "constituent", "constitute", "constitution", "constitutional", "constrain", "constraint", "constrict", "constriction", "construct", "construction", "constructive", "constructively", "construe", "consul", "consular", "consulate", "consult", "consultant", "consultation", "consulting", "consume", "consumer", "consuming", "consummate", "consummation", "consumption", "contact", "contagious", "contain", "container", "contaminate", "contamination", "contemplate", "contemplation", "contemplative", "contemporary", "contempt", "contemptible", "contemptuous", "contend", "contender", "content", "contented", "contentedly", "contention", "contentious", "contentment", "contents", "contest", "contestant", "context", "contiguous", "continent", "continental", "contingency", "contingent", "continual", "continually", "continuation", "continue", "continued", "continuity", "continuous", "continuously", "contort", "contortion", "contour", "contraband", "contraception", "contraceptive", "contract", "contraction", "contractor", "contractual", "contradict", "contradiction", "contradictory", "contraption", "contrary", "contrast", "contrasting", "contravene", "contravention", "contribute", "contribution", "contributor", "contributory", "contrite", "contrition", "contrive", "contrived", "control", "controlled", "controller", "controversial", "controversy", "convalesce", "convalescence", "convalescent", "convene", "convenience", "convenient", "conveniently", "convent", "convention", "conventional", "conventionally", "converge", "conversant", "conversation", "conversational", "converse", "conversely", "conversion", "convert", "convertible", "convex", "convey", "convict", "conviction", "convince", "convinced", "convincing", "convincingly", "convivial", "convoluted", "convoy", "convulse", "convulsion", "coo", "cook", "cookbook", "cookie", "cooking", "cookout", "cool", "cooler", "coolly", "coolness", "coop", "cooperate", "cooperation", "cooperative", "coordinate", "coordination", "coordinator", "cop", "cope", "copier", "copilot", "copious", "copper", "copter", "copulate", "copulation", "copy", "copyright", "coral", "cord", "cordial", "cordiality", "cordially", "cordless", "cordon", "corduroy", "core", "cork", "corkscrew", "corn", "cornbread", "cornea", "corner", "cornerstone", "cornet", "cornflakes", "cornmeal", "cornstarch", "corny", "coronary", "coronation", "coroner", "corporal", "corporate", "corporation", "corps", "corpse", "corpulent", "corpuscle", "corral", "correct", "correction", "corrective", "correctly", "correctness", "correlate", "correlation", "correspond", "correspondence", "correspondent", "corresponding", "correspondingly", "corridor", "corroborate", "corroboration", "corrode", "corrosion", "corrosive", "corrugated", "corrupt", "corruptible", "corruption", "corsage", "corset", "cosmetic", "cosmic", "cosmonaut", "cosmopolitan", "cosmos", "cost", "costar", "costly", "costume", "cot", "cottage", "cotton", "cottonwood", "couch", "cougar", "cough", "could", "council", "councilor", "counsel", "counseling", "counselor", "count", "countable", "countdown", "countenance", "counter", "counteract", "counterattack", "counterbalance", "counterclockwise", "counterfeit", "counterfeiter", "counterpart", "counterproductive", "countersign", "countless", "country", "countryman", "countryside", "countrywoman", "county", "coup", "couple", "coupon", "courage", "courageous", "courageously", "courier", "course", "court", "courteous", "courteously", "courtesy", "courthouse", "courtroom", "courtship", "courtyard", "cousin", "cove", "covenant", "cover", "coverage", "coveralls", "covered", "covering", "covers", "covert", "covertly", "covet", "covetous", "cow", "coward", "cowardice", "cowardly", "cowboy", "cower", "cowgirl", "coworker", "coy", "coyote", "cozy", "crab", "crabby", "crack", "crackdown", "cracked", "cracker", "crackle", "crackpot", "cradle", "craft", "craftily", "craftsman", "craftsmanship", "crafty", "craggy", "cram", "crammed", "cramp", "cramped", "cramps", "cranberry", "crane", "cranium", "crank", "cranky", "cranny", "crap", "crappy", "craps", "crash", "crass", "crate", "crater", "cravat", "crave", "craving", "crawl", "crayfish", "crayon", "craze", "crazed", "crazily", "craziness", "crazy", "creak", "creaky", "cream", "creamy", "crease", "create", "creation", "creative", "creatively", "creativity", "creator", "creature", "credence", "credentials", "credibility", "credible", "credibly", "credit", "creditable", "creditor", "credo", "creed", "creek", "creep", "creepy", "cremate", "cremation", "crematoria", "crematorium", "creole", "crepe", "crept", "crescendo", "crescent", "crest", "crestfallen", "crevasse", "crevice", "crew", "crib", "crick", "cricket", "crime", "criminal", "crimp", "crimson", "cringe", "crinkle", "crinkly", "cripple", "crippled", "crippling", "crises", "crisis", "crisp", "crisply", "crispy", "crisscross", "criteria", "criterion", "critic", "critical", "critically", "criticism", "criticize", "critique", "critter", "croak", "crochet", "crock", "crockery", "crocodile", "crocus", "croissant", "crony", "crook", "crooked", "croon", "crooner", "crop", "croquet", "cross", "crossbow", "crosscheck", "crossfire", "crossing", "crossover", "crossroads", "crosstown", "crosswalk", "crossword", "crotch", "crouch", "crow", "crowbar", "crowd", "crowded", "crown", "crowning", "crucial", "crucially", "crucifix", "crucifixion", "crucify", "crud", "cruddy", "crude", "crudely", "cruel", "cruelly", "cruelty", "cruise", "cruiser", "crumb", "crumble", "crummy", "crumple", "crunch", "crunchy", "crusade", "crusader", "crush", "crushing", "crust", "crustacean", "crusty", "crutch", "crux", "cry", "crybaby", "crying", "crypt", "cryptic", "cryptically", "crystal", "crystallization", "crystallize", "cub", "cube", "cubic", "cubicle", "cuckoo", "cucumber", "cuddle", "cuddly", "cue", "cuff", "cuisine", "culinary", "cull", "culminate", "culmination", "culpability", "culpable", "culprit", "cult", "cultivate", "cultivated", "cultivation", "cultural", "culturally", "culture", "cultured", "cumbersome", "cumulative", "cunning", "cunningly", "cup", "cupboard", "cupcake", "curable", "curator", "curb", "curd", "curdle", "cure", "curfew", "curio", "curiosity", "curious", "curiously", "curl", "curler", "curly", "currant", "currency", "current", "currently", "curricula", "curriculum", "curry", "curse", "cursed", "cursor", "cursory", "curt", "curtail", "curtain", "curtsy", "curve", "curvy", "cushion", "cuss", "custard", "custodial", "custodian", "custody", "custom", "customarily", "customary", "customer", "customize", "customs", "cut", "cutback", "cute", "cutely", "cuteness", "cuticle", "cutlery", "cutlet", "cutoff", "cutter", "cutthroat", "cutting", "cyanide", "cyberspace", "cycle", "cyclical", "cyclist", "cyclone", "cylinder", "cylindrical", "cymbal", "cynic", "cynical", "cynically", "cynicism", "cyrillic", "cyst", "czar",
    "dab", "dabble", "dachshund", "dad", "daddy", "daffodil", "dagger", "daily", "daintily", "dainty", "dairy", "daisy", "dally", "dalmatian", "dam", "damage", "damages", "damaging", "dame", "damn", "damned", "damning", "damp", "dampen", "damper", "dampness", "damsel", "dance", "dancer", "dancing", "dandelion", "dandruff", "dandy", "danger", "dangerous", "dangerously", "dangle", "danish", "dank", "dapper", "dare", "daredevil", "daring", "dark", "darken", "darkness", "darkroom", "darling", "darn", "darned", "dart", "darts", "dash", "dashboard", "data", "database", "date", "dated", "daub", "daughter", "daunt", "daunting", "dawdle", "dawn", "day", "daybreak", "daydream", "daydreamer", "daylight", "days", "daytime", "daze", "dazed", "dazzle", "dazzling", "deacon", "deaconess", "dead", "deaden", "deadline", "deadlock", "deadly", "deadpan", "deaf", "deafen", "deafening", "deafness", "deal", "dealer", "dealership", "dealing", "dealings", "dealt", "dean", "dear", "dearly", "dearth", "death", "deathbed", "deathtrap", "debase", "debasement", "debatable", "debate", "debauchery", "debilitate", "debilitating", "debility", "debit", "debonair", "debrief", "debriefing", "debris", "debt", "debtor", "debug", "debunk", "debut", "debutante", "decade", "decadence", "decadent", "decaf", "decaffeinated", "decal", "decanter", "decapitate", "decathlon", "decay", "deceased", "deceit", "deceitful", "deceitfully", "deceitfulness", "deceive", "december", "decency", "decent", "decently", "decentralization", "decentralize", "deception", "deceptive", "deceptively", "decibel", "decide", "decided", "decidedly", "deciduous", "decimal", "decimate", "decipher", "decision", "decisive", "decisively", "deck", "declaration", "declare", "decline", "decode", "decompose", "decomposition", "decor", "decorate", "decoration", "decorative", "decorator", "decorous", "decorum", "decoy", "decrease", "decree", "decrepit", "decriminalize", "decry", "dedicate", "dedicated", "dedication", "deduce", "deduct", "deductible", "deduction", "deed", "deem", "deep", "deepen", "deeply", "deer", "deface", "defamation", "defamatory", "defame", "default", "defeat", "defeatist", "defecate", "defect", "defection", "defective", "defector", "defend", "defendant", "defender", "defense", "defenseless", "defensible", "defensive", "defensively", "defer", "deference", "deferential", "defiance", "defiant", "defiantly", "deficiency", "deficient", "deficit", "defile", "define", "definite", "definitely", "definition", "definitive", "definitively", "deflate", "deflation", "deflect", "deflection", "deforestation", "deform", "deformation", "deformed", "deformity", "defraud", "defrost", "deft", "deftly", "defunct", "defuse", "defy", "degenerate", "degeneration", "degradation", "degrade", "degrading", "degree", "dehydrate", "dehydrated", "dehydration", "deign", "deity", "dejected", "dejectedly", "dejection", "delay", "delayed", "delectable", "delegate", "delegation", "delete", "deletion", "deli", "deliberate", "deliberately", "deliberation", "delicacy", "delicate", "delicately", "delicatessen", "delicious", "delight", "delighted", "delightful", "delightfully", "delineate", "delinquency", "delinquent", "delirious", "deliriously", "delirium", "deliver", "delivery", "delta", "delude", "deluded", "deluge", "delusion", "deluxe", "delve", "demagogic", "demagogue", "demand", "demanding", "demands", "demean", "demeaning", "demeanor", "demented", "demerit", "demise", "demo", "democracy", "democrat", "democratic", "democratically", "demographics", "demolish", "demolition", "demon", "demonic", "demonstrate", "demonstration", "demonstrative", "demonstrator", "demoralize", "demoralizing", "demote", "demotion", "demure", "den", "denial", "denigrate", "denim", "denomination", "denote", "denounce", "dense", "densely", "density", "dent", "dental", "dented", "dentist", "dentures", "denunciation", "deny", "deodorant", "deodorize", "depart", "department", "departmental", "departure", "depend", "dependable", "dependence", "dependency", "dependent", "depict", "deplete", "depletion", "deplorable", "deplorably", "deplore", "deploy", "deployment", "deport", "deportation", "depose", "deposit", "depot", "depraved", "depravity", "depreciate", "depreciation", "depress", "depressed", "depressing", "depression", "deprivation", "deprive", "deprived", "depth", "deputy", "derail", "derailment", "deranged", "derby", "derelict", "deride", "derision", "derivation", "derivative", "derive", "derogatory", "descend", "descendant", "descent", "describe", "description", "descriptive", "desecrate", "desecration", "desegregate", "desegregation", "desert", "deserted", "deserter", "deserve", "deserving", "design", "designate", "designation", "designer", "designing", "desirability", "desirable", "desire", "desirous", "desist", "desk", "desktop", "desolate", "desolation", "despair", "desperate", "desperately", "desperation", "despicable", "despise", "despite", "despondent", "despondently", "despot", "despotic", "dessert", "destination", "destined", "destiny", "destitute", "destitution", "destroy", "destroyer", "destruction", "destructive", "detach", "detached", "detachment", "detail", "detailed", "detain", "detect", "detection", "detective", "detector", "detente", "detention", "deter", "detergent", "deteriorate", "deterioration", "determination", "determine", "determined", "determiner", "deterrence", "deterrent", "detest", "detonate", "detonation", "detonator", "detour", "detox", "detract", "detriment", "detrimental", "devaluation", "devalue", "devastate", "devastated", "devastating", "devastation", "develop", "developed", "developer", "developing", "development", "deviant", "deviate", "deviation", "device", "devil", "devilish", "devious", "devise", "devoid", "devote", "devoted", "devotedly", "devotee", "devotion", "devour", "devout", "devoutly", "dew", "dexterity", "dexterous", "diabetes", "diabetic", "diabolical", "diagnose", "diagnoses", "diagnosis", "diagnostic", "diagonal", "diagonally", "diagram", "dial", "dialect", "dialogue", "diameter", "diametrically", "diamond", "diamonds", "diaper", "diaphragm", "diarrhea", "diary", "dice", "dicey", "dichotomy", "dick", "dictate", "dictation", "dictator", "dictatorial", "dictatorship", "diction", "dictionary", "did", "die", "diehard", "diesel", "diet", "differ", "difference", "different", "differentiate", "differently", "difficult", "difficulty", "diffuse", "dig", "digest", "digestion", "digestive", "digit", "digital", "dignified", "dignitary", "dignity", "digress", "digression", "dike", "dilapidated", "dilapidation", "dilate", "dilation", "dilemma", "diligence", "diligent", "diligently", "dilute", "dilution", "dim", "dime", "dimension", "dimensions", "diminish", "diminutive", "dimly", "dimple", "din", "dine", "diner", "dinghy", "dingy", "dinner", "dinosaur", "diocese", "dip", "diphtheria", "diphthong", "diploma", "diplomacy", "diplomat", "diplomatic", "diplomatically", "dipstick", "dire", "direct", "direction", "directions", "directive", "directly", "director", "directory", "dirt", "dirty", "dis", "disability", "disable", "disabled", "disadvantage", "disadvantaged", "disaffected", "disagree", "disagreeable", "disagreement", "disallow", "disappear", "disappearance", "disappoint", "disappointed", "disappointing", "disappointingly", "disappointment", "disapproval", "disapprove", "disapproving", "disapprovingly", "disarm", "disarmament", "disarming", "disarray", "disaster", "disastrous", "disastrously", "disavow", "disavowal", "disband", "disbelief", "disbelieve", "discard", "discern", "discernible", "discerning", "discharge", "disciple", "disciplinarian", "disciplinary", "discipline", "disciplined", "disclaim", "disclaimer", "disclose", "disclosure", "disco", "discolor", "discoloration", "discomfort", "disconcert", "disconcerted", "disconcerting", "disconnect", "disconnection", "discontent", "discontented", "discontinuation", "discontinue", "discord", "discordant", "discount", "discourage", "discouraged", "discouragement", "discouraging", "discourse", "discourteous", "discourtesy", "discover", "discoverer", "discovery", "discredit", "discreet", "discreetly", "discrepancy", "discretion", "discretionary", "discriminate", "discriminating", "discrimination", "discus", "discuss", "discussion", "disdain", "disdainful", "disease", "diseased", "disembark", "disembarkation", "disenchanted", "disenchantment", "disenfranchise", "disengage", "disentangle", "disfavor", "disfigure", "disfigurement", "disgrace", "disgraceful", "disgracefully", "disgruntled", "disguise", "disgust", "disgusted", "disgusting", "dish", "dishearten", "disheartening", "disheveled", "dishonest", "dishonestly", "dishonesty", "dishonor", "dishonorable", "dishonorably", "dishtowel", "dishwasher", "disillusion", "disillusioned", "disillusionment", "disinfect", "disinfectant", "disinherit", "disintegrate", "disintegration", "disinterest", "disinterested", "disjointed", "disk", "diskette", "dislike", "dislocate", "dislocation", "dislodge", "disloyal", "disloyalty", "dismal", "dismally", "dismantle", "dismay", "dismember", "dismiss", "dismissal", "dismissive", "dismount", "disobedience", "disobedient", "disobey", "disorder", "disordered", "disorderly", "disorganization", "disorganized", "disorient", "disorientation", "disoriented", "disown", "disparage", "disparaging", "disparate", "disparity", "dispassionate", "dispassionately", "dispatch", "dispel", "dispensable", "dispensary", "dispensation", "dispense", "dispenser", "dispersal", "disperse", "dispirited", "displace", "displacement", "display", "displease", "displeasure", "disposable", "disposal", "dispose", "disposed", "dispossess", "disproportionate", "disproportionately", "disprove", "dispute", "disqualification", "disqualify", "disregard", "disrepair", "disreputable", "disrepute", "disrespect", "disrespectful", "disrespectfully", "disrupt", "disruption", "disruptive", "dissatisfaction", "dissatisfied", "dissect", "dissection", "disseminate", "dissemination", "dissension", "dissent",
    "dissenter", "dissenting", "dissertation", "disservice", "dissidence", "dissident", "dissimilar", "dissimilarity", "dissipate", "dissociate", "dissociation", "dissolute", "dissolution", "dissolve", "dissuade", "distance", "distant", "distaste", "distasteful", "distastefully", "distend", "distention", "distill", "distillation", "distillery", "distinct", "distinction", "distinctive", "distinctively", "distinctly", "distinguish", "distinguishable", "distinguished", "distort", "distorted", "distortion", "distract", "distracted", "distraction", "distraught", "distress", "distressing", "distribute", "distribution", "distributor", "district", "distrust", "distrustful", "distrustfully", "disturb", "disturbance", "disturbed", "disturbing", "disuse", "ditch", "dither", "ditto", "ditty", "dive", "diver", "diverge", "divergence", "divergent", "diverse", "diversification", "diversify", "diversion", "diversity", "divert", "divest", "divide", "dividend", "divider", "divine", "divinely", "diving", "divinity", "divisible", "division", "divisive", "divorce", "divorced", "divorcee", "divulge", "dixie", "dizziness", "dizzy", "do", "docile", "dock", "docket", "doctor", "doctorate", "doctrine", "document", "documentary", "documentation", "dodge", "doe", "does", "dog", "dogged", "doggedly", "doggone", "doghouse", "dogma", "dogmatic", "dogwood", "doldrums", "dole", "doleful", "doll", "dollar", "dollhouse", "dollop", "dolly", "dolphin", "domain", "dome", "domestic", "domesticate", "domesticated", "domesticity", "domicile", "dominance", "dominant", "dominate", "domination", "domineering", "dominion", "domino", "dominoes", "donate", "donation", "done", "donkey", "donor", "doodad", "doodle", "doohickey", "doom", "doomed", "doomsday", "door", "doorbell", "doorknob", "doorman", "doormat", "doorstep", "doorway", "dope", "dopey", "dork", "dorky", "dorm", "dormant", "dormitory", "dorsal", "dosage", "dose", "dossier", "dot", "dote", "doting", "double", "doubles", "doubly", "doubt", "doubtful", "doubtfully", "doubtless", "dough", "doughnut", "dour", "douse", "dove", "dowdy", "down", "downcast", "downer", "downfall", "downgrade", "downhearted", "downhill", "download", "downplay", "downpour", "downright", "downsize", "downsizing", "downstairs", "downstate", "downstream", "downtime", "downtown", "downtrodden", "downturn", "downward", "downwards", "downwind", "downy", "dowry", "doze", "dozen", "dozens", "drab", "draconian", "draft", "draftsman", "drafty", "drag", "dragon", "drain", "drainage", "drake", "drama", "dramatic", "dramatically", "dramatics", "dramatist", "dramatization", "dramatize", "drank", "drape", "drapery", "drapes", "drastic", "drastically", "draw", "drawback", "drawbridge", "drawer", "drawing", "drawl", "drawn", "dread", "dreaded", "dreadful", "dreadfully", "dreadlocks", "dream", "dreamer", "dreamt", "dreamy", "dreary", "dredge", "dregs", "drench", "dress", "dresser", "dressing", "dressmaker", "dressy", "drew", "dribble", "dried", "drier", "drift", "drifter", "driftwood", "drill", "drink", "drinker", "drinking", "drip", "drive", "drivel", "driven", "driver", "driveway", "driving", "drizzle", "droll", "drone", "drool", "droop", "drooping", "drop", "dropout", "droppings", "drops", "drought", "drove", "drown", "drowning", "drowsily", "drowsiness", "drowsy", "drudge", "drudgery", "drug", "drugstore", "drum", "drummer", "drunk", "drunkard", "drunken", "drunkenly", "drunkenness", "dry", "dryer", "dryly", "dryness", "dual", "dub", "dubious", "duchess", "duck", "duckling", "duct", "dud", "dude", "duds", "due", "duel", "dues", "duet", "dug", "dugout", "duke", "dull", "dullness", "duly", "dumb", "dumbbell", "dumbfounded", "dummy", "dump", "dumpling", "dumpster", "dumpy", "dunce", "dune", "dung", "dungeon", "dunk", "duo", "dupe", "duplex", "duplicate", "duplication", "duplicity", "durability", "durable", "duration", "duress", "during", "dusk", "dust", "dustpan", "dusty", "dutch", "dutiful", "dutifully", "duty", "dwarf", "dwarves", "dwell", "dweller", "dwelling", "dwelt", "dwindle", "dwindling", "dye", "dying", "dyke", "dynamic", "dynamics", "dynamism", "dynamite", "dynamo", "dynasty", "dysentery", "dysfunction", "dysfunctional", "dyslexia", "dyslexic",
    "eager", "eagerly", "eagerness", "eagle", "ear", "earache", "eardrum", "earlobe", "early", "earmark", "earmuffs", "earn", "earnest", "earnestly", "earnestness", "earnings", "earphones", "earplug", "earring", "earshot", "earsplitting", "earth", "earthiness", "earthly", "earthquake", "earthshaking", "earthworm", "earthy", "earwax", "ease", "easel", "easily", "east", "eastbound", "easter", "easterly", "eastern", "easterner", "eastward", "eastwards", "easy", "easygoing", "eat", "eaten", "eater", "eatery", "eaves", "eavesdrop", "eavesdropper", "ebb", "ebony", "ebullience", "ebullient", "eccentric", "eccentricity", "ecclesiastical", "echo", "eclair", "eclipse", "ecological", "ecologically", "ecologist", "ecology", "economic", "economical", "economically", "economics", "economist", "economize", "economy", "ecosystem", "ecstasy", "ecstatic", "ecumenical", "eczema", "eddy", "edge", "edgewise", "edgy", "edible", "edict", "edification", "edifice", "edify", "edit", "edition", "editor", "editorial", "educate", "educated", "education", "educational", "educationally", "educator", "eel", "eerie", "eerily", "effect", "effective", "effectively", "effectiveness", "effects", "effeminate", "effervescence", "effervescent", "efficiency", "efficient", "efficiently", "effigy", "effort", "effortless", "effortlessly", "effusive", "effusively", "egalitarian", "egalitarianism", "egg", "egghead", "eggplant", "eggshell", "ego", "egocentric", "egotism", "egotist", "egotistical", "egregious", "egregiously", "eh", "eight", "eighteen", "eighteenth", "eighth", "eightieth", "eighty", "either", "ejaculate", "ejaculation", "eject", "ejection", "eke", "elaborate", "elaborately", "elaboration", "elapse", "elastic", "elasticity", "elated", "elation", "elbow", "elbowroom", "elder", "elderly", "elders", "eldest", "elect", "election", "elective", "electoral", "electorate", "electric", "electrical", "electrician", "electricity", "electrify", "electrifying", "electrocute", "electrocution", "electrode", "electrolysis", "electron", "electronic", "electronically", "electronics", "elegance", "elegant", "elegantly", "elegy", "element", "elemental", "elementary", "elements", "elephant", "elevate", "elevation", "elevator", "eleven", "eleventh", "elf", "elfin", "elicit", "eligibility", "eligible", "eliminate", "elimination", "elite", "elitism", "elitist", "elk", "elliptical", "elm", "elongate", "elongated", "elope", "elopement", "eloquence", "eloquent", "eloquently", "else", "elsewhere", "elucidate", "elude", "elusive", "elves", "emaciated", "emanate", "emancipate", "emancipated", "emancipation", "embalm", "embankment", "embargo", "embark", "embarrass", "embarrassed", "embarrassing", "embarrassingly", "embarrassment", "embassy", "embattled", "embed", "embellish", "embellishment", "ember", "embezzle", "embezzlement", "embezzler", "embitter", "embittered", "emblazon", "emblem", "embodiment", "embody", "emboss", "embossed", "embrace", "embroider", "embroidery", "embroil", "embryo", "embryonic", "emcee", "emerald", "emerge", "emergence", "emergency", "emergent", "emeritus", "emigrant", "emigrate", "emigration", "eminent", "eminently", "emir", "emirate", "emissary", "emission", "emit", "emmy", "emotion", "emotional", "emotionally", "emotive", "empathize", "empathy", "emperor", "emphases", "emphasis", "emphasize", "emphatic", "emphatically", "emphysema", "empire", "empirical", "employ", "employee", "employer", "employment", "emporium", "empower", "empowerment", "empress", "emptiness", "empty", "emulate", "enable", "enact", "enamel", "enamored", "encase", "enchanted", "enchanting", "enchilada", "encircle", "enclave", "enclose", "enclosure", "encompass", "encore", "encounter", "encourage", "encouragement", "encouraging", "encroach", "encumber", "encumbrance", "encyclopedia", "end", "endanger", "endangered", "endear", "endearing", "endearment", "endeavor", "endemic", "ending", "endive", "endless", "endlessly", "endorse", "endorsement", "endow", "endowment", "endurance", "endure", "enduring", "enemy", "energetic", "energetically", "energies", "energize", "energy", "enforce", "enforceable", "enforcement", "enfranchise", "engage", "engaged", "engagement", "engaging", "engender", "engine", "engineer", "engineering", "english", "engrave", "engraving", "engrossed", "engrossing", "engulf", "enhance", "enhancement", "enigma", "enigmatic", "enjoy", "enjoyable", "enjoyment", "enlarge", "enlargement", "enlighten", "enlightened", "enlightening", "enlist", "enlistment", "enliven", "enmity", "enormity", "enormous", "enormously", "enough", "enrage", "enraged", "enrich", "enrichment", "enroll", "enrollment", "ensconce", "ensemble", "enshrine", "ensign", "ensue", "ensuing", "ensure", "entail", "entangle", "entangled", "entanglement", "enter", "enterprise", "enterprising", "entertain", "entertainer", "entertaining", "entertainment", "enthrall", "enthralling", "enthuse", "enthusiasm", "enthusiast", "enthusiastic", "enthusiastically", "entice", "enticement", "enticing", "entire", "entirely", "entirety", "entitle", "entitled", "entitlement", "entity", "entomologist", "entomology", "entourage", "entrails", "entrance", "entrant", "entrap", "entrapment", "entreat", "entreaty", "entree", "entrepreneur", "entrepreneurial", "entrust", "entry", "entryway", "entwine", "enumerate", "enunciate", "enunciation", "envelop", "envelope", "enviable", "envious", "enviously", "environment", "environmental", "environmentalist", "environmentally", "environs", "envisage", "envision", "envoy", "envy", "enzyme", "epaulet", "ephemeral", "epic", "epicenter", "epidemic", "epigram", "epilepsy", "epileptic", "epilogue", "episcopalian", "episode", "episodic", "epistle", "epitaph", "epithet", "epitome", "epitomize", "epoch", "equal", "equality", "equalize", "equally", "equanimity", "equate", "equation", "equator", "equatorial", "equestrian", "equilateral", "equilibrium", "equine", "equinox", "equip", "equipment", "equipped", "equitable", "equity", "equivalence", "equivalent", "equivocal", "era", "eradicate", "eradication", "erase", "eraser", "erect", "erection", "erode", "erosion", "erotic", "erotically", "eroticism", "err", "errand", "errant", "erratic", "erratically", "erroneous", "erroneously", "error", "erudite", "erudition", "erupt", "eruption", "escalate", "escalation", "escalator", "escapade", "escape", "escaped", "escapism", "escapist", "eschew", "escort", "eskimo", "esophagus", "esoteric", "especially", "espionage", "espouse", "espresso", "essay", "essence", "essential", "essentially", "establish", "establishment", "estate", "esteem", "esthetic", "esthetically", "estimable", "estimate", "estimated", "estimation", "estranged", "estrangement", "estrogen", "estuary", "etch", "eternal", "eternally", "eternity", "ether", "ethereal", "ethic", "ethical", "ethically", "ethics", "ethnic", "etiquette", "etymology", "eulogize", "eulogy", "eunuch", "euphemism", "euphemistic", "euphemistically", "euphoria", "euphoric", "europe", "european", "euthanasia", "evacuate", "evacuation", "evacuee", "evade", "evaluate", "evaluation", "evangelical", "evangelism", "evangelist", "evaporate", "evaporation", "evasion", "evasive", "eve", "even", "evenhanded", "evening", "evenings", "evenly", "evenness", "event", "eventful", "eventual", "eventuality", "eventually", "ever", "evergreen", "everlasting", "evermore", "every", "everybody", "everyday", "everyone", "everyplace", "everything", "everywhere", "evict", "eviction", "evidence", "evident", "evidently", "evil", "evocative", "evoke", "evolution", "evolutionary", "evolve", "ewe", "ex", "exacerbate", "exact", "exacting", "exactly", "exaggerate", "exaggerated", "exaggeration", "exalt", "exaltation", "exam", "examination", "examine", "examiner", "example", "exasperate", "exasperated", "exasperating", "exasperation", "excavate", "excavation", "exceed", "exceedingly", "excel", "excellence", "excellent", "excellently", "except", "exception", "exceptional", "exceptionally", "excerpt", "excess", "excesses", "excessive", "excessively", "exchange", "excise", "excision", "excitable", "excite", "excited", "excitedly", "excitement", "exciting", "exclaim", "exclamation", "exclude", "excluding", "exclusion", "exclusive", "exclusively", "excommunicate", "excommunication", "excrement", "excrete", "excruciating", "excruciatingly", "excursion", "excusable", "excuse", "exec", "execute", "execution", "executioner", "executive", "executor", "exemplary", "exemplify", "exempt", "exemption", "exercise", "exert", "exertion", "exhale", "exhaust", "exhausted", "exhausting", "exhaustion", "exhaustive", "exhaustively", "exhibit", "exhibition", "exhibitionism", "exhibitionist", "exhibitor", "exhilarate", "exhilarating", "exhilaration", "exhort", "exhortation", "exhumation", "exhume", "exile", "exist", "existence", "existing", "exit", "exodus", "exonerate", "exoneration", "exorbitant", "exorcism", "exorcist", "exotic", "expand", "expanded", "expanse", "expansion", "expansionist", "expansive", "expatriate", "expect", "expectancy", "expectant", "expectantly", "expectation", "expediency", "expedient", "expedite", "expedition", "expel", "expend", "expendable", "expenditure", "expense", "expenses", "expensive", "expensively", "experience", "experienced", "experiment", "experimental", "experimentally", "experimentation", "expert", "expertise", "expertly", "expiration", "expire", "explain", "explanation", "explanatory", "expletive", "explicable", "explicit", "explicitly", "explode", "exploit", "exploitation", "exploration", "exploratory", "explore", "explorer", "explosion", "explosive", "expo", "exponent", "export", "exportation", "exporter", "expose", "exposed", "exposition", "exposure", "express", "expression", "expressive", "expressively", "expressly", "expressway", "expropriate", "expropriation", "expulsion", "exquisite", "exquisitely", "extemporaneous", "extend", "extension", "extensive", "extensively", "extent", "exterior", "exterminate", "extermination", "exterminator", "external", "extinct", "extinction",
    "extinguish", "extinguisher", "extol", "extort", "extortion", "extortionate", "extra", "extract", "extraction", "extracurricular", "extradite", "extradition", "extraneous", "extraordinarily", "extraordinary", "extrapolate", "extraterrestrial", "extravagance", "extravagant", "extravagantly", "extreme", "extremely", "extremism", "extremist", "extremities", "extremity", "extricate", "extrovert", "extroverted", "exuberance", "exuberant", "exude", "exult", "exultant", "exultation", "eye", "eyeball", "eyebrow", "eyeglasses", "eyelash", "eyelid", "eyeliner", "eyesight", "eyesore", "eyewitness",
    "fabric", "fabricate", "fabrication", "fabulous", "facade", "face", "faceless", "facet", "facetious", "facetiously", "facial", "facile", "facilitate", "facilities", "facility", "facsimile", "fact", "faction", "factor", "factory", "factual", "faculty", "fad", "fade", "fag", "faggot", "fahrenheit", "fail", "failing", "failure", "faint", "fair", "fairground", "fairly", "fairy", "faith", "faithful", "faithfully", "faithfulness", "faithless", "fake", "falcon", "fall", "fallacious", "fallacy", "fallen", "fallible", "fallout", "false", "falsehood", "falsetto", "falsification", "falsify", "falsity", "falter", "faltering", "fame", "famed", "familiar", "familiarity", "familiarize", "familiarly", "family", "famine", "famished", "famous", "famously", "fan", "fanatic", "fanatical", "fanatically", "fanaticism", "fanciful", "fancy", "fanfare", "fang", "fanny", "fantasize", "fantastic", "fantastically", "fantasy", "far", "faraway", "farce", "farcical", "fare", "farewell", "farm", "farmer", "farmhouse", "farming", "farmyard", "farsighted", "fart", "farther", "farthest", "fascinate", "fascinating", "fascination", "fascism", "fascist", "fashion", "fashionable", "fashionably", "fast", "fasten", "fastener", "fastening", "fastidious", "fat", "fatal", "fatalism", "fatalistic", "fatality", "fatally", "fate", "fated", "fateful", "father", "fatherhood", "fatherly", "fathom", "fatigue", "fatten", "fattening", "fatty", "fatuous", "faucet", "fault", "faultless", "faulty", "fauna", "favor", "favorable", "favorably", "favorite", "favoritism", "fawn", "fax", "faze", "fear", "fearful", "fearfully", "fearless", "fearlessly", "fearlessness", "feasibility", "feasible", "feast", "feat", "feather", "feathery", "feature", "february", "fecal", "feces", "fed", "federal", "federalism", "federalist", "federate", "federation", "fee", "feeble", "feed", "feedback", "feedbag", "feeding", "feel", "feeler", "feeling", "feelings", "feet", "feign", "feint", "feisty", "feline", "fell", "fellow", "fellowship", "felon", "felony", "felt", "female", "feminine", "femininity", "feminism", "feminist", "fence", "fencing", "fend", "fender", "ferment", "fermentation", "fermented", "fern", "ferocious", "ferociously", "ferocity", "ferret", "ferry", "fertile", "fertility", "fertilization", "fertilize", "fertilizer", "fervent", "fervently", "fervor", "fest", "fester", "festival", "festive", "festivities", "festivity", "fetal", "fetch", "fetching", "fete", "fetid", "fetish", "fetter", "fetters", "fetus", "feud", "feudal", "feudalism", "fever", "feverish", "feverishly", "few", "fez", "fiance", "fiancee", "fiasco", "fiat", "fib", "fibber", "fiber", "fiberglass", "fibrous", "fickle", "fiction", "fictional", "fictitious", "fiddle", "fiddler", "fidelity", "fidget", "fidgety", "field", "fieldwork", "fiend", "fiendish", "fierce", "fiercely", "fiery", "fiesta", "fifteen", "fifteenth", "fifth", "fiftieth", "fifty", "fig", "fight", "fighter", "fighting", "figment", "figurative", "figuratively", "figure", "figurehead", "filament", "filch", "file", "filibuster", "filigree", "fill", "fillet", "filling", "filly", "film", "filmmaker", "filmy", "filter", "filth", "filthy", "fin", "finagle", "final", "finale", "finalist", "finality", "finalize", "finally", "finals", "finance", "finances", "financial", "financially", "financier", "financing", "finch", "find", "finder", "finding", "fine", "finely", "finesse", "finger", "fingernail", "fingerprint", "fingertip", "finicky", "finish", "finished", "finite", "fir", "fire", "firearm", "firebrand", "firecracker", "firefighter", "firefly", "fireman", "fireplace", "fireproof", "fireside", "firewall", "firewood", "fireworks", "firm", "firmly", "firmness", "first", "firsthand", "firstly", "fiscal", "fish", "fishbowl", "fisherman", "fishery", "fishing", "fishnet", "fishtail", "fishy", "fission", "fissure", "fist", "fit", "fitful", "fitness", "fitted", "fitting", "five", "fix", "fixation", "fixed", "fixture", "fizz", "fizzle", "fizzy", "fjord", "flab", "flabbergasted", "flabby", "flaccid", "flag", "flagging", "flagpole", "flagrant", "flagrantly", "flagship", "flagstone", "flail", "flair", "flak", "flake", "flaky", "flamboyance", "flamboyant", "flamboyantly", "flame", "flamenco", "flaming", "flamingo", "flammable", "flank", "flannel", "flap", "flapjack", "flare", "flared", "flash", "flashback", "flasher", "flashlight", "flashy", "flask", "flat", "flatly", "flatten", "flatter", "flatterer", "flattering", "flattery", "flatulence", "flaunt", "flavor", "flavored", "flavoring", "flaw", "flawed", "flawless", "flawlessly", "flea", "fleck", "fled", "fledgling", "flee", "fleece", "fleet", "fleeting", "flesh", "fleshy", "flew", "flex", "flexibility", "flexible", "flextime", "flick", "flicker", "flier", "flight", "flighty", "flimsy", "flinch", "fling", "flint", "flip", "flippant", "flipper", "flirt", "flirtation", "flirtatious", "flit", "float", "flock", "flog", "flogging", "flood", "floodgate", "floodlight", "floodlit", "floor", "flooring", "floozy", "flop", "flophouse", "floppy", "flora", "floral", "florid", "florist", "floss", "flotilla", "flounce", "flounder", "flour", "flourish", "flout", "flow", "flower", "flowerbed", "flowered", "flowerpot", "flowery", "flown", "flu", "flub", "fluctuate", "fluctuation", "flue", "fluency", "fluent", "fluently", "fluff", "fluffy", "fluid", "fluidity", "fluids", "fluke", "flung", "flunk", "flunky", "fluorescent", "fluoride", "flurry", "flush", "flushed", "fluster", "flustered", "flute", "flutist", "flutter", "flux", "fly", "flying", "flyswatter", "foal", "foam", "foamy", "foci", "focus", "fodder", "foe", "fog", "fogbound", "foggy", "foghorn", "fogy", "foible", "foil", "foist", "fold", "folder", "foliage", "folk", "folklore", "folks", "folksy", "follicle", "follow", "follower", "following", "folly", "foment", "fond", "fondle", "fondly", "fondness", "font", "food", "foodstuff", "fool", "foolhardy", "foolish", "foolishly", "foolishness", "foolproof", "foot", "footage", "football", "footbridge", "foothill", "foothold", "footing", "footlights", "footlocker", "footloose", "footnote", "footpath", "footprint", "footsie", "footstep", "footwear", "footwork", "for", "forage", "foray", "forbade", "forbear", "forbearance", "forbid", "forbidden", "forbidding", "forbore", "forborne", "force", "forced", "forceful", "forcefully", "forceps", "forcible", "forcibly", "ford", "fore", "forearm", "foreboding", "forecast", "foreclose", "foreclosure", "forefinger", "forefront", "foreground", "forehand", "forehead", "foreign", "foreigner", "foreman", "foremost", "forensic", "foreplay", "forerunner", "foresaw", "foresee", "foreseeable", "foreseen", "foreshadow", "foresight", "foreskin", "forest", "forestall", "forestry", "foretaste", "foretell", "forethought", "foretold", "forever", "forewarn", "foreword", "forfeit", "forgave", "forge", "forger", "forgery", "forget", "forgetful", "forgetfulness", "forgivable", "forgive", "forgiven", "forgiveness", "forgiving", "forgo", "forgone", "forgot", "forgotten", "fork", "forked", "forklift", "forlorn", "form", "formal", "formaldehyde", "formality", "formalize", "formally", "format", "formation", "formative", "former", "formerly", "formidable", "formidably", "formless", "formula", "formulae", "formulate", "formulation", "fornicate", "fornication", "forsake", "forsaken", "forsook", "forswear", "forswore", "forsworn", "fort", "forte", "forth", "forthcoming", "forthright", "fortieth", "fortification", "fortify", "fortitude", "fortress", "fortuitous", "fortunate", "fortunately", "fortune", "forty", "forum", "forward", "forwards", "forwent", "fossil", "fossilize", "foster", "fought", "foul", "found", "foundation", "founder", "foundry", "fountain", "four", "fourteen", "fourteenth", "fourth", "fourthly", "fowl", "fox", "foxhole", "foxtrot", "foxy", "foyer", "fracas", "fraction", "fractional", "fractionally", "fractious", "fracture", "fragile", "fragility", "fragment", "fragrance", "fragrant", "frail", "frailty", "frame", "framework", "franc", "franchise", "frank", "frankfurter", "frankly", "frankness", "frantic", "frantically", "frat", "fraternal", "fraternity", "fraternize", "fraud", "fraudulent", "fraudulently", "fraught", "fray", "freak", "freckle", "freckled", "free", "freebie", "freedom", "freehand", "freelance", "freelancer", "freeload", "freeloader", "freely", "freethinker", "freethinking", "freeway", "freewheeling", "freeze", "freezer", "freezing", "freight", "freighter", "french", "frenetic", "frenzied", "frenzy", "frequency", "frequent", "frequently", "fresh", "freshen", "freshly", "freshman", "freshness", "freshwater", "fret", "fretful", "freudian", "friar", "friction", "friday", "fridge", "fried", "friend", "friendless", "friendliness", "friendly", "friendship", "fries", "frieze", "frigate", "fright", "frighten", "frightened", "frightening", "frighteningly", "frightful", "frigid", "frigidity", "frill", "frilly", "fringe", "frisbee", "frisk", "frisky", "fritter", "frivolity", "frivolous", "frivolously", "frizz", "frizzy", "fro", "frog", "frolic", "from", "frond", "front", "frontage", "frontal", "frontier", "frontiers", "frost", "frostbite", "frostbitten", "frosted", "frosting", "frosty", "froth", "frothy", "frown", "froze", "frozen", "frugal", "frugality", "frugally", "fruit", "fruitcake", "fruitful", "fruition", "fruitless", "fruitlessly", "fruits", "fruity", "frumpy", "frustrate", "frustrated", "frustrating", "frustration", "fry", "fuck", "fucker", "fucking", "fudge", "fuel", "fugitive", "fulcrum", "fulfill", "fulfilled", "fulfilling", "fulfillment", "full", "fully", "fumble", "fume", "fumes", "fumigate", "fumigation", "fun", "function", "functional", "functionally", "fund", "fundamental", "fundamentalism", "fundamentalist", "fundamentally", "fundamentals", "funding", "funds", "funeral", "fungal", "fungi", "fungus", "funk", "funky", "funnel", "funnies", "funnily", "funny", "fur", "furious", "furiously", "furl", "furlong", "furnace", "furnish", "furnished", "furnishings", "furniture", "furor", "furrow",
    "furry", "further", "furthermore", "furthest", "furtive", "furtively", "fury", "fuse", "fuselage", "fusion", "fuss", "fussy", "futile", "futilely", "future", "futuristic", "fuzz", "fuzzy",
    "gabby", "gable", "gadget", "gaffe", "gag", "gaggle", "gaiety", "gaily", "gain", "gait", "gal", "gala", "galactic", "galaxy", "gale", "gall", "gallant", "gallantly", "gallantry", "gallbladder", "gallery", "galley", "gallivant", "gallon", "gallop", "gallows", "galore", "galoshes", "galvanize", "gambit", "gamble", "gambler", "gambling", "game", "games", "gamut", "gander", "gang", "gangland", "gangling", "gangplank", "gangrene", "gangster", "gangway", "gap", "gape", "gaping", "garage", "garb", "garbage", "garbled", "garden", "gardener", "gardening", "gargantuan", "gargle", "gargoyle", "garish", "garland", "garlic", "garment", "garnet", "garnish", "garret", "garrison", "garrulous", "garter", "gas", "gaseous", "gash", "gasket", "gasoline", "gasp", "gassy", "gastric", "gastronomic", "gasworks", "gate", "gatecrasher", "gateway", "gather", "gathering", "gauche", "gaudy", "gauge", "gaunt", "gauntlet", "gauze", "gave", "gavel", "gawk", "gawky", "gay", "gaze", "gazebo", "gazelle", "gazette", "gear", "gearshift", "gee", "geek", "geeky", "geese", "geezer", "geisha", "gel", "gelatin", "gelding", "gem", "gemini", "gender", "gene", "genealogical", "genealogist", "genealogy", "genera", "general", "generalization", "generalize", "generalized", "generally", "generate", "generation", "generator", "generic", "generically", "generosity", "generous", "generously", "genesis", "genetic", "genetically", "geneticist", "genetics", "genial", "genital", "genitalia", "genitals", "genius", "genocide", "genre", "gent", "genteel", "gentile", "gentility", "gentle", "gentleman", "gentleness", "gently", "gentrification", "gentry", "genuflect", "genuine", "genuinely", "genus", "geographer", "geographical", "geographically", "geography", "geologic", "geologist", "geology", "geometric", "geometrically", "geometry", "geranium", "geriatric", "geriatrics", "germ", "german", "germinate", "germination", "gerrymander", "gerrymandering", "gerund", "gestation", "gesticulate", "gesture", "get", "getaway", "getup", "geyser", "ghastly", "ghetto", "ghost", "ghostly", "ghostwriter", "ghoul", "ghoulish", "giant", "gibberish", "gibe", "giblets", "giddy", "gift", "gifted", "gig", "gigabyte", "gigantic", "giggle", "gild", "gill", "gimmick", "gimmicky", "gin", "ginger", "gingerbread", "gingerly", "gingham", "giraffe", "girder", "girdle", "girl", "girlfriend", "girth", "gist", "give", "giveaway", "given", "gizmo", "gizzard", "glacial", "glacier", "glad", "glade", "gladiator", "gladly", "glamorize", "glamorous", "glamorously", "glamour", "glance", "gland", "glandular", "glare", "glaring", "glass", "glasses", "glassware", "glassy", "glaze", "glazed", "gleam", "gleaming", "glean", "glee", "gleeful", "gleefully", "glib", "glibly", "glide", "glider", "glimmer", "glimpse", "glint", "glisten", "glitch", "glitter", "glittering", "glitz", "glitzy", "gloat", "glob", "global", "globally", "globe", "globetrotter", "globular", "globule", "gloom", "gloomily", "gloominess", "gloomy", "glorification", "glorified", "glorify", "glorious", "gloriously", "glory", "gloss", "glossary", "glossy", "glove", "glow", "glower", "glowering", "glowing", "glowingly", "glowworm", "glucose", "glue", "glum", "glumly", "glut", "glutton", "gluttony", "glycerin", "gnarled", "gnarly", "gnash", "gnat", "gnaw", "gnawing", "gnome", "go", "goad", "goal", "goalie", "goalkeeper", "goalpost", "goat", "goatee", "gob", "gobble", "gobbledygook", "goblet", "goblin", "gobs", "god", "godchild", "godchildren", "goddamn", "goddamned", "goddess", "godfather", "godforsaken", "godless", "godlike", "godly", "godmother", "godparent", "godsend", "gofer", "goggles", "going", "gold", "golden", "goldfish", "golf", "golfer", "golly", "gondola", "gone", "goner", "gong", "gonna", "gonorrhea", "goo", "good", "goodies", "goodness", "goods", "goodwill", "goody", "gooey", "goof", "goofy", "goon", "goose", "gopher", "gore", "gorge", "gorgeous", "gorgeously", "gorilla", "gory", "gosh", "gosling", "gospel", "gossip", "got", "gotta", "gotten", "gouge", "goulash", "gourd", "gourmet", "gout", "govern", "government", "governmental", "governor", "governorship", "gown", "grab", "grace", "graceful", "gracefully", "gracefulness", "gracious", "graciously", "graciousness", "grad", "gradation", "grade", "grader", "gradient", "gradual", "gradually", "graduate", "graduation", "graffiti", "graft", "grain", "grainy", "gram", "grammar", "grammatical", "grammatically", "grammy", "grand", "grandchild", "grandchildren", "granddad", "granddaughter", "grandeur", "grandfather", "grandiose", "grandly", "grandma", "grandmother", "grandpa", "grandparent", "grandson", "grandstand", "granite", "granny", "granola", "grant", "granted", "granular", "granulated", "granule", "grape", "grapefruit", "grapevine", "graph", "graphic", "graphically", "graphics", "graphite", "grapple", "grasp", "grasping", "grass", "grasshopper", "grassland", "grassy", "grate", "grateful", "gratefully", "grater", "gratification", "gratify", "gratifying", "grating", "gratis", "gratitude", "gratuitous", "gratuity", "grave", "gravel", "gravely", "gravestone", "graveyard", "gravitate", "gravitation", "gravity", "gravy", "gray", "grayish", "graze", "grease", "greasy", "great", "greatly", "greatness", "greed", "greedily", "greedy", "greek", "green", "greenback", "greenery", "greenhorn", "greenhouse", "greenish", "greens", "greet", "greeting", "greetings", "gregarious", "gremlin", "grenade", "grew", "greyhound", "grid", "griddle", "gridiron", "gridlock", "grief", "grievance", "grieve", "grievous", "grill", "grim", "grimace", "grime", "grimly", "grimy", "grin", "grind", "grinder", "grindstone", "gringo", "grip", "gripe", "gripping", "grisly", "gristle", "grit", "grits", "gritty", "groan", "grocer", "groceries", "grocery", "groggy", "groin", "groom", "grooming", "groove", "groovy", "grope", "gross", "grossly", "grotesque", "grotto", "grouch", "grouchy", "ground", "groundhog", "grounding", "groundless", "groundlessly", "grounds", "groundswell", "groundwork", "group", "groupie", "grouping", "grouse", "grove", "grovel", "grow", "grower", "growl", "grown", "growth", "grub", "grubby", "grudge", "grudging", "gruel", "grueling", "gruesome", "gruff", "gruffly", "grumble", "grumpy", "grunge", "grungy", "grunt", "guacamole", "guarantee", "guarantor", "guaranty", "guard", "guarded", "guardedly", "guardian", "guardrail", "gubernatorial", "guerrilla", "guess", "guesstimate", "guesswork", "guest", "guff", "guffaw", "guidance", "guide", "guidebook", "guided", "guideline", "guidelines", "guild", "guile", "guileless", "guillotine", "guilt", "guiltily", "guilty", "guise", "guitar", "guitarist", "gulch", "gulf", "gull", "gullet", "gullibility", "gullible", "gully", "gulp", "gum", "gumbo", "gumdrop", "gummy", "gumption", "gun", "gunboat", "gunfire", "gunk", "gunman", "gunner", "gunnysack", "gunpoint", "gunpowder", "gunrunner", "gunrunning", "gunshot", "gurgle", "gurgling", "guru", "gush", "gusher", "gushy", "gust", "gusto", "gusty", "gut", "guts", "gutsy", "gutter", "guttural", "guy", "guzzle", "guzzler", "gym", "gymnasium", "gymnast", "gymnastics", "gynecological", "gynecologist", "gynecology", "gyp", "gypsy", "gyrate", "gyration", "gyroscope",
    "haberdashery", "habit", "habitable", "habitat", "habitation", "habitual", "habitually", "hack", "hacker", "hackneyed", "hacksaw", "had", "haddock", "hag", "haggard", "haggle", "hail", "hailstone", "hair", "hairbrush", "haircut", "hairdo", "hairdresser", "hairline", "hairnet", "hairpiece", "hairsplitting", "hairstyle", "hairstylist", "hairy", "hale", "half", "halfhearted", "halfheartedly", "halftime", "halfway", "halibut", "hall", "hallelujah", "hallmark", "hallowed", "halloween", "hallucinate", "hallucination", "hallucinogenic", "hallway", "halo", "halt", "halter", "halting", "halve", "halves", "ham", "hamburger", "hamlet", "hammer", "hammering", "hammock", "hamper", "hamster", "hamstring", "hand", "handbag", "handbook", "handcuff", "handcuffs", "handful", "handgun", "handicap", "handicapped", "handiwork", "handkerchief", "handle", "handlebar", "handler", "handmade", "handout", "handpicked", "handshake", "handsome", "handsomely", "handstand", "handwriting", "handwritten", "handy", "handyman", "hang", "hangar", "hanger", "hanging", "hangout", "hangover", "hanker", "hankering", "hankie", "hanukkah", "haphazard", "haphazardly", "hapless", "happen", "happening", "happily", "happiness", "happy", "harangue", "harass", "harassment", "harbor", "hard", "hardball", "hardcover", "harden", "hardheaded", "hardhearted", "hardly", "hardship", "hardware", "hardwood", "hardy", "hare", "harebrained", "harelip", "harem", "hark", "harlot", "harm", "harmful", "harmless", "harmlessly", "harmonica", "harmonious", "harmoniously", "harmonization", "harmonize", "harmony", "harness", "harp", "harpist", "harpoon", "harpsichord", "harrowing", "harsh", "harshly", "harshness", "harvest", "has", "hash", "hashish", "hassle", "haste", "hasten", "hastily", "hasty", "hat", "hatch", "hatchback", "hatchet", "hate", "hated", "hateful", "hatred", "haughtily", "haughty", "haul", "haunches", "haunt", "haunted", "haunting", "have", "haven", "havoc", "hawk", "hay", "haystack", "haywire", "hazard", "hazardous", "haze", "hazel", "hazelnut", "hazing", "hazy", "he", "head", "headache", "headband", "headfirst", "headgear", "headhunter", "heading", "headland", "headlight", "headline", "headlines", "headlong", "headmaster", "headmistress", "headphones", "headquarters", "headrest", "headroom", "heads", "headstone", "headstrong", "headway", "headwind", "heady", "heal", "healer", "health", "healthful", "healthily", "healthy", "heap", "heaping", "hear", "heard", "hearing", "hearsay", "hearse", "heart", "heartache", "heartbeat", "heartbreak", "heartbreaking", "heartbroken", "heartburn", "hearten", "heartfelt", "hearth", "heartily", "heartland", "heartless", "hearts", "heartthrob", "heartwarming", "hearty", "heat", "heated", "heatedly", "heater", "heathen", "heave", "heaven", "heavenly", "heavens", "heavily", "heaviness", "heavy", "heavyweight", "heck", "heckle", "heckler", "heckling", "hectic", "hedge", "hedonism", "hedonist", "hedonistic", "heed", "heedless", "heel", "heels", "hefty", "heifer", "height", "heighten", "heights", "heinous", "heir", "heiress", "heirloom", "heist", "held", "helicopter", "heliport", "helium", "hell", "hello", "helm", "helmet", "help", "helper", "helpful", "helpfully", "helpfulness", "helping", "helpless", "helplessly", "helplessness", "hem", "hemisphere", "hemline", "hemlock", "hemoglobin", "hemophilia", "hemophiliac", "hemorrhage", "hemorrhoids", "hemp", "hen", "hence", "henceforth", "henchman", "hepatitis", "her", "herald", "herb", "herbal", "herbivore", "herd", "here", "hereabouts", "hereafter", "hereby", "hereditary", "heredity", "herein", "heresy", "heretic", "heretical", "herewith", "heritage", "hermetic", "hermit", "hernia", "hero", "heroic", "heroically", "heroin", "heroine", "heroism", "heron", "herpes", "herring", "hers", "herself", "hertz", "hesitancy", "hesitant", "hesitantly", "hesitate", "hesitation", "heterogeneous", "heterosexual", "hew", "hewn", "hexagon", "hexagonal", "hey", "heyday", "hi", "hiatus", "hibernate", "hibernation", "hiccup", "hiccups", "hick", "hickey", "hickory", "hid", "hidden", "hide", "hideaway", "hideous", "hideously", "hideout", "hiding", "hierarchical", "hierarchy", "hieroglyphic", "hieroglyphics", "high", "highbrow", "highlight", "highlighter", "highlights", "highly", "highness", "highway", "hijack", "hijacker", "hijacking", "hike", "hiker", "hilarious", "hilariously", "hilarity", "hill", "hillbilly", "hillside", "hilltop", "hilly", "hilt", "him", "himself", "hind", "hinder", "hindquarters", "hindrance", "hindsight", "hindu", "hinduism", "hinge", "hint", "hinterland", "hip", "hippie", "hippo", "hippopotami", "hippopotamus", "hire", "his", "hispanic", "hiss", "historian", "historic", "historical", "historically", "history", "histrionic", "histrionics", "hit", "hitch", "hitchhike", "hitchhiker", "hither", "hitherto", "hive", "hives", "hoard", "hoarder", "hoarse", "hoarsely", "hoax", "hobble", "hobby", "hobnob", "hobo", "hock", "hockey", "hodgepodge", "hoe", "hog", "hoist", "hokey", "hold", "holder", "holding", "holdover", "holdup", "hole", "holiday", "holidays", "holiness", "holistic", "holler", "hollow", "holly", "hollywood", "holocaust", "hologram", "holster", "holy", "homage", "home", "homecoming", "homeland", "homeless", "homelessness", "homely", "homemade", "homemaker", "homeopathic", "homeopathy", "homeowner", "homer", "homeroom", "homesick", "homesickness", "homestead", "hometown", "homeward", "homework", "homey", "homicidal", "homicide", "homogeneity", "homogeneous", "homogenize", "homogenized", "homonym", "homosexual", "homosexuality", "honcho", "hone", "honest", "honestly", "honesty", "honey", "honeycomb", "honeymoon", "honeysuckle", "honk", "honor", "honorable", "honorably", "honorary", "honors", "hood", "hooded", "hoof", "hook", "hooked", "hooker", "hookey", "hooligan", "hoop", "hoops", "hooray", "hoot", "hooves", "hop", "hope", "hopeful", "hopefully", "hopefulness", "hopeless", "hopelessly", "hopelessness", "hopscotch", "horde", "horizon", "horizontal", "horizontally", "hormone", "horn", "hornet", "horny", "horoscope", "horrendous", "horrendously", "horrible", "horribly", "horrid", "horrific", "horrify", "horrifying", "horror", "horse", "horseplay", "horsepower", "horseshoe", "horseshoes", "horticultural", "horticulture", "hose", "hospice", "hospitable", "hospital", "hospitality", "hospitalization", "hospitalize", "host", "hostage", "hostel", "hostess", "hostile", "hostilities", "hostility", "hot", "hotbed", "hotcake", "hotel", "hothead", "hotheaded", "hotly", "hotshot", "hound", "hour", "hourglass", "hourly", "hours", "house", "houseboat", "housebound", "housebroken", "household", "househusband", "housekeeper", "housekeeping", "housewares", "housewarming", "housewife", "housewives", "housework", "housing", "hovel", "hover", "how", "howdy", "however", "howl", "hub", "hubbub", "hubcap", "huddle", "huddled", "hue", "huff", "huffy", "hug", "huge", "hugely", "huh", "hulk", "hull", "hullabaloo", "hum", "human", "humane", "humanely", "humanism", "humanist", "humanitarian", "humanitarianism", "humanities", "humanity", "humanize", "humankind", "humanly", "humble", "humbling", "humbly", "humdrum", "humid", "humidify", "humidity", "humiliate", "humiliated", "humiliating", "humiliation", "humility", "humor", "humorist", "humorous", "humorously", "hump", "hunch", "hunchback", "hundred", "hundredth", "hung", "hunger", "hungrily", "hungry", "hunk", "hunker", "hunt", "hunter", "hunting", "hurdle", "hurdler", "hurdles", "hurl", "hurrah", "hurricane", "hurried", "hurriedly", "hurry", "hurt", "hurtful", "hurtle", "husband", "hush", "hushed", "husk", "huskiness", "husky", "hustle", "hustler", "hut", "hutch", "hybrid", "hydrant", "hydraulic", "hydraulics", "hydroelectric", "hydrogen", "hydroplane", "hyena", "hygiene", "hygienic", "hygienically", "hymn", "hymnal", "hype", "hyper", "hyperactive", "hyperactivity", "hyperbole", "hypersensitive", "hypertension", "hyperventilate", "hyphen", "hyphenate", "hyphenated", "hyphenation", "hypnosis", "hypnotic", "hypnotism", "hypnotist", "hypnotize", "hypochondria", "hypochondriac", "hypocrisy", "hypocrite", "hypocritical", "hypocritically", "hypodermic", "hypothermia", "hypotheses", "hypothesis", "hypothetical", "hypothetically", "hysterectomy", "hysteria", "hysterical", "hysterically", "hysterics",
    "iceberg", "icebox", "icebreaker", "iced", "icicle", "icing", "icky", "icon", "icy", "idea", "ideal", "idealism", "idealist", "idealistic", "idealize", "ideally", "identical", "identically", "identification", "identify", "identity", "ideological", "ideology", "idiocy", "idiom", "idiomatic", "idiosyncrasy", "idiosyncratic", "idiot", "idiotic", "idiotically", "idle", "idleness", "idly", "idol", "idolatrous", "idolatry", "idolize", "idyllic", "if", "iffy", "igloo", "ignite", "ignition", "ignorance", "ignorant", "ignore", "iguana", "ill", "illegal", "illegally", "illegible", "illegibly", "illegitimacy", "illegitimate", "illicit", "illiteracy", "illiterate", "illness", "illogical", "illogically", "illuminate", "illuminating", "illumination", "illusion", "illusory", "illustrate", "illustration", "illustrative", "illustrator", "illustrious", "image", "imagery", "imaginable", "imaginary", "imagination", "imaginative", "imaginatively", "imagine", "imbalance", "imbalanced", "imbecile", "imbibe", "imbue", "imitate", "imitation", "imitative", "imitator", "immaculate", "immaculately", "immaterial", "immature", "immaturity", "immediacy", "immediate", "immediately", "immense", "immensely", "immensity", "immerse", "immersion", "immigrant", "immigrate", "immigration", "imminent", "imminently", "immobile", "immobility", "immobilize", "immoral", "immorality", "immorally", "immortal", "immortality", "immortalize", "immovable", "immune", "immunity", "immunization", "immunize", "immutable", "imp", "impact", "impair", "impaired", "impairment", "impale", "impart", "impartial", "impartiality", "impartially", "impassable", "impasse", "impassioned", "impassive", "impatience", "impatient", "impatiently", "impeach", "impeachment", "impeccable", "impeccably", "impede", "impediment", "impel", "impending", "impenetrable", "imperative", "imperceptible", "imperfect", "imperfection", "imperfectly", "imperial", "imperialism", "imperialist", "imperil", "impersonal", "impersonate", "impersonation", "impersonator", "impertinence", "impertinent", "impervious", "impetuous", "impetuously", "impetus", "impinge", "impish", "implacable", "implant", "implausible", "implement", "implementation", "implicate", "implication", "implicit", "implicitly", "implode", "implore", "imply", "impolite", "impolitely", "import", "importance", "important", "importantly", "importation", "importer", "impose", "imposing", "imposition", "impossibility", "impossible", "impossibly", "impostor", "impotence", "impotent", "impound", "impoverished", "impractical", "imprecise", "impregnable", "impregnate", "impress", "impression", "impressionable", "impressionistic", "impressive", "imprint", "imprison", "imprisonment", "improbability", "improbable", "improbably", "impromptu", "improper", "improperly", "impropriety", "improve", "improvement", "improvisation", "improvise", "impudence", "impudent", "impulse", "impulsive", "impulsively", "impulsiveness", "impunity", "impure", "impurity", "in", "inability", "inaccessibility", "inaccessible", "inaccuracy", "inaccurate", "inaction", "inactive", "inactivity", "inadequacy", "inadequate", "inadequately", "inadmissible", "inadvertent", "inadvertently", "inadvisable", "inalienable", "inane", "inanimate", "inappropriate", "inarticulate", "inattention", "inattentive", "inaudible", "inaudibly", "inaugural", "inaugurate", "inauguration", "inauspicious", "inbred", "incalculable", "incandescence", "incandescent", "incantation", "incapable", "incapacitate", "incapacity", "incarcerate", "incarceration", "incarnate", "incarnation", "incendiary", "incense", "incentive", "inception", "incessant", "incessantly", "incest", "incestuous", "inch", "incidence", "incident", "incidental", "incidentally", "incinerate", "incineration", "incinerator", "incision", "incisive", "incisor", "incite", "incitement", "inclination", "incline", "inclined", "include", "including", "inclusion", "inclusive", "incognito", "incoherence", "incoherent", "incoherently", "income", "incoming", "incomparable", "incompatibility", "incompatible", "incompetence", "incompetent", "incompetently", "incomplete", "incompletely", "incomprehensible", "inconceivable", "inconclusive", "inconclusively", "incongruity", "incongruous", "inconsequential", "inconsiderate", "inconsistency", "inconsistent", "inconsistently", "inconsolable", "inconspicuous", "inconspicuously", "incontinence", "incontinent", "inconvenience", "inconvenient", "inconveniently", "incorporate", "incorporated", "incorporation", "incorrect", "incorrectly", "incorrigible", "increase", "increased", "increasing", "increasingly", "incredible", "incredibly", "incredulity", "incredulous", "increment", "incremental", "incriminate", "incriminating", "incrimination", "incubate", "incubation", "incubator", "incumbent", "incur", "incurable", "incurably", "indebted", "indebtedness", "indecency", "indecent", "indecently", "indecision", "indecisive", "indecisively", "indeed", "indefensible", "indefinable", "indefinably", "indefinite", "indefinitely", "indelible", "indelibly", "indelicate", "indemnify", "indemnity", "indent", "independence", "independent", "independently", "indescribable", "indescribably", "indestructible", "indeterminate", "index", "indian", "indicate", "indication", "indicative", "indicator", "indices", "indict", "indictment", "indifference", "indifferent", "indifferently", "indigenous", "indigent", "indigestible", "indigestion", "indignant", "indignantly", "indignation", "indignity", "indirect", "indirectly", "indirectness", "indiscreet", "indiscretion", "indiscriminate", "indiscriminately", "indispensable", "indisputable", "indistinct", "indistinctly", "indistinguishable", "individual", "individualism", "individualist", "individualistic", "individuality", "individually", "indivisible", "indoctrinate", "indoctrination", "indolence", "indolent", "indomitable", "indoor", "indoors", "induce", "inducement", "induct", "induction", "indulge", "indulgence", "indulgent", "industrial", "industrialist", "industrialization", "industrialize", "industrious", "industry", "inebriated", "inebriation", "ineffective", "ineffectiveness", "inefficiency", "inefficient", "inefficiently", "inelegant", "ineligibility", "ineligible", "inept", "ineptitude", "inequality", "inequity", "inert", "inertia", "inescapable", "inessential", "inevitability", "inevitable", "inevitably", "inexact", "inexcusable", "inexhaustible", "inexpensive", "inexpensively", "inexperience", "inexperienced", "inexplicable", "inexplicably", "infallibility", "infallible", "infamous", "infamy", "infancy", "infant", "infantile", "infantry", "infatuated", "infatuation", "infect", "infection", "infectious", "infer", "inference", "inferior", "inferiority", "inferno", "infertile", "infertility", "infest", "infestation", "infested", "infidel", "infidelity", "infield", "infielder", "infiltrate", "infiltration", "infiltrator", "infinite", "infinitely", "infinitesimal", "infinitive", "infinity", "infirm", "infirmary", "infirmity", "inflame", "inflamed", "inflammable", "inflammation", "inflammatory", "inflatable", "inflate", "inflated", "inflation", "inflationary", "inflection", "inflexibility", "inflexible", "inflexibly", "inflict", "infliction", "influence", "influential", "influenza", "influx", "info", "infomercial", "inform", "informal", "informality", "informally", "informant", "information", "informative", "informed", "informer", "infraction", "infrared", "infrastructure", "infrequent", "infrequently", "infringe", "infringement", "infuriate", "infuriating", "infuriatingly", "infuse", "infusion", "ingenious", "ingeniously", "ingenuity", "ingest", "ingrained", "ingratiate", "ingratiating", "ingratitude", "ingredient", "inhabit", "inhabitant", "inhalation", "inhale", "inhaler", "inherent", "inherit", "inheritance", "inhibit", "inhibited", "inhibition", "inhospitable", "inhuman", "inhumane", "inhumanity", "initial", "initially", "initials", "initiate", "initiation", "initiative", "inject", "injection", "injunction", "injure", "injured", "injurious", "injury", "injustice", "ink", "inkling", "inlaid", "inland", "inlet", "inmate", "inn", "innards", "innate", "inner", "innermost", "inning", "innkeeper", "innocence", "innocent", "innocently", "innocuous", "innovate", "innovation", "innovative", "innovator", "innuendo", "innumerable", "inoculate", "inoculation", "inoffensive", "inopportune", "inordinate", "inordinately", "inorganic", "inpatient", "input", "inquest", "inquire", "inquiring", "inquiry", "inquisition", "inquisitive", "inroads", "insane", "insanely", "insanity", "insatiable", "inscribe", "inscription", "inscrutable", "insect", "insecticide", "insecure", "insecurity", "insemination", "insensitive", "insensitively", "insensitivity", "inseparable", "insert", "insertion", "inside", "insider", "insides", "insidious", "insight", "insignia", "insignificance", "insignificant", "insignificantly", "insincere", "insincerely", "insincerity", "insinuate", "insinuation", "insipid", "insist", "insistence", "insistent", "insistently", "insolence", "insolent", "insoluble", "insolvency", "insolvent", "insomnia", "insomniac", "inspect", "inspection", "inspector", "inspiration", "inspirational", "inspire", "inspired", "inspiring", "instability", "install", "installation", "installment", "instance", "instant", "instantaneous", "instantaneously", "instantly", "instead", "instep", "instigate", "instigation", "instill", "instinct", "instinctive", "instinctively", "institute", "institution", "institutional", "instruct", "instruction", "instructions", "instructive", "instructively", "instructor", "instrument", "instrumental", "insubordinate", "insubordination", "insubstantial", "insufferable", "insufficiency", "insufficient", "insular", "insularity", "insulate", "insulation", "insulin", "insult", "insulting", "insurance", "insure", "insured", "insurgency", "insurgent", "insurmountable", "insurrection", "intact", "intake", "intangible", "integer", "integral", "integrate", "integration", "integrity",
    "intellect", "intellectual", "intellectually", "intelligence", "intelligent", "intelligently", "intelligible", "intend", "intended", "intense", "intensely", "intensifier", "intensify", "intensity", "intensive", "intensively", "intent", "intention", "intentional", "intentionally", "intently", "inter", "interact", "interaction", "interactive", "intercede", "intercept", "interception", "interchange", "interchangeable", "interchangeably", "intercom", "interconnect", "interconnected", "intercontinental", "intercourse", "interdependence", "interdependent", "interest", "interested", "interesting", "interestingly", "interface", "interfere", "interference", "interim", "interior", "interject", "interjection", "interlock", "interlocking", "interloper", "interlude", "intermarriage", "intermarry", "intermediary", "intermediate", "interminable", "intermission", "intermittent", "intermittently", "intern", "internal", "internally", "international", "internationally", "internet", "internist", "internment", "internship", "interpersonal", "interplanetary", "interplay", "interpose", "interpret", "interpretation", "interpreter", "interracial", "interrelated", "interrogate", "interrogation", "interrogator", "interrupt", "interruption", "intersect", "intersection", "intersperse", "interstate", "interval", "intervene", "intervening", "intervention", "interview", "interviewer", "interweave", "interwove", "interwoven", "intestate", "intestinal", "intestine", "intimacy", "intimate", "intimately", "intimidate", "intimidated", "intimidating", "intimidation", "into", "intolerable", "intolerably", "intolerance", "intolerant", "intonation", "intoxicated", "intoxication", "intractable", "intramural", "intransitive", "intransitively", "intravenous", "intrepid", "intricacies", "intricacy", "intricate", "intricately", "intrigue", "intriguing", "intrinsic", "intrinsically", "introduce", "introduction", "introductory", "introspective", "introvert", "introverted", "intrude", "intruder", "intrusion", "intrusive", "intuition", "intuitive", "intuitively", "inuit", "inundate", "inundation", "invade", "invader", "invalid", "invalidate", "invaluable", "invariable", "invariably", "invasion", "invasive", "invent", "invention", "inventive", "inventor", "inventory", "inverse", "inversion", "invert", "invest", "investigate", "investigation", "investigative", "investigator", "investment", "investor", "inveterate", "invigorate", "invigorating", "invincible", "invisibility", "invisible", "invisibly", "invitation", "invite", "inviting", "invoice", "invoke", "involuntarily", "involuntary", "involve", "involved", "involvement", "inward", "inwardly", "inwards", "iodine", "iota", "irascible", "irate", "iridescent", "iris", "irish", "irk", "iron", "ironic", "ironically", "ironing", "irony", "irrational", "irrationality", "irrationally", "irreconcilable", "irrefutable", "irregular", "irregularity", "irregularly", "irrelevance", "irrelevant", "irreparable", "irreparably", "irreplaceable", "irrepressible", "irreproachable", "irresistible", "irresistibly", "irrespective", "irresponsibility", "irresponsible", "irresponsibly", "irreverence", "irreverent", "irreverently", "irreversible", "irrigate", "irrigation", "irritability", "irritable", "irritably", "irritant", "irritate", "irritating", "irritation", "is", "islam", "islamic", "island", "islander", "isle", "isolate", "isolated", "isolation", "issue", "isthmus", "it", "italian", "italic", "italicize", "italics", "itch", "itchiness", "itchy", "item", "itemize", "itinerant", "itinerary", "its", "itself", "ivory", "ivy",
    "jabber", "jack", "jackal", "jackass", "jacket", "jackhammer", "jackknife", "jackknives", "jackpot", "jacuzzi", "jade", "jaded", "jagged", "jaguar", "jail", "jailer", "jalopy", "jam", "jamb", "jamboree", "jammed", "jangle", "janitor", "january", "japanese", "jar", "jargon", "jaundice", "jaundiced", "jaunt", "jauntily", "jaunty", "javelin", "jaw", "jaws", "jaywalker", "jazz", "jazzy", "jealous", "jealously", "jealousy", "jeans", "jeep", "jeer", "jeez", "jelly", "jellyfish", "jeopardize", "jeopardy", "jerk", "jerkily", "jerky", "jersey", "jest", "jester", "jesus", "jet", "jettison", "jetty", "jew", "jewel", "jeweled", "jeweler", "jewelry", "jewish", "jibe", "jiffy", "jig", "jigger", "jiggle", "jilt", "jingle", "jinx", "jinxed", "jitters", "jittery", "jive", "job", "jobless", "joblessness", "jock", "jockey", "jockstrap", "jocular", "jocularity", "jog", "jogger", "jogging", "john", "join", "joint", "jointly", "joke", "joker", "jolly", "jolt", "jostle", "jot", "journal", "journalism", "journalist", "journey", "jovial", "jowls", "joy", "joyful", "joyfully", "joyfulness", "joyous", "joyously", "joyride", "joyrider", "joyriding", "joystick", "jubilant", "jubilation", "judaism", "judge", "judgment", "judgmental", "judicial", "judiciary", "judicious", "judiciously", "jug", "juggle", "juggler", "jugular", "juice", "juicy", "jukebox", "july", "jumble", "jumbled", "jumbo", "jump", "jumper", "jumpsuit", "jumpy", "junction", "juncture", "june", "jungle", "junior", "junk", "junket", "junkie", "junkyard", "junta", "jupiter", "jurisdiction", "juror", "jury", "just", "justice", "justifiable", "justifiably", "justification", "justified", "justify", "justly", "jut", "juvenile", "juxtapose", "juxtaposition",
    "kaleidoscope", "kangaroo", "kaput", "karat", "karate", "karma", "kayak", "keel", "keen", "keenly", "keenness", "keep", "keeper", "keeping", "keepsake", "keg", "kennel", "kept", "kernel", "kerosene", "ketchup", "kettle", "key", "keyboard", "keyhole", "keynote", "khaki", "khakis", "kick", "kickback", "kickoff", "kid", "kiddie", "kiddo", "kidnap", "kidnapper", "kidnapping", "kidney", "kill", "killer", "killing", "kiln", "kilo", "kilobyte", "kilogram", "kilometer", "kilowatt", "kilt", "kimono", "kin", "kind", "kindergarten", "kindergartner", "kindhearted", "kindle", "kindling", "kindly", "kindness", "kindred", "kinfolk", "king", "kingdom", "kingfisher", "kingpin", "kink", "kinky", "kiosk", "kiss", "kit", "kitchen", "kite", "kitten", "kitty", "kiwi", "kleenex", "kleptomaniac", "klutz", "klutzy", "knack", "knapsack", "knead", "knee", "kneecap", "kneel", "knelt", "knew", "knickers", "knickknack", "knife", "knight", "knit", "knitting", "knives", "knob", "knobby", "knock", "knocker", "knockout", "knoll", "knot", "knotty", "know", "knowing", "knowingly", "knowledge", "knowledgeable", "knowledgeably", "known", "knuckle", "koala", "koran", "korean", "kosher", "kowtow", "kudos", "kw", "kwanzaa",
    "lab", "label", "labor", "laboratory", "laborer", "laborious", "laboriously", "labyrinth", "lace", "lacerate", "laceration", "lack", "lacking", "lackluster", "lacquer", "lacy", "lad", "ladder", "laden", "ladle", "lady", "ladybug", "lag", "lagoon", "laid", "lain", "lair", "lake", "lamb", "lame", "lament", "lamentable", "laminate", "lamp", "lampoon", "lampshade", "lance", "land", "landfill", "landing", "landlady", "landlocked", "landlord", "landmark", "landowner", "landscape", "landslide", "lane", "language", "languid", "languish", "languorous", "lanky", "lantern", "lap", "lapel", "lapse", "laptop", "larceny", "lard", "large", "largely", "lark", "larva", "larvae", "laryngitis", "larynx", "lascivious", "laser", "lash", "lasso", "last", "lasting", "lastly", "latch", "late", "lately", "latent", "later", "lateral", "latest", "latex", "lather", "latin", "latina", "latino", "latitude", "latrine", "latter", "laudable", "laugh", "laughable", "laughingstock", "laughter", "launch", "launder", "laundromat", "laundry", "laureate", "laurel", "lava", "lavatory", "lavender", "lavish", "law", "lawful", "lawless", "lawlessness", "lawmaker", "lawn", "lawsuit", "lawyer", "lax", "laxative", "laxity", "lay", "layaway", "layer", "layman", "layoff", "layout", "layover", "lazily", "laziness", "lazy", "lead", "leader", "leadership", "leading", "leaf", "leaflet", "leafy", "league", "leak", "leakage", "leaky", "lean", "leaning", "leap", "leapfrog", "leapt", "learn", "learned", "learning", "lease", "leash", "least", "leather", "leathery", "leave", "leaves", "lecherous", "lectern", "lecture", "lecturer", "led", "ledge", "ledger", "leech", "leek", "leer", "leery", "leeway", "left", "leftovers", "leg", "legacy", "legal", "legality", "legalize", "legally", "legend", "legendary", "leggings", "leggy", "legibility", "legible", "legibly", "legion", "legislate", "legislation", "legislative", "legislator", "legislature", "legit", "legitimacy", "legitimate", "legitimately", "leisure", "leisurely", "lemon", "lemonade", "lend", "lender", "length", "lengthen", "lengthwise", "lengthy", "leniency", "lenient", "leniently", "lens", "lent", "lentil", "leo", "leopard", "leotard", "leper", "leprosy", "leprous", "lesbian", "lesbianism", "less", "lessen", "lesser", "lesson", "let", "letdown", "lethal", "lethally", "lethargic", "lethargy", "letter", "letterhead", "lettuce", "letup", "leukemia", "levee", "level", "levelheaded", "lever", "leverage", "levitate", "levitation", "levity", "levy", "lewd", "lexical", "lexicon", "liability", "liable", "liaise", "liaison", "liar", "lib", "libel", "libelous", "liberal", "liberalism", "liberalize", "liberally", "liberate", "liberated", "liberation", "liberty", "libido", "libra", "librarian", "library", "lice", "license", "lichen", "lick", "licking", "licorice", "lid", "lie", "lien", "lieu", "lieutenant", "life", "lifeboat", "lifeguard", "lifeless", "lifelike", "lifeline", "lifelong", "lifesaver", "lifestyle", "lifetime", "lift", "liftoff", "ligament", "light", "lighten", "lighter", "lighthearted", "lighthouse", "lighting", "lightly", "lightness", "lightning", "lightweight", "likable", "like", "likelihood", "likely", "liken", "likeness", "likewise", "liking", "lilac", "lilt", "lily", "limb", "limbo", "lime", "limelight", "limerick", "limit", "limitation", "limitations", "limited", "limiting", "limo", "limousine", "limp", "linchpin", "line", "lineage", "linear", "lined", "linen", "linens", "liner", "lines", "lineup", "linger", "lingerie", "lingo", "linguist", "linguistic", "linguistics", "liniment", "lining", "link", "linkage", "linoleum", "lint", "lion", "lip", "lipstick", "liquefy", "liqueur", "liquid", "liquidate", "liquidation", "liquor", "lisp", "list", "listen", "listener", "listing", "listless", "listlessly", "lit", "litany", "lite", "liter", "literacy", "literal", "literally", "literary", "literate", "literature", "lithe", "litigate", "litigation", "litter", "litterbug", "little", "liturgical", "liturgy", "livable", "live", "livelihood", "lively", "liven", "liver", "lives", "livestock", "livid", "living", "lizard", "llama", "load", "loaded", "loads", "loaf", "loafer", "loan", "loath", "loathe", "loathing", "loathsome", "loaves", "lob", "lobby", "lobbyist", "lobe", "lobster", "local", "locale", "locality", "localized", "locally", "locate", "location", "lock", "locker", "locket", "locksmith", "locomotive", "locust", "lodge", "lodging", "loft", "lofty", "log", "logbook", "logging", "logic", "logical", "logically", "logistical", "logistics", "logjam", "logo", "loincloth", "loiter", "loll", "lollipop", "lone", "loneliness", "lonely", "loner", "lonesome", "long", "longevity", "longhand", "longing", "longingly", "longitude", "longitudinal", "longshoreman", "longtime", "look", "lookalike", "lookout", "looks", "loom", "loony", "loop", "loophole", "loose", "loosely", "loosen", "loot", "looter", "lop", "lope", "lopsided", "lord", "lore", "lose", "loser", "loss", "lost", "lot", "lotion", "lots", "lottery", "loud", "loudly", "loudmouth", "loudmouthed", "loudness", "loudspeaker", "lounge", "louse", "lousy", "lovable", "love", "loveliness", "lovely", "lover", "lovers", "lovesick", "loving", "lovingly", "low", "lowbrow", "lowdown", "lower", "lowercase", "lowly", "loyal", "loyally", "loyalty", "lozenge", "lubricant", "lubricate", "lubrication", "lucid", "lucidity", "lucidly", "luck", "luckily", "lucky", "lucrative", "ludicrous", "ludicrously", "lug", "luggage", "lugubrious", "lukewarm", "lull", "lullaby", "lumber", "lumbering", "lumberjack", "lumberyard", "luminary", "luminous", "lump", "lumpy", "lunacy", "lunar", "lunatic", "lunch", "lunchbox", "luncheon", "lunchtime", "lung", "lunge", "lurch", "lure", "lurid", "luridly", "lurk", "luscious", "lush", "lust", "luster", "lustrous", "lusty", "lutheran", "luxuriant", "luxuriate", "luxurious", "luxuriously", "luxury", "lying", "lynch", "lynching", "lyric", "lyrical", "lyricist", "lyrics",
    "ma", "macabre", "macaroni", "mace", "machete", "machine", "machinery", "machinist", "macho", "mackerel", "macro", "macrocosm", "mad", "madam", "madden", "maddening", "maddeningly", "made", "madhouse", "madly", "madman", "madness", "maelstrom", "mafia", "magazine", "magenta", "maggot", "magic", "magical", "magically", "magician", "magistrate", "magnanimity", "magnanimous", "magnate", "magnesium", "magnet", "magnetic", "magnetism", "magnetize", "magnification", "magnificence", "magnificent", "magnificently", "magnify", "magnitude", "magnolia", "magpie", "mahogany", "maid", "maiden", "mail", "mailbox", "mailing", "mailman", "maim", "main", "mainframe", "mainland", "mainly", "mainstay", "mainstream", "maintain", "maintenance", "majestic", "majestically", "majesty", "major", "majority", "majorly", "make", "maker", "makeshift", "makeup", "making", "malady", "malaise", "malaria", "male", "malevolence", "malevolent", "malfunction", "malice", "malicious", "maliciously", "malign", "malignancy", "malignant", "mall", "mallard", "mallet", "malnourished", "malnutrition", "malpractice", "malt", "mama", "mammal", "mammoth", "man", "manacle", "manage", "manageable", "management", "manager", "managerial", "mandarin", "mandate", "mandatory", "mane", "maneuver", "maneuvers", "mange", "manger", "mangle", "mango", "mangrove", "mangy", "manhandle", "manhole", "manhood", "manhunt", "mania", "maniac", "maniacal", "manic", "manicure", "manicurist", "manifest", "manifestation", "manifesto", "manifold", "manipulate", "manipulation", "manipulative", "mankind", "manliness", "manly", "manned", "mannequin", "manner", "mannerism", "manners", "mannish", "manor", "manpower", "mansion", "manslaughter", "mantel", "mantelpiece", "mantle", "mantra", "manual", "manually", "manufacture", "manufacturer", "manufacturing", "manure", "manuscript", "many", "maori", "map", "maple", "mar", "marathon", "marble", "marbles", "march", "mare", "margarine", "margin", "marginal", "marginally", "marijuana", "marina", "marinade", "marinate", "marine", "mariner", "marionette", "marital", "maritime", "mark", "markdown", "marked", "marker", "market", "marketability", "marketable", "marketer", "marketing", "marketplace", "marking", "marksman", "markup", "marmalade", "maroon", "marooned", "marquee", "marriage", "married", "marrow", "marry", "mars", "marsh", "marshal", "marshmallow", "marshy", "marsupial", "mart", "martial", "martian", "martyr", "martyrdom", "marvel", "marvelous", "marxism", "marxist", "mascara", "mascot", "masculine", "masculinity", "mash", "mask", "masochism", "masochist", "masochistic", "mason", "masonry", "masquerade", "mass", "massacre", "massage", "masses", "masseur", "masseuse", "massive", "mast", "master", "masterful", "mastermind", "masterpiece", "mastery", "masturbate", "masturbation", "mat", "match", "matchbook", "matchbox", "matchless", "matchmaker", "matchmaking", "matchstick", "mate", "material", "materialism", "materialist", "materialistic", "materialize", "maternal", "maternity", "math", "mathematical", "mathematically", "mathematician", "mathematics", "matinee", "matriarch", "matriarchal", "matriarchy", "matriculate", "matrimonial", "matrimony", "matron", "matronly", "matte", "matted", "matter", "matting", "mattress", "mature", "maturity", "maudlin", "maul", "mausoleum", "mauve", "maverick", "mawkish", "max", "maxim", "maximize", "maximum", "may", "maybe", "mayday", "mayhem", "mayo", "mayonnaise", "mayor", "maze", "mccoy", "me", "meadow", "meager", "meal", "mealtime", "mean", "meander", "meaning", "meaningful", "meaningfully", "meaningless", "means", "meant", "meantime", "meanwhile", "measles", "measly", "measurable", "measure", "measurement", "meat", "meatball", "meatloaf", "meaty", "mecca", "mechanic", "mechanical", "mechanically", "mechanics", "mechanism", "mechanization", "mechanize", "med", "medal", "medalist", "medallion", "meddle", "meddler", "meddlesome", "media", "median", "mediate", "mediation", "mediator", "medicaid", "medical", "medically", "medicare", "medicated", "medication", "medicinal", "medicine", "medieval", "mediocre", "mediocrity", "meditate", "meditation", "mediterranean", "medium", "medley", "meek", "meekly", "meekness", "meet", "meeting", "meetinghouse", "meg", "megabyte", "megalomania", "megalomaniac", "megaphone", "megaton", "melancholy", "meld", "melee", "mellow", "melodic", "melodious", "melodrama", "melodramatic", "melody", "melon", "melt", "meltdown", "member", "membership", "membrane", "memento", "memo", "memoirs", "memorabilia", "memorable", "memorably", "memoranda", "memorandum", "memorial", "memorize", "memory", "men", "menace", "menacing", "menagerie", "mend", "menial", "meningitis", "menopause", "menorah", "menstrual", "menstruate", "menstruation", "mental", "mentality", "mentally", "menthol", "mention", "mentor", "menu", "meow", "mercenary", "merchandise", "merchant", "merciful", "mercifully", "merciless", "mercilessly", "mercury", "mercy", "mere", "merely", "merge", "merger", "meridian", "meringue", "merit", "mermaid", "merrily", "merriment", "merry", "mesh", "mesmerize", "mess", "message", "messenger", "messiah", "messy", "met", "metabolic", "metabolism", "metal", "metallic", "metallurgist", "metallurgy", "metamorphoses", "metamorphosis", "metaphor", "metaphorical", "metaphorically", "metaphysical", "metaphysics", "mete", "meteor", "meteoric", "meteorite", "meteorological", "meteorologist", "meteorology", "meter", "methadone", "methane", "method", "methodical", "methodically", "methodist", "methodological", "methodology", "meticulous", "meticulously", "metric", "metro", "metropolis", "metropolitan", "mettle", "mexican", "mezzanine", "mice", "microbe", "microbiology", "microchip", "microcosm", "microfiche", "microfilm", "microorganism", "microphone", "microprocessor", "microscope", "microscopic", "microwave", "midair", "midday", "middle", "middleman", "midget", "midnight", "midriff", "midst", "midsummer", "midterm", "midway", "midweek", "midwest", "midwestern", "midwife", "midwinter", "midwives", "miffed", "might", "mighty", "migraine", "migrant", "migrate", "migration", "migratory", "mike", "mild", "mildew", "mildly", "mildness", "mile", "mileage", "miles", "milestone", "milieu", "militancy", "militant", "militarism", "military", "militate", "militia", "milk", "milkman", "milky", "mill", "millennia", "millennium", "milligram", "milliliter", "millimeter", "milliner", "millinery", "million", "millionaire", "millionth", "mime", "mimic", "mimicry", "mince", "mincemeat", "mind", "mindful", "mindless", "mine", "minefield", "miner", "mineral", "mingle", "mini", "miniature", "minimal", "minimally", "minimize", "minimum", "mining", "miniseries", "miniskirt", "minister", "ministerial", "ministry", "minivan", "mink", "minnow", "minor", "minority", "minstrel", "mint", "minty", "minus", "minuscule", "minute", "minutes", "miracle", "miraculous", "miraculously", "mirage", "mire", "mirror", "mirth", "misadventure", "misappropriate", "misappropriation", "misbehave", "misbehavior", "miscalculate", "miscalculation", "miscarriage", "miscarry", "miscellaneous", "mischief", "mischievous", "mischievously", "misconception", "misconduct", "misconstrue", "misdemeanor", "miser", "miserable", "miserably", "misery", "misfit", "misfortune", "misgiving", "misguided", "mishap", "misinform", "misinterpret", "misinterpretation", "misjudge", "misjudgment", "mislead", "misleading", "misled", "mismanage", "mismanagement", "mismatch", "misnomer", "misogynist", "misogyny", "misplace", "misplaced", "misprint", "mispronounce", "mispronunciation", "misquote", "misread", "misreading", "misrepresent", "misrepresentation", "miss", "missile", "missing", "mission", "missionary", "misspell", "misspelling", "misspent", "misstep", "mist", "mistake", "mistaken", "mistakenly", "mister", "mistletoe", "mistook", "mistreat", "mistreatment", "mistress", "mistrial", "mistrust", "misty", "misunderstand", "misunderstanding", "misunderstood", "misuse", "mite", "mitigate", "mitigating", "mitigation", "mitt", "mitten", "mix", "mixed", "mixer", "mixture", "moan", "moat", "mob", "mobile", "mobility", "mobilization", "mobilize", "moccasin", "mock", "mockery", "mockingbird", "modal", "mode", "model", "modeling", "modem", "moderate", "moderately", "moderation", "moderator", "modern", "modernity", "modernization", "modernize", "modest", "modestly", "modesty", "modicum", "modification", "modifier", "modify", "modular", "modulate", "modulation", "module", "mohair", "moist", "moisten", "moisture", "moisturizer", "molar", "molasses", "mold", "molding", "moldy", "mole", "molecular", "molecule", "molest", "molestation", "molester", "mollify", "mollusk", "molt", "molten", "mom", "moment", "momentarily", "momentary", "momentous", "momentum", "momma", "mommy", "monarch", "monarchy", "monastery", "monastic", "monday", "monetary", "money", "mongrel", "moniker", "monitor", "monk", "monkey", "mono", "monochrome", "monogamous", "monogamy", "monogram", "monogrammed", "monolingual", "monolith", "monolithic", "monologue", "mononucleosis", "monopolization", "monopolize", "monopoly", "monorail", "monosyllable", "monotone", "monotonous", "monotonously", "monotony", "monsoon", "monster", "monstrosity", "monstrous", "montage", "month", "monthly", "monument", "monumental", "moo", "mooch", "mood", "moodily", "moodiness", "moody", "moon", "moonbeam", "moonlight", "moonlighting", "moonlit", "moor", "mooring", "moose", "moot", "mop", "mope", "moped", "moral", "morale", "moralist", "moralistic", "morality", "morally", "morals", "morass", "moratorium", "morbid", "more", "moreover", "mores", "morgue", "mormon", "morning", "moron", "moronic", "morose", "morphine", "morsel", "mortal", "mortality", "mortally", "mortar", "mortarboard", "mortgage", "mortician", "mortification", "mortify", "mortifying", "mortuary", "mosaic", "mosque", "mosquito", "moss", "mossy", "most", "mostly", "motel", "moth", "mothball", "mother", "motherboard", "motherfucker", "motherhood", "motherly", "motif", "motion",
    "motionless", "motivate", "motivated", "motivation", "motive", "motley", "motor", "motorbike", "motorboat", "motorcade", "motorcycle", "motorcyclist", "motorist", "motorized", "motormouth", "mottled", "motto", "mound", "mount", "mountain", "mountaineer", "mountaineering", "mountainous", "mountainside", "mounted", "mounting", "mourn", "mourner", "mournful", "mournfully", "mourning", "mouse", "mousse", "mousy", "mouth", "mouthful", "mouthpiece", "mouthwash", "movable", "move", "movement", "movements", "mover", "movie", "movies", "moving", "mow", "mower", "mown", "much", "muck", "mucous", "mucus", "mud", "muddle", "muddled", "muddy", "mudslide", "mudslinging", "muff", "muffin", "muffle", "muffled", "muffler", "mug", "mugger", "mugging", "muggy", "muhammad", "mulatto", "mulch", "mule", "mull", "multicultural", "multilateral", "multimedia", "multimillionaire", "multiple", "multiplex", "multiplication", "multiplicity", "multiply", "multitude", "mumble", "mummify", "mummy", "mumps", "munch", "munchies", "mundane", "municipal", "municipality", "munitions", "mural", "murder", "murderer", "murderous", "murky", "murmur", "muscle", "muscular", "muse", "museum", "mush", "mushroom", "mushy", "music", "musical", "musician", "musing", "musk", "musket", "muslim", "muss", "mussel", "must", "mustache", "mustang", "mustard", "muster", "musty", "mutability", "mutable", "mutant", "mutate", "mutation", "mute", "muted", "mutely", "mutilate", "mutilation", "mutinous", "mutiny", "mutt", "mutter", "mutton", "mutual", "mutually", "muzak", "muzzle", "my", "myopic", "myriad", "myself", "mysterious", "mysteriously", "mystery", "mystic", "mystical", "mysticism", "mystify", "mystifying", "mystique", "myth", "mythical", "mythological", "mythology",
    "nag", "nagging", "nail", "nailbrush", "naive", "naively", "naivete", "naked", "name", "nameless", "namely", "namesake", "nanny", "nap", "napalm", "nape", "napkin", "nappy", "narc", "narcissism", "narcissist", "narcissistic", "narcotic", "narrate", "narration", "narrative", "narrator", "narrow", "narrowly", "narrowness", "nasal", "nasally", "nastily", "nastiness", "nasty", "nation", "national", "nationalism", "nationalist", "nationalistic", "nationality", "nationalization", "nationalize", "nationally", "nationwide", "native", "natural", "naturalist", "naturalization", "naturalize", "naturally", "naturalness", "nature", "naught", "naughtily", "naughtiness", "naughty", "nausea", "nauseate", "nauseated", "nauseating", "nauseous", "nautical", "naval", "navel", "navigable", "navigate", "navigation", "navigational", "navigator", "navy", "near", "nearby", "nearly", "nearsighted", "neat", "neatly", "neatness", "necessarily", "necessary", "necessitate", "necessity", "neck", "necklace", "neckline", "necktie", "nectar", "nectarine", "nee", "need", "needle", "needless", "needlessly", "needlework", "needs", "needy", "negate", "negation", "negative", "negatively", "neglect", "neglected", "neglectful", "negligee", "negligence", "negligent", "negligently", "negligible", "negotiable", "negotiate", "negotiation", "negotiator", "negro", "neigh", "neighbor", "neighborhood", "neighboring", "neighborly", "neither", "neon", "nephew", "nepotism", "neptune", "nerd", "nerdy", "nerve", "nerves", "nervous", "nervously", "nervousness", "nest", "nestle", "net", "netting", "nettle", "network", "neurological", "neurologist", "neurology", "neuroses", "neurosis", "neurotic", "neuter", "neutral", "neutrality", "neutralization", "neutralize", "neutron", "never", "nevertheless", "new", "newborn", "newcomer", "newfangled", "newly", "newlywed", "newlyweds", "newness", "news", "newscast", "newscaster", "newsletter", "newspaper", "newsprint", "newsstand", "newsworthy", "newsy", "newt", "next", "nibble", "nice", "nicely", "niche", "nick", "nickel", "nickname", "nicotine", "niece", "nifty", "nigger", "niggling", "night", "nightclub", "nightfall", "nightgown", "nightie", "nightingale", "nightlife", "nightly", "nightmare", "nightmarish", "nights", "nighttime", "nil", "nimble", "nimbly", "nincompoop", "nine", "nineteen", "nineteenth", "ninetieth", "ninety", "ninth", "nip", "nipple", "nippy", "nit", "nitrate", "nitrogen", "nitwit", "no", "nobility", "noble", "nobleman", "noblewoman", "nobly", "nobody", "nocturnal", "nod", "node", "noise", "noiseless", "noiselessly", "noisily", "noisy", "nomad", "nomadic", "nomenclature", "nominal", "nominally", "nominate", "nomination", "nominee", "nonchalance", "nonchalant", "nonchalantly", "noncommittal", "noncommittally", "nonconformist", "nondairy", "nondenominational", "nondescript", "none", "nonentity", "nonetheless", "nonevent", "nonexistent", "nonfat", "nonfiction", "nonflammable", "nonintervention", "nonplussed", "nonprofit", "nonproliferation", "nonrefundable", "nonrenewable", "nonsense", "nonsensical", "nonsmoker", "nonsmoking", "nonstandard", "nonstick", "nonstop", "nonverbal", "nonviolence", "nonviolent", "noodle", "nook", "noon", "noose", "nope", "nor", "norm", "normal", "normalcy", "normality", "normalization", "normalize", "normally", "north", "northbound", "northeast", "northeasterly", "northeastern", "northeastward", "northerly", "northern", "northerner", "northernmost", "northward", "northwest", "northwesterly", "northwestern", "northwestward", "nose", "nosebleed", "nosedive", "nostalgia", "nostalgic", "nostalgically", "nostril", "nosy", "not", "notable", "notably", "notation", "notch", "note", "notebook", "noted", "notes", "noteworthy", "nothing", "notice", "noticeable", "noticeably", "notification", "notify", "notion", "notoriety", "notorious", "notoriously", "notwithstanding", "noun", "nourish", "nourishing", "nourishment", "novel", "novelist", "novelty", "november", "novice", "now", "nowadays", "nowhere", "noxious", "nozzle", "nuance", "nuclear", "nuclei", "nucleus", "nude", "nudge", "nudist", "nudity", "nugget", "nuisance", "nuke", "nullify", "numb", "number", "numbness", "numeral", "numerical", "numerically", "numerous", "nun", "nuptial", "nuptials", "nurse", "nursery", "nursing", "nurture", "nut", "nutcracker", "nutmeg", "nutrient", "nutrition", "nutritional", "nutritious", "nuts", "nutshell", "nutty", "nuzzle", "nylon", "nylons", "nymph", "nymphomania", "nymphomaniac",
    "oaf", "oak", "oar", "oases", "oasis", "oat", "oath", "oatmeal", "oats", "obedience", "obedient", "obediently", "obese", "obesity", "obey", "obituary", "object", "objection", "objectionable", "objective", "objectively", "objectivity", "objector", "obligate", "obligated", "obligation", "obligatory", "oblige", "obliged", "obliging", "obligingly", "oblique", "obliterate", "obliteration", "oblivion", "oblivious", "oblong", "obnoxious", "obnoxiously", "oboe", "obscene", "obscenity", "obscure", "obscurity", "observable", "observance", "observant", "observation", "observatory", "observe", "observer", "obsess", "obsessed", "obsession", "obsessive", "obsessively", "obsolescence", "obsolete", "obstacle", "obstetrician", "obstetrics", "obstinacy", "obstinate", "obstinately", "obstruct", "obstruction", "obstructive", "obtain", "obtainable", "obtrusive", "obtuse", "obvious", "obviously", "occasion", "occasional", "occasionally", "occult", "occupancy", "occupant", "occupation", "occupational", "occupied", "occupy", "occur", "occurrence", "ocean", "oceanic", "oceanography", "octagon", "octagonal", "octave", "october", "octopi", "octopus", "odd", "oddity", "oddly", "oddness", "odds", "ode", "odious", "odometer", "odor", "odyssey", "of", "off", "offbeat", "offend", "offender", "offense", "offensive", "offensively", "offer", "offering", "offhand", "office", "officer", "official", "officially", "officiate", "officious", "offing", "offset", "offshoot", "offshore", "offspring", "offstage", "often", "ogle", "ogre", "oh", "ohm", "oil", "oiled", "oilfield", "oils", "oily", "oink", "ointment", "okay", "okra", "old", "olden", "oldie", "olive", "olympic", "olympics", "ombudsman", "omelet", "omen", "ominous", "ominously", "omission", "omit", "omnipotence", "omniscience", "omniscient", "on", "once", "oncoming", "one", "onerous", "oneself", "onetime", "ongoing", "onion", "onlooker", "only", "onrush", "onset", "onslaught", "onto", "onus", "onward", "onwards", "oodles", "oops", "ooze", "opal", "opaque", "open", "opener", "opening", "openly", "openness", "opera", "operable", "operate", "operatic", "operation", "operational", "operationally", "operative", "operator", "ophthalmologist", "ophthalmology", "opinion", "opinionated", "opium", "opossum", "opponent", "opportune", "opportunism", "opportunist", "opportunistic", "opportunity", "oppose", "opposed", "opposite", "opposition", "oppress", "oppressed", "oppression", "oppressive", "oppressor", "opt", "optic", "optical", "optician", "optimism", "optimist", "optimistic", "optimistically", "optimum", "option", "optional", "optometrist", "optometry", "opulence", "opulent", "or", "oral", "orally", "orange", "orangutan", "oration", "orator", "oratory", "orbit", "orbital", "orchard", "orchestra", "orchestral", "orchestrate", "orchestration", "orchid", "ordain", "ordeal", "order", "orderly", "ordinal", "ordinance", "ordinarily", "ordinary", "ordination", "ore", "organ", "organic", "organically", "organism", "organist", "organization", "organizational", "organize", "organized", "organizer", "orgasm", "orgy", "orient", "oriental", "orientation", "oriented", "origin", "original", "originality", "originally", "originate", "oriole", "ornament", "ornamental", "ornate", "ornately", "ornithologist", "ornithology", "orphan", "orphanage", "orthodontics", "orthodontist", "orthodox", "orthodoxy", "orthopedics", "oscar", "ostentation", "ostentatious", "ostentatiously", "ostracism", "ostracize", "ostrich", "other", "otherwise", "otter", "ouch", "ounce", "our", "ours", "ourselves", "oust", "ouster", "out", "outage", "outback", "outbid", "outbreak", "outburst", "outcast", "outclass", "outcome", "outcropping", "outcry", "outdated", "outdid", "outdistance", "outdo", "outdone", "outdoor", "outdoors", "outer", "outermost", "outfield", "outfielder", "outfit", "outgoing", "outgrew", "outgrow", "outgrown", "outgrowth", "outhouse", "outing", "outlandish", "outlast", "outlaw", "outlay", "outlet", "outline", "outlive", "outlook", "outlying", "outmaneuver", "outmoded", "outnumber", "outpatient", "outperform", "outplacement", "outpost", "outpouring", "output", "outrage", "outraged", "outrageous", "outrageously", "outran", "outreach", "outright", "outrun", "outset", "outshine", "outshone", "outside", "outsider", "outskirts", "outsmart", "outsourcing", "outspoken", "outspokenness", "outstanding", "outstandingly", "outstretched", "outstrip", "outward", "outwardly", "outwards", "outweigh", "outwit", "oval", "ovarian", "ovary", "ovation", "oven", "over", "overall", "overalls", "overate", "overbearing", "overboard", "overcame", "overcast", "overcharge", "overcoat", "overcome", "overcompensate", "overcompensation", "overcrowded", "overdid", "overdo", "overdone", "overdose", "overdraw", "overdrawn", "overdrew", "overdue", "overeat", "overeaten", "overestimate", "overextend", "overextended", "overflow", "overgrown", "overhand", "overhang", "overhaul", "overhead", "overhear", "overheard", "overjoyed", "overland", "overlap", "overload", "overlook", "overly", "overnight", "overpass", "overpopulated", "overpopulation", "overpower", "overpowering", "overpriced", "overran", "overrate", "overrated", "overreact", "overridden", "override", "overriding", "overrode", "overrule", "overrun", "oversaw", "overseas", "oversee", "overseen", "overseer", "overshadow", "overshoot", "overshot", "oversight", "oversimplification", "oversimplify", "oversized", "oversleep", "overslept", "overstate", "overstep", "overt", "overtake", "overtaken", "overthrew", "overthrow", "overthrown", "overtime", "overtly", "overtone", "overtook", "overture", "overturn", "overview", "overweight", "overwhelm", "overwhelmed", "overwhelming", "overwhelmingly", "overwork", "overworked", "overwrought", "ow", "owe", "owl", "own", "owner", "ownership", "ox", "oxen", "oxide", "oxidize", "oxygen", "oyster", "ozone",
    "pace", "pacemaker", "pacesetter", "pacific", "pacifier", "pacifism", "pacifist", "pacify", "pack", "package", "packaging", "packed", "packer", "packet", "packing", "pact", "pad", "padding", "paddle", "paddock", "paddy", "padlock", "padre", "pagan", "page", "pageant", "pageantry", "pager", "pagoda", "paid", "pail", "pain", "pained", "painful", "painfully", "painkiller", "painless", "painlessly", "painstaking", "painstakingly", "paint", "paintbrush", "painter", "painting", "paints", "pair", "pajamas", "pal", "palace", "palatable", "palate", "palatial", "pale", "paleontologist", "paleontology", "palette", "pall", "pallbearer", "pallid", "pallor", "palm", "palpable", "palpably", "paltry", "pamper", "pamphlet", "pan", "panacea", "panache", "pancake", "pancreas", "pancreatic", "panda", "pandemonium", "pander", "pane", "panel", "paneling", "panelist", "pang", "panhandle", "panhandler", "panic", "panicky", "panorama", "panoramic", "pansy", "pant", "pantheism", "panther", "panties", "pantomime", "pantry", "pants", "pantyhose", "papa", "papacy", "papal", "papaya", "paper", "paperback", "paperboy", "papergirl", "papers", "paperweight", "paperwork", "paprika", "par", "parable", "parachute", "parade", "paradigm", "paradise", "paradox", "paradoxical", "paradoxically", "paraffin", "paragon", "paragraph", "parakeet", "paralegal", "parallel", "paralysis", "paralytic", "paralyze", "paralyzed", "paramedic", "parameter", "paramilitary", "paramount", "paranoia", "paranoid", "paraphernalia", "paraphrase", "paraplegic", "parasite", "parasitic", "parasol", "paratrooper", "parcel", "parched", "parchment", "pardon", "pardonable", "pare", "parent", "parentage", "parental", "parentheses", "parenthesis", "parenthood", "parish", "parishioner", "parity", "park", "parka", "parking", "parkway", "parliament", "parliamentary", "parlor", "parochial", "parody", "parole", "parquet", "parrot", "parsley", "parsnip", "part", "partial", "partiality", "partially", "participant", "participate", "participation", "participle", "particle", "particular", "particularly", "particulars", "parting", "partisan", "partition", "partly", "partner", "partnership", "partridge", "partway", "party", "pass", "passable", "passage", "passageway", "passbook", "passe", "passenger", "passerby", "passersby", "passing", "passion", "passionate", "passionately", "passive", "passively", "passover", "passport", "password", "past", "pasta", "paste", "pastel", "pasteurization", "pasteurize", "pasteurized", "pastime", "pastor", "pastoral", "pastry", "pasture", "pasty", "pat", "patch", "patchwork", "patchy", "pate", "patent", "patently", "paternal", "paternalism", "paternalistic", "paternity", "path", "pathetic", "pathetically", "pathological", "pathologically", "pathologist", "pathology", "pathos", "pathway", "patience", "patient", "patiently", "patio", "patriarch", "patriarchal", "patriarchy", "patricide", "patrimony", "patriot", "patriotic", "patriotically", "patriotism", "patrol", "patrolman", "patrolwoman", "patron", "patronage", "patronize", "patronizing", "patronizingly", "patter", "pattern", "patterned", "patty", "paucity", "paunch", "paunchy", "pause", "pave", "pavement", "pavilion", "paw", "pawn", "pawnbroker", "pay", "payable", "paycheck", "payday", "payee", "payload", "payment", "payoff", "payroll", "pea", "peace", "peaceable", "peaceably", "peaceful", "peacefully", "peacefulness", "peacekeeping", "peacemaker", "peacetime", "peach", "peacock", "peak", "peaked", "peal", "peanut", "peanuts", "pear", "pearl", "peasant", "peat", "pebble", "pecan", "peck", "peculiar", "peculiarity", "peculiarly", "pedagogical", "pedagogy", "pedal", "pedantic", "pedantically", "pedantry", "peddle", "peddler", "pedestal", "pedestrian", "pediatrician", "pediatrics", "pedigree", "pedigreed", "pee", "peek", "peekaboo", "peel", "peep", "peephole", "peer", "peerless", "peeve", "peg", "pejorative", "pelican", "pellet", "pelt", "pelvic", "pelvis", "pen", "penal", "penalize", "penalty", "penance", "penchant", "pencil", "pendant", "pending", "pendulum", "penetrate", "penetrating", "penetration", "penguin", "penicillin", "peninsula", "penis", "penitence", "penitent", "penitentiary", "penknife", "penknives", "pennant", "penniless", "penny", "pension", "pensive", "pentagon", "penthouse", "peon", "people", "pep", "pepper", "peppermint", "pepperoni", "peppy", "per", "perceive", "percent", "percentage", "percentile", "perceptible", "perceptibly", "perception", "perceptive", "perceptively", "perch", "percolate", "percolator", "percussion", "peremptory", "perennial", "perfect", "perfection", "perfectionist", "perfectly", "perforate", "perform", "performance", "performer", "perfume", "perfunctorily", "perfunctory", "perhaps", "peril", "perilous", "perimeter", "period", "periodic", "periodical", "periodically", "peripheral", "periphery", "periscope", "perish", "perishable", "perishables", "perjure", "perjury", "perk", "perky", "perm", "permanence", "permanent", "permanently", "permeate", "permissible", "permission", "permissive", "permit", "permutation", "pernicious", "peroxide", "perpendicular", "perpetrate", "perpetrator", "perpetual", "perpetually", "perpetuate", "perplex", "perplexed", "perplexing", "perquisite", "persecute", "persecution", "persecutor", "perseverance", "persevere", "persist", "persistence", "persistent", "persistently", "person", "persona", "personable", "personae", "personal", "personality", "personalize", "personally", "personals", "personification", "personify", "personnel", "perspective", "perspiration", "perspire", "persuade", "persuasion", "persuasive", "persuasively", "persuasiveness", "pert", "pertain", "pertinent", "perturb", "perusal", "peruse", "pervade", "pervasive", "perverse", "perversely", "perversion", "perversity", "pervert", "perverted", "pesky", "pessimism", "pessimist", "pessimistic", "pessimistically", "pest", "pester", "pesticide", "pet", "petal", "peter", "petite", "petition", "petrified", "petrify", "petroleum", "pettiness", "petty", "petulant", "pew", "pewter", "phallic", "phallus", "phantom", "pharaoh", "pharmaceutical", "pharmacist", "pharmacologist", "pharmacology", "pharmacy", "phase", "pheasant", "phenomena", "phenomenal", "phenomenally", "phenomenon", "philanthropic", "philanthropist", "philanthropy", "philistine", "philosopher", "philosophical", "philosophically", "philosophize", "philosophy", "phlegm", "phlegmatic", "phobia", "phobic", "phoenix", "phone", "phonetic", "phonetically", "phonetics", "phonograph", "phony", "phooey", "phosphate", "phosphorescence", "phosphorescent", "phosphorus", "photo", "photocopier", "photocopy", "photogenic", "photograph", "photographer", "photographic", "photography", "photosynthesis", "phrase", "phrasing", "physical", "physically", "physician", "physicist", "physics", "physiological", "physiology", "physiotherapy", "physique", "pianist", "piano", "piccolo", "pick", "pickax", "picker", "picket", "pickle", "pickled", "pickpocket", "pickup", "picky", "picnic", "pictorial", "picture", "picturesque", "piddling", "pidgin", "pie", "piece", "piecemeal", "piecework", "pier", "pierce", "piercing", "piety", "pig", "pigeon", "pigeonhole", "piggy", "piggyback", "pigheaded", "piglet", "pigment", "pigmentation", "pigpen", "pigsty", "pigtail", "pike", "pile", "pileup", "pilfer", "pilgrim", "pilgrimage", "piling", "pill", "pillage", "pillar", "pillow", "pillowcase", "pilot", "pimp", "pimple", "pimply", "pin", "pincers", "pinch", "pincushion", "pine", "pineapple", "ping", "pinion", "pink", "pinkie", "pinnacle", "pinpoint", "pinprick", "pinstripe", "pint", "pinup", "pioneer", "pious", "piously", "pipe", "pipeline", "piping", "pipsqueak", "piquancy", "piquant", "pique", "piracy", "piranha", "pirate", "pirouette", "pisces", "piss", "pissed", "pistachio", "pistol", "piston", "pit", "pitch", "pitcher", "pitchfork", "piteous", "pitfall", "pithy", "pitiful", "pitifully", "pitiless", "pittance", "pity", "pivot", "pivotal", "pixel", "pixie", "pizza", "pizzazz", "placard", "place", "placebo", "placenta", "placid", "placidly", "plagiarism", "plagiarist", "plagiarize", "plague", "plaid", "plain", "plainclothes", "plainly", "plains", "plaintiff", "plaintive", "plan", "plane", "planet", "planetaria", "planetarium", "planetary", "plank", "plankton", "planner", "planning", "plant", "plantation", "planter", "planting", "plaque", "plasma", "plaster", "plastered", "plastic", "plate", "plateau", "plated", "plateful", "platform", "plating", "platinum", "platitude", "platonic", "platoon", "platter", "plausible", "play", "playboy", "player", "playful", "playfully", "playfulness", "playground", "playhouse", "playmate", "playoff", "playpen", "playroom", "plaything", "playwright", "plaza", "plea", "plead", "pleasant", "pleasantly", "pleasantry", "please", "pleased", "pleasing", "pleasurable", "pleasure", "pleat", "pleated", "pled", "pledge", "plenary", "plentiful", "plentifully", "plenty", "plethora", "plexiglas", "pliable", "pliant", "pliers", "plight", "plod", "plodding", "plop", "plot", "plow", "ploy", "pluck", "plucky", "plug", "plum", "plumage", "plumber", "plumbing", "plume", "plummet", "plump", "plunder", "plunge", "plunger", "plunk", "plural", "plurality", "plus", "plush", "pluto", "plutocracy", "plutonium", "ply", "plywood", "pneumatic", "pneumonia", "poach", "poacher", "pocket", "pocketbook", "pocketful", "pocketknife", "pocketknives", "pockmark", "pockmarked", "pod", "podiatrist", "podiatry", "podium", "poem", "poet", "poetic", "poetically", "poetry", "pogrom", "poignancy", "poignant", "poignantly", "poinsettia", "point", "pointed", "pointedly", "pointer", "pointless", "pointlessly", "pointlessness", "pointy", "poise", "poised", "poison", "poisoning", "poisonous", "poke", "poker", "poky", "polar", "polarity", "polarization", "polarize", "polaroid", "pole", "polemic", "polemical", "police", "policeman", "policewoman", "policy", "polio", "polish", "polished", "polite", "politely", "politeness", "political", "politically", "politician", "politicize",
    "politics", "polka", "poll", "pollen", "pollinate", "pollination", "polls", "pollster", "pollutant", "pollute", "polluted", "pollution", "polo", "polyester", "polygamist", "polygamous", "polygamy", "polygon", "polygraph", "polymer", "polyp", "polytechnic", "pomegranate", "pomp", "pompom", "pomposity", "pompous", "poncho", "pond", "ponder", "ponderous", "pontiff", "pontifical", "pontoon", "pony", "ponytail", "pooch", "poodle", "pool", "poop", "pooped", "poor", "poorly", "pop", "popcorn", "pope", "poplar", "poppy", "popsicle", "populace", "popular", "popularity", "popularize", "popularly", "populate", "population", "populous", "porcelain", "porch", "porcupine", "pore", "pork", "porn", "pornographer", "pornographic", "pornography", "porous", "porpoise", "port", "portable", "portal", "portend", "portent", "porter", "portfolio", "porthole", "portico", "portion", "portly", "portrait", "portray", "portrayal", "portuguese", "pose", "posh", "position", "positive", "positively", "posse", "possess", "possessed", "possession", "possessions", "possessive", "possibility", "possible", "possibly", "possum", "post", "postage", "postal", "postcard", "postdate", "postdoc", "postdoctoral", "poster", "posterior", "posterity", "postgraduate", "posthumous", "posthumously", "postman", "postmark", "postmaster", "postmortem", "postpone", "postponement", "postscript", "postulate", "posture", "postwar", "posy", "pot", "potassium", "potato", "potbellied", "potbelly", "potency", "potent", "potential", "potentially", "pothole", "potion", "potluck", "potpourri", "potter", "pottery", "potty", "pouch", "poultry", "pounce", "pound", "pour", "pout", "poverty", "powder", "powdered", "powdery", "power", "powerboat", "powerful", "powerfully", "powerhouse", "powerless", "powerlessness", "powwow", "practicable", "practical", "practicality", "practically", "practice", "practicing", "practitioner", "pragmatic", "pragmatism", "pragmatist", "prairie", "praise", "praiseworthy", "prance", "prank", "prankster", "prawn", "pray", "prayer", "preach", "preacher", "preamble", "precarious", "precariously", "precaution", "precautionary", "precede", "precedence", "precedent", "preceding", "precept", "precinct", "precious", "precipice", "precipitate", "precipitation", "precipitous", "precise", "precisely", "precision", "preclude", "precocious", "preconceived", "preconception", "precondition", "precursor", "predate", "predator", "predatory", "predecessor", "predestination", "predestined", "predetermined", "predicament", "predicate", "predict", "predictable", "predictably", "prediction", "predilection", "predisposed", "predisposition", "predominance", "predominant", "predominantly", "predominate", "preeminence", "preeminent", "preempt", "preemptive", "preen", "preexisting", "prefab", "prefabricated", "preface", "prefer", "preferable", "preferably", "preference", "preferential", "prefix", "pregnancy", "pregnant", "prehistoric", "prehistory", "prejudge", "prejudice", "prejudiced", "prejudicial", "preliminary", "prelude", "premarital", "premature", "prematurely", "premeditated", "premeditation", "premier", "premiere", "premise", "premises", "premium", "premonition", "prenatal", "preoccupation", "preoccupied", "preoccupy", "prep", "preparation", "preparatory", "prepare", "prepared", "preparedness", "preponderance", "preposition", "preposterous", "preppy", "preregister", "preregistration", "prerequisite", "prerogative", "presage", "presbyterian", "preschool", "preschooler", "prescribe", "prescription", "prescriptive", "presence", "present", "presentable", "presentation", "presently", "preservation", "preservative", "preserve", "preserves", "preside", "presidency", "president", "presidential", "press", "pressed", "pressing", "pressure", "pressurized", "prestige", "prestigious", "presumably", "presume", "presumption", "presumptuous", "presuppose", "presupposition", "pretend", "pretense", "pretension", "pretentious", "pretext", "prettily", "pretty", "pretzel", "prevail", "prevailing", "prevalence", "prevalent", "prevent", "preventable", "prevention", "preventive", "preview", "previous", "previously", "prewar", "prey", "price", "priceless", "pricey", "prick", "prickle", "prickly", "pride", "priest", "priestess", "priesthood", "prim", "primacy", "primal", "primarily", "primary", "primate", "prime", "primer", "primeval", "primitive", "primly", "primordial", "primp", "primrose", "prince", "princely", "princess", "principal", "principality", "principally", "principle", "principled", "principles", "print", "printer", "printing", "printout", "prior", "prioritize", "priority", "prism", "prison", "prisoner", "prissy", "pristine", "privacy", "private", "privately", "privation", "privatization", "privatize", "privilege", "privileged", "privy", "prize", "pro", "probability", "probable", "probably", "probation", "probe", "probing", "problem", "problematic", "procedural", "procedure", "proceed", "proceedings", "proceeds", "process", "procession", "processional", "processor", "proclaim", "proclamation", "procrastinate", "procrastination", "procreate", "procure", "procurement", "prod", "prodding", "prodigal", "prodigious", "prodigy", "produce", "producer", "product", "production", "productive", "productivity", "prof", "profane", "profanity", "profess", "professed", "profession", "professional", "professionalism", "professionally", "professor", "proficiency", "proficient", "profile", "profit", "profitability", "profitable", "profitably", "profiteer", "profound", "profoundly", "profundity", "profuse", "profusion", "progeny", "prognoses", "prognosis", "program", "programmer", "programming", "progress", "progression", "progressive", "progressively", "prohibit", "prohibition", "prohibitive", "prohibitively", "project", "projectile", "projection", "projector", "proletarian", "proletariat", "proliferate", "proliferation", "prolific", "prologue", "prolong", "prolonged", "prom", "promenade", "prominence", "prominent", "prominently", "promiscuity", "promiscuous", "promise", "promising", "promo", "promontory", "promote", "promoter", "promotion", "promotional", "prompt", "prompting", "promptly", "prone", "prong", "pronoun", "pronounce", "pronounced", "pronouncement", "pronto", "pronunciation", "proof", "proofread", "prop", "propaganda", "propagandize", "propagate", "propagation", "propel", "propeller", "propensity", "proper", "properly", "property", "prophecy", "prophesy", "prophet", "prophetic", "propitious", "proponent", "proportion", "proportional", "proportions", "proposal", "propose", "proposition", "proprietary", "proprietor", "propriety", "propulsion", "prosaic", "proscribe", "proscription", "prose", "prosecute", "prosecution", "prosecutor", "proselytize", "prospect", "prospective", "prospector", "prospects", "prospectus", "prosper", "prosperity", "prosperous", "prostheses", "prosthesis", "prostitute", "prostitution", "prostrate", "protagonist", "protect", "protection", "protective", "protector", "protege", "protein", "protest", "protestant", "protester", "protocol", "proton", "prototype", "protracted", "protraction", "protrude", "protrusion", "proud", "proudly", "prove", "proven", "proverb", "proverbial", "provide", "provided", "providence", "provident", "providing", "province", "provincial", "provision", "provisional", "provisions", "proviso", "provocation", "provocative", "provoke", "provost", "prow", "prowess", "prowl", "prowler", "proximity", "proxy", "prude", "prudence", "prudent", "prudently", "prudish", "prune", "prurience", "prurient", "pry", "psalm", "pseudonym", "psych", "psyche", "psyched", "psychedelic", "psychiatric", "psychiatrist", "psychiatry", "psychic", "psycho", "psychoanalysis", "psychoanalyst", "psychoanalyze", "psychological", "psychologically", "psychologist", "psychology", "psychopath", "psychopathic", "psychoses", "psychosis", "psychosomatic", "psychotherapist", "psychotherapy", "psychotic", "pub", "puberty", "pubescence", "pubic", "public", "publication", "publicist", "publicity", "publicize", "publicly", "publish", "publisher", "publishing", "puck", "pucker", "puckered", "pudding", "puddle", "pudgy", "puerile", "puff", "puffy", "pugnacious", "puke", "pull", "pulley", "pullout", "pullover", "pulmonary", "pulp", "pulpit", "pulsate", "pulsation", "pulse", "pulverization", "pulverize", "puma", "pumice", "pummel", "pump", "pumpernickel", "pumpkin", "pun", "punch", "punctual", "punctuality", "punctuate", "punctuation", "puncture", "pundit", "pungent", "punish", "punishable", "punishing", "punishment", "punitive", "punk", "punt", "puny", "pup", "pupil", "puppet", "puppeteer", "puppy", "purchase", "purchaser", "pure", "puree", "purely", "purgatory", "purge", "purification", "purify", "purist", "puritan", "puritanical", "purity", "purple", "purport", "purpose", "purposeful", "purposely", "purr", "purse", "purser", "pursue", "pursuit", "purvey", "purveyor", "pus", "push", "pusher", "pushover", "pushy", "pussy", "pussycat", "pussyfoot", "put", "putrid", "putt", "putter", "putty", "puzzle", "puzzled", "pygmy", "pylon", "pyramid", "pyre", "pyrex", "python",
    "quack", "quad", "quadrangle", "quadrant", "quadrilateral", "quadruped", "quadruple", "quadruplet", "quagmire", "quail", "quaint", "quake", "qualification", "qualified", "qualifier", "qualify", "qualitative", "quality", "qualm", "quandary", "quantifier", "quantify", "quantitative", "quantity", "quarantine", "quark", "quarrel", "quarrelsome", "quarry", "quart", "quarter", "quarterback", "quarterfinal", "quarterly", "quarters", "quartet", "quartz", "quash", "quaver", "quay", "queasiness", "queasy", "queen", "queer", "quell", "quench", "query", "quest", "question", "questionable", "questionnaire", "quibble", "quiche", "quick", "quicken", "quickie", "quickly", "quicksand", "quiet", "quietly", "quietness", "quill", "quilt", "quintessence", "quintessential", "quintet", "quintuplet", "quip", "quirk", "quirky", "quit", "quite", "quits", "quitter", "quiver", "quixotic", "quiz", "quizzical", "quorum", "quota", "quotable", "quotation", "quote", "quotient",
    "rabbi", "rabbit", "rabble", "rabid", "rabies", "raccoon", "race", "racetrack", "racial", "racially", "racing", "racism", "racist", "rack", "racket", "racketeer", "racy", "radar", "radial", "radiance", "radiant", "radiate", "radiation", "radiator", "radical", "radically", "radii", "radio", "radioactive", "radioactivity", "radiologist", "radiology", "radiotherapy", "radish", "radium", "radius", "radon", "raffle", "raft", "rafter", "rag", "ragamuffin", "rage", "ragged", "rags", "ragtag", "ragtime", "raid", "raider", "rail", "railing", "railroad", "rain", "rainbow", "raincoat", "raindrop", "rainfall", "rains", "rainstorm", "rainwater", "rainy", "raise", "raisin", "rake", "rally", "ram", "ramadan", "ramble", "rambling", "rambunctious", "ramification", "ramp", "rampage", "rampant", "ramrod", "ramshackle", "ran", "ranch", "rancher", "ranching", "rancid", "rancor", "rancorous", "random", "randomly", "rang", "range", "ranger", "rank", "ranking", "rankle", "ranks", "ransack", "ransom", "rant", "rap", "rape", "rapid", "rapidity", "rapidly", "rapids", "rapist", "rapport", "rapprochement", "rapt", "rapture", "rapturous", "rare", "rarely", "raring", "rarity", "rascal", "rash", "rasp", "raspberry", "raspy", "rat", "rate", "rather", "ratification", "ratify", "rating", "ratio", "ration", "rational", "rationale", "rationalization", "rationalize", "rationally", "rationing", "rations", "rattle", "rattler", "rattlesnake", "raucous", "raucously", "raunchy", "ravage", "rave", "raven", "ravenous", "ravine", "raving", "ravishing", "raw", "ray", "rayon", "raze", "razor", "razz", "re", "reach", "react", "reaction", "reactionary", "reactor", "read", "readable", "reader", "readership", "readily", "readiness", "reading", "readjust", "readjustment", "ready", "real", "realism", "realist", "realistic", "realistically", "reality", "realization", "realize", "really", "realm", "realtor", "realty", "ream", "reap", "reappear", "reappearance", "rear", "rearrange", "rearrangement", "reason", "reasonable", "reasonableness", "reasonably", "reasoning", "reassurance", "reassure", "reassuring", "reassuringly", "rebate", "rebel", "rebellion", "rebellious", "rebirth", "rebound", "rebuff", "rebuild", "rebuilt", "rebuke", "rebut", "rebuttal", "recalcitrance", "recalcitrant", "recall", "recant", "recap", "recapture", "recede", "receipt", "receive", "receiver", "receivership", "recent", "recently", "receptacle", "reception", "receptionist", "receptive", "recess", "recession", "recharge", "recipe", "recipient", "reciprocal", "reciprocate", "recital", "recitation", "recite", "reckless", "recklessly", "recklessness", "reckon", "reckoning", "reclaim", "reclamation", "recline", "reclining", "recluse", "recognition", "recognizable", "recognizably", "recognize", "recoil", "recollect", "recollection", "recommend", "recommendation", "recompense", "reconcile", "reconciliation", "recondition", "reconnaissance", "reconsider", "reconstitute", "reconstruct", "reconstruction", "record", "recorder", "recording", "recount", "recoup", "recourse", "recover", "recovery", "recreate", "recreation", "recreational", "recruit", "recruiter", "recruitment", "rectal", "rectangle", "rectangular", "rectify", "rector", "rectum", "recuperate", "recuperation", "recur", "recurrence", "recurrent", "recyclable", "recycle", "recycled", "recycling", "red", "redden", "reddish", "redeem", "redeemable", "redemption", "redevelop", "redevelopment", "redhead", "redid", "redirect", "redistribute", "redistribution", "redneck", "redness", "redo", "redone", "redouble", "redress", "redskin", "reduce", "reduction", "redundancy", "redundant", "redwood", "reed", "reeducate", "reeducation", "reef", "reek", "reel", "reelect", "reelection", "reenact", "reenactment", "reentry", "ref", "refer", "referee", "reference", "referenda", "referendum", "refill", "refinance", "refine", "refined", "refinement", "refinery", "refinish", "reflect", "reflection", "reflective", "reflector", "reflex", "reflexes", "reflexive", "reform", "reformation", "reformer", "refrain", "refresh", "refreshing", "refreshingly", "refreshment", "refreshments", "refrigerate", "refrigeration", "refrigerator", "refuel", "refuge", "refugee", "refund", "refundable", "refurbish", "refurbishment", "refusal", "refuse", "refute", "regain", "regal", "regalia", "regard", "regarding", "regardless", "regards", "regatta", "regenerate", "regeneration", "regent", "reggae", "regime", "regimen", "regiment", "regimental", "regimented", "region", "regional", "regionally", "register", "registrar", "registration", "registry", "regress", "regression", "regret", "regretful", "regretfully", "regrettable", "regrettably", "regroup", "regular", "regularity", "regularly", "regulate", "regulation", "regurgitate", "regurgitation", "rehab", "rehabilitate", "rehabilitation", "rehash", "rehearsal", "rehearse", "reign", "reimburse", "reimbursement", "rein", "reincarnate", "reincarnation", "reindeer", "reinforce", "reinforcement", "reinforcements", "reinstate", "reinstatement", "reinvent", "reissue", "reiterate", "reiteration", "reject", "rejection", "rejoice", "rejoicing", "rejoin", "rejoinder", "rejuvenate", "rejuvenation", "rekindle", "relapse", "relate", "related", "relation", "relations", "relationship", "relative", "relatively", "relativity", "relax", "relaxation", "relaxed", "relaxing", "relay", "release", "relegate", "relent", "relentless", "relentlessly", "relevance", "relevant", "reliability", "reliable", "reliably", "reliance", "reliant", "relic", "relief", "relieve", "relieved", "religion", "religious", "religiously", "relinquish", "relish", "relive", "relocate", "relocation", "reluctance", "reluctant", "reluctantly", "rely", "remain", "remainder", "remaining", "remains", "remake", "remark", "remarkable", "remarkably", "remarriage", "remarry", "remedial", "remedy", "remember", "remembrance", "remind", "reminder", "reminisce", "reminiscence", "reminiscent", "remiss", "remission", "remit", "remittance", "remnant", "remodel", "remorse", "remorseful", "remorseless", "remote", "remotely", "remoteness", "removable", "removal", "remove", "removed", "remover", "remunerate", "remuneration", "renaissance", "rename", "rend", "render", "rendering", "rendezvous", "rendition", "renegade", "renege", "renew", "renewable", "renewal", "renounce", "renovate", "renovation", "renown", "renowned", "rent", "rental", "renter", "renunciation", "reorganization", "reorganize", "rep", "repaid", "repair", "reparation", "repatriate", "repatriation", "repay", "repayment", "repeal", "repeat", "repeated", "repeatedly", "repel", "repellent", "repent", "repentance", "repentant", "repercussion", "repertoire", "repetition", "repetitious", "repetitive", "rephrase", "replace", "replaceable", "replacement", "replay", "replenish", "replenishment", "replete", "replica", "replicate", "replication", "reply", "report", "reportedly", "reporter", "repository", "repossess", "reprehensible", "represent", "representation", "representative", "repress", "repressed", "repression", "repressive", "reprieve", "reprimand", "reprint", "reprisal", "reprise", "reproach", "reproduce", "reproduction", "reproductive", "reprove", "reptile", "reptilian", "republic", "republican", "repudiate", "repudiation", "repugnance", "repugnant", "repulse", "repulsion", "repulsive", "reputable", "reputation", "repute", "reputed", "reputedly", "request", "requiem", "require", "requirement", "requisite", "requisition", "rerun", "resale", "rescind", "rescue", "rescuer", "research", "researcher", "resemblance", "resemble", "resent", "resentful", "resentment", "reservation", "reserve", "reserved", "reserves", "reservoir", "reshuffle", "reside", "residence", "residency", "resident", "residential", "residual", "residue", "resign", "resignation", "resigned", "resilience", "resilient", "resin", "resist", "resistance", "resistant", "resolute", "resolutely", "resolution", "resolve", "resonance", "resonant", "resonate", "resort", "resound", "resounding", "resoundingly", "resource", "resourceful", "resourcefulness", "resources", "respect", "respectability", "respectable", "respectably", "respected", "respectful", "respectfully", "respective", "respectively", "respects", "respiration", "respirator", "respiratory", "respite", "resplendent", "respond", "response", "responsibility", "responsible", "responsibly", "responsive", "responsiveness", "rest", "restate", "restatement", "restaurant", "restitution", "restive", "restless", "restlessly", "restoration", "restore", "restrain", "restrained", "restraint", "restrict", "restricted", "restriction", "restrictive", "restructure", "restructuring", "result", "resultant", "resume", "resumption", "resurface", "resurgence", "resurgent", "resurrect", "resurrection", "resuscitate", "resuscitation", "retail", "retailer", "retain", "retainer", "retake", "retaken", "retaliate", "retaliation", "retard", "retardation", "retarded", "retch", "retention", "rethink", "rethought", "reticence", "reticent", "retina", "retinue", "retire", "retired", "retiree", "retirement", "retiring", "retook", "retort", "retrace", "retract", "retractable", "retraction", "retread", "retreat", "retrial", "retribution", "retrieval", "retrieve", "retriever", "retroactive", "retroactively", "retrospective", "return", "returnable", "reunion", "reunite", "rev", "revaluation", "revalue", "revamp", "reveal", "revealing", "revel", "revelation", "reveler", "revelry", "revenge", "revenue", "reverberate", "reverberation", "revere", "reverence", "reverend", "reverent", "reverently", "reverie", "reversal", "reverse", "reversible", "reversion", "revert", "review", "reviewer", "revile", "revise", "revision", "revitalization", "revitalize", "revival", "revive", "revoke", "revolt", "revolting", "revolution", "revolutionary", "revolutionize", "revolve", "revolver", "revue", "revulsion", "reward", "rewarding", "rewind", "rework", "rewound", "rewrite", "rewritten", "rewrote", "rhapsody", "rhetoric", "rhetorical", "rhetorically", "rheumatism", "rhinestone", "rhino",
    "rhinoceros", "rhododendron", "rhubarb", "rhyme", "rhythm", "rhythmic", "rhythmically", "rib", "ribald", "ribbon", "rice", "rich", "riches", "richly", "richness", "rickety", "rickshaw", "ricochet", "rid", "riddance", "ridden", "riddle", "riddled", "ride", "rider", "ridge", "ridicule", "ridiculous", "ridiculously", "riding", "rife", "rifle", "rift", "rig", "rigging", "right", "righteous", "righteously", "righteousness", "rightful", "rightfully", "rightly", "rights", "rigid", "rigidity", "rigidly", "rigmarole", "rigor", "rigorous", "rigorously", "rile", "rim", "rind", "ring", "ringed", "ringleader", "ringlet", "ringside", "ringworm", "rink", "rinse", "riot", "rioter", "rioting", "riotous", "rip", "ripe", "ripen", "ripple", "rise", "risen", "riser", "risk", "risky", "risque", "rite", "ritual", "ritually", "ritzy", "rival", "rivalry", "river", "riverbed", "riverfront", "riverside", "rivet", "riveting", "roach", "road", "roadblock", "roadhouse", "roadkill", "roadrunner", "roadside", "roadway", "roadworthy", "roam", "roar", "roaring", "roast", "rob", "robber", "robbery", "robe", "robin", "robot", "robotics", "robust", "rock", "rocker", "rocket", "rocky", "rod", "rode", "rodent", "rodeo", "roe", "rogue", "role", "roll", "roller", "rollerblade", "rollerskating", "rollicking", "roman", "romance", "romantic", "romantically", "romanticize", "romp", "roof", "roofing", "rooftop", "rook", "rookie", "room", "roomful", "roommate", "roomy", "roost", "rooster", "root", "rootless", "roots", "rope", "rosary", "rose", "roster", "rostrum", "rosy", "rot", "rotary", "rotate", "rotation", "rote", "rotisserie", "rotor", "rotten", "rotund", "rotunda", "rouge", "rough", "roughage", "roughhouse", "roughly", "roughness", "roughshod", "roulette", "round", "roundabout", "roundup", "rouse", "rousing", "rout", "route", "routine", "routinely", "roving", "row", "rowboat", "rowdiness", "rowdy", "rowing", "royal", "royalties", "royalty", "rub", "rubber", "rubberneck", "rubbery", "rubbish", "rubble", "rubdown", "rubella", "ruby", "ruckus", "rudder", "ruddy", "rude", "rudely", "rudeness", "rudimentary", "rudiments", "rue", "rueful", "ruffle", "rug", "rugby", "rugged", "ruin", "ruinous", "rule", "ruler", "ruling", "rum", "rumble", "ruminate", "rummage", "rummy", "rumor", "rumored", "rump", "rumple", "run", "runaround", "runaway", "rundown", "rung", "runner", "running", "runny", "runway", "rupture", "rural", "ruse", "rush", "russian", "rust", "rustic", "rustle", "rustler", "rustproof", "rusty", "rut", "ruthless", "ruthlessly", "ruthlessness", "rye",
    "sabbath", "sabbatical", "saber", "sabotage", "saboteur", "saccharin", "sack", "sacrament", "sacred", "sacrifice", "sacrificial", "sacrilege", "sacrilegious", "sacrosanct", "sad", "sadden", "saddle", "sadism", "sadist", "sadistic", "sadistically", "sadly", "sadness", "safari", "safe", "safeguard", "safekeeping", "safely", "safety", "sag", "saga", "sage", "sagebrush", "sagittarius", "said", "sail", "sailboard", "sailboat", "sailing", "sailor", "saint", "sake", "salable", "salad", "salami", "salaried", "salary", "sale", "sales", "salesclerk", "salesman", "salesperson", "saleswoman", "salient", "saliva", "salivate", "sallow", "salmon", "salmonella", "salon", "saloon", "salsa", "salt", "saltwater", "salty", "salutation", "salute", "salvage", "salvation", "salve", "same", "sameness", "sample", "sanatorium", "sanctify", "sanctimonious", "sanction", "sanctions", "sanctity", "sanctuary", "sand", "sandal", "sandbag", "sandblast", "sandcastle", "sandman", "sandpaper", "sandstone", "sandwich", "sandy", "sane", "sang", "sanitary", "sanitation", "sanitize", "sanity", "sank", "santa", "sap", "sapling", "sapphire", "sarcasm", "sarcastic", "sarcastically", "sardine", "sardonic", "sash", "sass", "sassy", "sat", "satan", "satanic", "satanism", "satellite", "satin", "satiny", "satire", "satirical", "satirically", "satirist", "satirize", "satisfaction", "satisfactorily", "satisfactory", "satisfied", "satisfy", "satisfying", "saturate", "saturation", "saturday", "saturn", "sauce", "saucepan", "saucer", "saucy", "sauna", "saunter", "sausage", "saute", "sauteed", "savage", "savagely", "savagery", "save", "saver", "saving", "savings", "savior", "savor", "savory", "savvy", "saw", "sawdust", "sawn", "sax", "saxophone", "say", "saying", "scab", "scads", "scaffold", "scaffolding", "scald", "scalding", "scale", "scallop", "scalloped", "scalp", "scalpel", "scalper", "scaly", "scam", "scamper", "scan", "scandal", "scandalize", "scandalous", "scandinavia", "scandinavian", "scanner", "scant", "scapegoat", "scar", "scarce", "scarcely", "scarcity", "scare", "scarecrow", "scared", "scarf", "scarlet", "scarves", "scary", "scathing", "scatter", "scatterbrained", "scattered", "scavenge", "scavenger", "scenario", "scene", "scenery", "scenic", "scent", "scented", "schedule", "scheme", "schemer", "schism", "schizophrenia", "schizophrenic", "schlep", "schlock", "schlocky", "schmaltz", "schmaltzy", "schmooze", "schmuck", "scholar", "scholarship", "scholastic", "school", "schoolboy", "schoolchild", "schoolchildren", "schoolgirl", "schooling", "schoolteacher", "science", "scientific", "scientifically", "scientist", "scintillating", "scissors", "scoff", "scold", "scolding", "scoop", "scoot", "scooter", "scope", "scorch", "scorching", "score", "scoreboard", "scorecard", "scores", "scorn", "scornful", "scornfully", "scorpio", "scorpion", "scotch", "scottish", "scoundrel", "scour", "scourge", "scout", "scowl", "scrabble", "scraggly", "scram", "scramble", "scrap", "scrapbook", "scrape", "scrappy", "scraps", "scratch", "scratchy", "scrawl", "scrawny", "scream", "screech", "screen", "screenplay", "screw", "screwball", "screwdriver", "screwy", "scribble", "scribe", "scrimp", "script", "scripture", "scroll", "scrooge", "scrounge", "scrub", "scruffy", "scruples", "scrupulous", "scrupulously", "scrutinize", "scrutiny", "scuff", "scuffle", "sculptor", "sculpture", "scum", "scurrilous", "scurry", "scuttle", "sea", "seafood", "seal", "sealed", "seam", "seamless", "sear", "search", "searching", "searchlight", "seashell", "seashore", "seasick", "seasickness", "seaside", "season", "seasonable", "seasonal", "seasoned", "seasoning", "seat", "seating", "seaweed", "sec", "secede", "secession", "secluded", "seclusion", "second", "secondary", "secondhand", "secondly", "seconds", "secrecy", "secret", "secretarial", "secretary", "secrete", "secretion", "secretive", "secretively", "secretly", "sect", "section", "sector", "secular", "secure", "securely", "security", "sedan", "sedate", "sedated", "sedation", "sedative", "sedentary", "sediment", "seduce", "seduction", "seductive", "see", "seed", "seedless", "seedling", "seedy", "seek", "seem", "seeming", "seemingly", "seen", "seep", "seepage", "seesaw", "seethe", "seething", "segment", "segmented", "segregate", "segregation", "seize", "seizure", "seldom", "select", "selection", "selective", "selectively", "self", "selfish", "selfishly", "selfishness", "selfless", "sell", "seller", "sellout", "selves", "semantic", "semantics", "semblance", "semen", "semester", "semicircle", "semicolon", "semiconductor", "semifinal", "semifinalist", "seminal", "seminar", "seminary", "semiprecious", "senate", "senator", "senatorial", "send", "senile", "senility", "senior", "seniority", "sensation", "sensational", "sensationalism", "sensationally", "sense", "senseless", "sensibility", "sensible", "sensibly", "sensitive", "sensitively", "sensitivity", "sensor", "sensory", "sensual", "sensuality", "sensuous", "sent", "sentence", "sentiment", "sentimental", "sentimentality", "sentry", "separable", "separate", "separated", "separately", "separation", "september", "sequel", "sequence", "sequential", "sequoia", "serenade", "serene", "serenely", "serenity", "sergeant", "serial", "series", "serious", "seriously", "seriousness", "sermon", "serpent", "serrated", "serum", "servant", "serve", "server", "service", "serviceable", "serviceman", "servicewoman", "servile", "serving", "servitude", "session", "set", "setback", "setting", "settle", "settled", "settlement", "settler", "setup", "seven", "seventeen", "seventeenth", "seventh", "seventieth", "seventy", "sever", "several", "severance", "severe", "severely", "severity", "sew", "sewage", "sewer", "sewing", "sewn", "sex", "sexism", "sexist", "sexual", "sexuality", "sexually", "sexy", "sh", "shabbily", "shabby", "shack", "shackle", "shade", "shades", "shading", "shadow", "shadowy", "shady", "shaft", "shaggy", "shake", "shakedown", "shaken", "shakeup", "shakily", "shaky", "shall", "shallow", "shallowness", "sham", "shambles", "shame", "shameful", "shamefully", "shameless", "shamelessly", "shampoo", "shamrock", "shanty", "shantytown", "shape", "shapely", "share", "shareholder", "shark", "sharp", "sharpen", "sharpener", "sharply", "sharpness", "shatter", "shave", "shaver", "shawl", "she", "sheaf", "shear", "shears", "sheath", "sheathe", "sheaves", "shed", "sheen", "sheep", "sheepish", "sheepishly", "sheer", "sheet", "sheik", "shelf", "shell", "shellfish", "shelter", "sheltered", "shelve", "shelves", "shelving", "shenanigans", "shepherd", "sherbet", "sheriff", "sherry", "shield", "shift", "shiftless", "shifty", "shimmer", "shin", "shine", "shingle", "shinny", "shiny", "ship", "shipload", "shipment", "shipping", "shipwreck", "shipyard", "shirk", "shirt", "shirtsleeve", "shit", "shitty", "shiver", "shoal", "shock", "shocked", "shocking", "shod", "shoddily", "shoddy", "shoe", "shoelace", "shoestring", "shone", "shoo", "shook", "shoot", "shooting", "shop", "shopkeeper", "shoplift", "shoplifter", "shoplifting", "shopper", "shopping", "shore", "shorn", "short", "shortage", "shortchange", "shortcoming", "shortcut", "shorten", "shortening", "shortfall", "shorthand", "shortly", "shortness", "shorts", "shortsighted", "shortwave", "shot", "shotgun", "should", "shoulder", "shout", "shove", "shovel", "show", "showbiz", "showcase", "showdown", "shower", "showing", "showman", "showmanship", "shown", "showpiece", "showroom", "showy", "shrank", "shrapnel", "shred", "shrewd", "shrewdly", "shriek", "shrill", "shrimp", "shrine", "shrink", "shrinkage", "shrivel", "shriveled", "shroud", "shrub", "shrubbery", "shrug", "shrunk", "shrunken", "shuck", "shucks", "shudder", "shuffle", "shun", "shunt", "shush", "shut", "shutdown", "shuteye", "shutter", "shuttle", "shy", "shyly", "shyness", "shyster", "sibling", "sic", "sick", "sicken", "sickening", "sickle", "sickly", "sickness", "side", "sideburns", "sidekick", "sideline", "sidelines", "sidelong", "sideshow", "sidestep", "sidetrack", "sidewalk", "sideways", "siding", "sidle", "siege", "siesta", "sieve", "sift", "sigh", "sight", "sighted", "sighting", "sightless", "sightread", "sights", "sightseeing", "sightseer", "sign", "signal", "signatory", "signature", "significance", "significant", "significantly", "signify", "signing", "signpost", "sikh", "sikhism", "silence", "silencer", "silent", "silently", "silhouette", "silicon", "silk", "silken", "silky", "sill", "silliness", "silly", "silo", "silt", "silver", "silversmith", "silverware", "similar", "similarity", "similarly", "simile", "simmer", "simper", "simple", "simplicity", "simplification", "simplify", "simplistic", "simply", "simulate", "simulation", "simulator", "simultaneous", "simultaneously", "sin", "since", "sincere", "sincerely", "sincerity", "sinew", "sinewy", "sinful", "sing", "singe", "singer", "singing", "single", "singles", "singly", "singsong", "singular", "singularly", "sinister", "sink", "sinner", "sinus", "sip", "siphon", "sir", "sire", "siren", "sirloin", "sissy", "sister", "sisterhood", "sisterly", "sit", "sitcom", "site", "sitter", "sitting", "situated", "situation", "six", "sixteen", "sixteenth", "sixth", "sixtieth", "sixty", "sizable", "size", "sizzle", "skate", "skateboard", "skateboarder", "skateboarding", "skater", "skeleton", "skeptic", "skeptical", "skeptically", "skepticism", "sketch", "sketchy", "skew", "skewed", "skewer", "ski", "skid", "skier", "skiing", "skill", "skilled", "skillet", "skillful", "skillfully", "skim", "skimp", "skimpy", "skin", "skinflint", "skinhead", "skinny", "skintight", "skip", "skipper", "skirmish", "skirt", "skit", "skittish", "skull", "skullcap", "skunk", "sky", "skydiver", "skydiving", "skylight", "skyline", "skyrocket", "skyscraper", "slab", "slack", "slacken", "slacker", "slacks", "slain", "slake", "slalom", "slam", "slander", "slang", "slant", "slap", "slapdash", "slapstick", "slash", "slat", "slate", "slather", "slaughter", "slaughterhouse", "slave", "slavery", "slavish", "slay",
    "slaying", "sleazy", "sled", "sledgehammer", "sleek", "sleep", "sleeper", "sleepily", "sleepless", "sleeplessness", "sleepwalk", "sleepy", "sleepyhead", "sleet", "sleeve", "sleeveless", "sleigh", "slender", "slept", "sleuth", "slew", "slice", "slick", "slid", "slide", "slight", "slightly", "slim", "slime", "slimy", "sling", "slingshot", "slink", "slip", "slipper", "slippery", "slipshod", "slit", "slither", "sliver", "slob", "slobber", "slog", "slogan", "slop", "slope", "sloppily", "sloppy", "slosh", "sloshed", "slot", "sloth", "slothful", "slouch", "slovenly", "slow", "slowdown", "slowly", "slowness", "slowpoke", "sludge", "slug", "sluggish", "sluice", "slum", "slumber", "slump", "slung", "slunk", "slur", "slurp", "slush", "slushy", "slut", "sly", "slyly", "smack", "small", "smallpox", "smart", "smarts", "smash", "smashed", "smattering", "smear", "smell", "smelly", "smidgen", "smile", "smirk", "smith", "smithereens", "smitten", "smock", "smog", "smoggy", "smoke", "smoked", "smoker", "smokestack", "smoking", "smoky", "smolder", "smooch", "smooth", "smoothly", "smoothness", "smorgasbord", "smother", "smudge", "smug", "smuggle", "smuggler", "smuggling", "smugly", "smugness", "smut", "smutty", "snack", "snafu", "snag", "snail", "snake", "snap", "snappy", "snapshot", "snare", "snarl", "snatch", "snazzy", "sneak", "sneaker", "sneaking", "sneaky", "sneer", "sneeze", "snicker", "snide", "sniff", "sniffle", "sniffles", "snip", "snipe", "sniper", "snit", "snitch", "snob", "snobbery", "snobbish", "snobby", "snoop", "snooty", "snooze", "snore", "snorkel", "snorkeling", "snort", "snot", "snotty", "snout", "snow", "snowball", "snowboard", "snowboarding", "snowbound", "snowdrift", "snowfall", "snowflake", "snowman", "snowmobile", "snowplow", "snowstorm", "snowy", "snub", "snuck", "snuff", "snug", "snuggle", "snugly", "so", "soak", "soaked", "soaking", "soap", "soapy", "soar", "soaring", "sob", "sober", "sobering", "sobriety", "soccer", "sociable", "social", "socialism", "socialist", "socialite", "socialize", "socially", "society", "socioeconomic", "sociological", "sociologist", "sociology", "sociopath", "sock", "socket", "sod", "soda", "sodden", "sodium", "sofa", "soft", "softball", "soften", "softhearted", "softly", "softness", "software", "softy", "soggy", "soil", "soiled", "sojourn", "solace", "solar", "sold", "solder", "soldier", "sole", "solely", "solemn", "solemnity", "solemnly", "solicit", "solicitor", "solicitous", "solid", "solidarity", "solidify", "solidity", "solidly", "soliloquy", "solitaire", "solitary", "solitude", "solo", "soloist", "soluble", "solution", "solvable", "solve", "solvent", "somber", "somberly", "some", "somebody", "someday", "somehow", "someone", "someplace", "somersault", "something", "sometime", "sometimes", "someway", "somewhat", "somewhere", "son", "sonata", "song", "songwriter", "sonic", "sonnet", "soon", "soot", "soothe", "soothing", "soothingly", "sophisticated", "sophistication", "sophomore", "sophomoric", "soporific", "sopping", "soprano", "sorbet", "sorcerer", "sorceress", "sorcery", "sordid", "sore", "sorely", "soreness", "sorority", "sorrow", "sorrowful", "sorrowfully", "sorry", "sort", "souffle", "sought", "soul", "soulful", "sound", "soundly", "soundness", "soundproof", "soundtrack", "soup", "sour", "source", "sourdough", "sourly", "sourness", "south", "southbound", "southeast", "southeasterly", "southeastern", "southeastward", "southerly", "southern", "southerner", "southwest", "southwesterly", "southwestern", "southwestward", "souvenir", "sovereign", "sovereignty", "soviet", "sow", "sown", "soybean", "spa", "space", "spacecraft", "spaceship", "spacey", "spacing", "spacious", "spaciousness", "spade", "spades", "spaghetti", "span", "spangle", "spaniel", "spanish", "spank", "spanking", "spar", "spare", "sparingly", "spark", "sparkle", "sparkler", "sparkling", "sparrow", "sparse", "sparsely", "sparseness", "spartan", "spasm", "spasmodic", "spastic", "spat", "spate", "spatial", "spatter", "spatula", "spawn", "speak", "speaker", "spear", "spearhead", "spearmint", "special", "specialist", "specialization", "specialize", "specialized", "specially", "specialty", "species", "specific", "specifically", "specification", "specifics", "specify", "specimen", "specious", "speck", "speckled", "spectacle", "spectacles", "spectacular", "spectacularly", "spectator", "specter", "spectra", "spectrum", "speculate", "speculation", "speculative", "speculator", "sped", "speech", "speechless", "speed", "speedboat", "speedily", "speeding", "speedometer", "speedway", "speedy", "spell", "spellbound", "spelling", "spelt", "spend", "spending", "spendthrift", "spent", "sperm", "spew", "sphere", "spherical", "sphinx", "spice", "spicy", "spider", "spiel", "spiffy", "spike", "spill", "spin", "spinach", "spinal", "spindly", "spine", "spineless", "spinster", "spiral", "spire", "spirit", "spirited", "spirits", "spiritual", "spiritually", "spit", "spite", "spiteful", "splash", "splashy", "splat", "splatter", "splay", "splendid", "splendidly", "splendor", "splint", "splinter", "split", "splitting", "splurge", "spoil", "spoiled", "spoils", "spoilsport", "spoke", "spoken", "spokesman", "spokesperson", "spokeswoman", "sponge", "sponsor", "sponsorship", "spontaneity", "spontaneous", "spontaneously", "spoof", "spook", "spooky", "spool", "spoon", "spoonful", "sporadic", "sporadically", "sport", "sporting", "sports", "sportscast", "sportsman", "sportsmanship", "sportswear", "sporty", "spot", "spotless", "spotlight", "spotty", "spouse", "spout", "sprain", "sprang", "sprawl", "sprawled", "sprawling", "spray", "spread", "spreadsheet", "spree", "sprig", "spring", "springboard", "springtime", "springy", "sprinkle", "sprinkler", "sprint", "sprinter", "sprout", "spruce", "sprung", "spry", "spud", "spun", "spunky", "spur", "spurious", "spurn", "spurt", "sputter", "spy", "squabble", "squad", "squadron", "squalid", "squall", "squalor", "squander", "square", "squarely", "squash", "squat", "squatter", "squawk", "squeak", "squeaky", "squeal", "squeamish", "squeeze", "squelch", "squid", "squint", "squire", "squirm", "squirrel", "squirt", "stab", "stabbing", "stability", "stabilize", "stable", "stack", "stacks", "stadia", "stadium", "staff", "staffer", "staffing", "stag", "stage", "stagecoach", "stagger", "staggering", "staggeringly", "staging", "stagnant", "stagnate", "stagnation", "staid", "stain", "stair", "staircase", "stairs", "stairway", "stake", "stakeout", "stakes", "stale", "stalemate", "stalk", "stalker", "stalking", "stall", "stallion", "stalwart", "stamina", "stammer", "stamp", "stampede", "stance", "stanch", "stand", "standard", "standardization", "standardize", "standby", "standing", "standoff", "standout", "standpoint", "stands", "standstill", "stank", "staple", "stapler", "star", "starboard", "starch", "starchy", "stardom", "stare", "starfish", "stark", "start", "starter", "startle", "startled", "startling", "starvation", "starve", "starving", "stash", "stat", "state", "stately", "statement", "statesman", "statesmanlike", "statesmanship", "statewide", "static", "station", "stationary", "stationery", "statistic", "statistical", "statistically", "statistician", "statistics", "statue", "stature", "status", "statute", "statutory", "staunch", "stave", "stay", "steadfast", "steady", "steak", "steal", "stealth", "stealthily", "stealthy", "steam", "steamboat", "steamroll", "steamroller", "steamy", "steel", "steep", "steeple", "steeply", "steepness", "steer", "steering", "stellar", "stem", "stench", "stencil", "stenographer", "stenography", "step", "stepbrother", "stepchild", "stepchildren", "stepdaughter", "stepfather", "stepladder", "stepmother", "stepsister", "stepson", "stereo", "stereotype", "stereotypical", "sterile", "sterility", "sterilization", "sterilize", "sterling", "stern", "sternly", "steroid", "stethoscope", "stew", "steward", "stewardess", "stick", "sticker", "stickler", "sticks", "sticky", "stiff", "stiffen", "stiffly", "stiffness", "stifle", "stifling", "stigma", "stigmatize", "still", "stillbirth", "stillborn", "stillness", "stilt", "stilted", "stilts", "stimulant", "stimulate", "stimulating", "stimulation", "stimuli", "stimulus", "sting", "stinginess", "stingy", "stink", "stinker", "stinking", "stint", "stipend", "stipulate", "stipulation", "stir", "stirrup", "stitch", "stitching", "stock", "stockade", "stockbroker", "stockholder", "stocking", "stockpile", "stocky", "stockyard", "stodgy", "stoic", "stoical", "stoicism", "stoke", "stole", "stolen", "stolid", "stolidly", "stomach", "stomachache", "stomp", "stone", "stoned", "stonewall", "stony", "stood", "stool", "stoop", "stop", "stopgap", "stoplight", "stopover", "stoppage", "stopper", "stopwatch", "storage", "store", "storehouse", "storekeeper", "storeroom", "storey", "stork", "storm", "stormy", "story", "storyteller", "stout", "stove", "stow", "stowaway", "straddle", "straggle", "straight", "straighten", "straightforward", "strain", "strained", "strainer", "strait", "straitjacket", "strand", "stranded", "strange", "strangely", "strangeness", "stranger", "strangle", "stranglehold", "strangulation", "strap", "strapless", "strapped", "strata", "strategic", "strategically", "strategy", "stratify", "stratosphere", "stratum", "straw", "strawberry", "stray", "streak", "streaky", "stream", "streamer", "streamline", "streamlined", "street", "streetcar", "streetlight", "strength", "strengthen", "strenuous", "strenuously", "stress", "stressed", "stressful", "stretch", "stretcher", "strew", "strewn", "stricken", "strict", "strictly", "stridden", "stride", "strident", "strife", "strike", "striker", "striking", "strikingly", "string", "stringent", "strings", "strip", "stripe", "striped", "stripper", "striptease", "strive", "striven", "strode", "stroke", "stroll", "stroller", "strong", "stronghold", "strongly", "strove", "struck", "structural", "structure", "struggle", "strum", "strung", "strut", "stub", "stubble", "stubborn", "stubbornly", "stubbornness", "stuck", "stud",
    "studded", "student", "studied", "studies", "studio", "studious", "study", "stuff", "stuffing", "stuffy", "stumble", "stump", "stun", "stung", "stunk", "stunned", "stunning", "stunt", "stupefied", "stupefy", "stupendous", "stupid", "stupidity", "stupidly", "stupor", "sturdiness", "sturdy", "stutter", "style", "stylish", "stymie", "styrofoam", "suave", "sub", "subcommittee", "subconscious", "subconsciously", "subculture", "subdivide", "subdivision", "subdue", "subdued", "subject", "subjective", "subjectively", "subjugate", "subjunctive", "sublet", "sublime", "subliminal", "submarine", "submerge", "submerged", "submersion", "submission", "submissive", "submit", "subordinate", "subordination", "subpoena", "subscribe", "subscriber", "subscription", "subsequent", "subsequently", "subservience", "subservient", "subside", "subsidiary", "subsidize", "subsidized", "subsidy", "subsist", "subsistence", "substance", "substandard", "substantial", "substantially", "substantiate", "substitute", "substitution", "subterfuge", "subterranean", "subtitles", "subtle", "subtlety", "subtly", "subtract", "subtraction", "suburb", "suburban", "suburbia", "subversive", "subvert", "subway", "succeed", "success", "successful", "successfully", "succession", "successive", "successively", "successor", "succinct", "succinctly", "succor", "succulent", "succumb", "such", "suck", "sucker", "suction", "sudden", "suddenly", "suddenness", "suds", "sue", "suede", "suffer", "sufferer", "suffering", "suffice", "sufficiency", "sufficient", "sufficiently", "suffix", "suffocate", "suffocating", "suffocation", "sugar", "sugary", "suggest", "suggestible", "suggestion", "suggestive", "suggestively", "suicidal", "suicide", "suit", "suitability", "suitable", "suitably", "suitcase", "suite", "suitor", "sulfur", "sulk", "sulky", "sullen", "sullenly", "sultan", "sultry", "sum", "summarize", "summary", "summer", "summertime", "summery", "summit", "summon", "summons", "sumptuous", "sun", "sunbathe", "sunbathing", "sunblock", "sunburn", "sunburned", "sunburnt", "sundae", "sunday", "sundown", "sundry", "sunflower", "sung", "sunglasses", "sunk", "sunken", "sunlight", "sunlit", "sunny", "sunrise", "sunscreen", "sunset", "sunshine", "suntan", "sunup", "super", "superb", "superbly", "superficial", "superficially", "superfluous", "superhighway", "superhuman", "superintendent", "superior", "superiority", "superlative", "supermarket", "supernatural", "superpower", "supersede", "supersonic", "superstar", "superstition", "superstitious", "superstructure", "supervise", "supervision", "supervisor", "supervisory", "supper", "supplant", "supple", "supplement", "supplemental", "supplementary", "supplier", "supplies", "supply", "support", "supporter", "supportive", "suppose", "supposed", "supposedly", "supposing", "supposition", "suppress", "suppression", "supremacy", "supreme", "supremely", "surcharge", "sure", "surefire", "surely", "surf", "surface", "surfboard", "surfer", "surfing", "surge", "surgeon", "surgery", "surgical", "surgically", "surly", "surmise", "surmount", "surpass", "surplus", "surprise", "surprised", "surprising", "surprisingly", "surreal", "surrealistic", "surrender", "surreptitious", "surrogate", "surround", "surrounding", "surroundings", "surveillance", "survey", "survival", "survive", "survivor", "susceptible", "suspect", "suspend", "suspenders", "suspense", "suspension", "suspicion", "suspicious", "suspiciously", "sustain", "sustained", "swab", "swagger", "swallow", "swam", "swamp", "swan", "swank", "swap", "swarm", "swarthy", "swat", "swatch", "sway", "swear", "sweat", "sweater", "sweatpants", "sweats", "sweatshirt", "sweatshop", "sweaty", "sweep", "sweeper", "sweeping", "sweepstakes", "sweet", "sweeten", "sweetener", "sweetheart", "sweetie", "sweetly", "sweetness", "sweets", "swell", "swelling", "sweltering", "swept", "swerve", "swift", "swiftly", "swim", "swimmer", "swimming", "swimsuit", "swindle", "swindler", "swine", "swing", "swinging", "swipe", "swirl", "swish", "swiss", "switch", "switchboard", "swivel", "swollen", "swoon", "swoop", "sword", "swordfish", "swore", "sworn", "swum", "swung", "sycamore", "sycophant", "syllabi", "syllable", "syllabus", "symbol", "symbolic", "symbolically", "symbolism", "symbolize", "symmetrical", "symmetrically", "symmetry", "sympathetic", "sympathetically", "sympathies", "sympathize", "sympathizer", "sympathy", "symphony", "symptom", "synagogue", "sync", "synchronize", "syndicate", "syndicated", "syndication", "syndrome", "synod", "synonym", "synonymous", "synopses", "synopsis", "syntax", "syntheses", "synthesis", "synthesize", "synthesizer", "synthetic", "synthetically", "syphilis", "syringe", "syrup", "system", "systematic", "systematically",
    "tab", "tabby", "tabernacle", "table", "tablecloth", "tablespoon", "tablespoonful", "tablet", "tabloid", "taboo", "tabulate", "tabulation", "tacit", "tacitly", "taciturn", "tack", "tackiness", "tackle", "tacky", "taco", "tact", "tactful", "tactfully", "tactic", "tactical", "tactically", "tactics", "tad", "tadpole", "taffy", "tag", "tail", "tailgate", "taillight", "tailor", "tailoring", "tailpipe", "tails", "tailspin", "taint", "tainted", "taiwanese", "take", "taken", "takeoff", "takeout", "takeover", "taking", "tale", "talent", "talented", "talisman", "talk", "talkative", "talker", "talks", "tall", "tallow", "tally", "talmud", "talon", "tambourine", "tame", "tamper", "tampon", "tan", "tandem", "tangent", "tangential", "tangerine", "tangible", "tangle", "tangled", "tango", "tangy", "tank", "tankard", "tanker", "tanned", "tantalize", "tantalizing", "tantalizingly", "tantamount", "tantrum", "tap", "tape", "taper", "tapered", "tapestry", "tapeworm", "taps", "tar", "tarantula", "tardiness", "tardy", "target", "tariff", "tarmac", "tarnish", "tarot", "tarp", "tarpaulin", "tarry", "tart", "tartan", "tartar", "task", "tassel", "taste", "tasteful", "tastefully", "tasteless", "taster", "tasty", "tattered", "tattle", "tattletale", "tattoo", "taught", "taunt", "taurus", "taut", "tautly", "tavern", "tawdry", "tawny", "tax", "taxable", "taxation", "taxi", "taxidermy", "taxing", "taxpayer", "tea", "teach", "teacher", "teaching", "teacup", "teak", "teakettle", "team", "teammate", "teamster", "teamwork", "teapot", "tear", "teardrop", "tearful", "teargas", "tease", "teaspoon", "teaspoonful", "teat", "technical", "technicality", "technically", "technician", "technique", "technological", "technologist", "technology", "tedious", "tedium", "tee", "teem", "teen", "teenage", "teenaged", "teenager", "teens", "teeter", "teeth", "teethe", "teetotaler", "teflon", "telecommunications", "telecommuter", "telecommuting", "telegram", "telegraph", "telepathy", "telephone", "telescope", "telescopic", "telethon", "televise", "television", "tell", "teller", "telling", "telltale", "temp", "temper", "temperament", "temperamental", "temperance", "temperate", "temperature", "tempest", "tempestuous", "template", "temple", "tempo", "temporarily", "temporary", "tempt", "temptation", "tempting", "ten", "tenacious", "tenacity", "tenancy", "tenant", "tend", "tendency", "tender", "tenderhearted", "tenderize", "tenderly", "tenderness", "tendon", "tendril", "tenement", "tenet", "tennis", "tenor", "tense", "tension", "tent", "tentacle", "tentative", "tentatively", "tenth", "tenuous", "tenure", "tepee", "tepid", "tequila", "term", "terminal", "terminally", "terminate", "termination", "terminology", "terminus", "termite", "terms", "terrace", "terrain", "terrestrial", "terrible", "terribly", "terrier", "terrific", "terrified", "terrify", "terrifying", "territorial", "territory", "terror", "terrorism", "terrorist", "terrorize", "terse", "tersely", "test", "testament", "testes", "testicle", "testify", "testimonial", "testimony", "testy", "tetanus", "tether", "text", "textbook", "textile", "texture", "than", "thank", "thankful", "thankfully", "thankless", "thanks", "thanksgiving", "that", "thatch", "thaw", "the", "theater", "theatrical", "theft", "their", "theirs", "them", "thematic", "theme", "themselves", "then", "theologian", "theological", "theology", "theoretical", "theoretically", "theoretician", "theorist", "theorize", "theory", "therapeutic", "therapist", "therapy", "there", "thereabout", "thereabouts", "thereafter", "thereby", "therefore", "therein", "thereof", "thereupon", "thermal", "thermometer", "thermonuclear", "thermos", "thermostat", "thesauri", "thesaurus", "these", "theses", "thesis", "they", "thick", "thicken", "thicket", "thickly", "thickness", "thief", "thieves", "thigh", "thimble", "thin", "thing", "thingamajig", "things", "think", "thinker", "thinking", "thinly", "third", "thirst", "thirstily", "thirsty", "thirteen", "thirteenth", "thirtieth", "thirty", "this", "thistle", "thong", "thorn", "thorny", "thorough", "thoroughbred", "thoroughfare", "thoroughly", "thoroughness", "those", "though", "thought", "thoughtful", "thoughtfully", "thoughtfulness", "thoughtless", "thoughtlessly", "thoughtlessness", "thousand", "thousandth", "thrash", "thrashing", "thread", "threadbare", "threat", "threaten", "threatening", "threateningly", "three", "thresh", "thresher", "threshold", "threw", "thrift", "thrifty", "thrill", "thrilled", "thriller", "thrilling", "thrive", "thriving", "throat", "throaty", "throb", "throne", "throng", "throttle", "through", "throughout", "throve", "throw", "throwaway", "throwback", "thrown", "thrust", "thud", "thug", "thumb", "thumbnail", "thumbtack", "thump", "thunder", "thunderbolt", "thunderous", "thunderstorm", "thunderstruck", "thursday", "thus", "thwart", "thyroid", "tiara", "tic", "tick", "ticket", "tickle", "ticklish", "tidal", "tidbit", "tide", "tidy", "tie", "tiebreaker", "tier", "tiff", "tiger", "tight", "tighten", "tightfisted", "tightly", "tightness", "tightrope", "tights", "tightwad", "tile", "till", "tilt", "timber", "time", "timekeeper", "timeless", "timely", "timer", "times", "timetable", "timid", "timidity", "timidly", "timing", "tin", "tinder", "tinderbox", "tinfoil", "tinge", "tinged", "tingle", "tingling", "tinker", "tinkle", "tinny", "tinsel", "tint", "tiny", "tip", "tipsy", "tiptoe", "tirade", "tire", "tired", "tiredness", "tireless", "tiresome", "tiring", "tissue", "tit", "titillate", "title", "titter", "tizzy", "to", "toad", "toadstool", "toast", "toaster", "toasty", "tobacco", "tobacconist", "toboggan", "today", "toddle", "toddler", "toe", "toehold", "toenail", "toffee", "tofu", "toga", "together", "togetherness", "toggle", "togs", "toil", "toilet", "toiletries", "token", "tokenism", "told", "tolerable", "tolerance", "tolerant", "tolerate", "toll", "tollbooth", "tollgate", "tomahawk", "tomato", "tomb", "tomboy", "tombstone", "tomcat", "tome", "tomfoolery", "tomorrow", "ton", "tone", "tongs", "tongue", "tonic", "tonight", "tonnage", "tons", "tonsil", "tonsillitis", "too", "took", "tool", "toolbar", "toot", "tooth", "toothache", "toothbrush", "toothpaste", "toothpick", "top", "topic", "topical", "topless", "topographer", "topography", "topping", "topple", "torch", "tore", "torment", "tormentor", "torn", "tornado", "torpedo", "torrent", "torrential", "torrid", "torso", "tort", "tortilla", "tortoise", "tortuous", "torture", "torturer", "toss", "tot", "total", "totalitarian", "totalitarianism", "totality", "totally", "tote", "totter", "toucan", "touch", "touchdown", "touched", "touching", "touchstone", "touchy", "tough", "toughen", "toughness", "toupee", "tour", "tourism", "tourist", "tournament", "tourniquet", "tousle", "tout", "tow", "toward", "towards", "towel", "tower", "towering", "town", "townhouse", "township", "toxic", "toxicity", "toxicology", "toxin", "toy", "trace", "tracer", "track", "tract", "traction", "tractor", "trade", "trademark", "trader", "tradition", "traditional", "traditionalist", "traditionally", "traffic", "tragedy", "tragic", "tragically", "trail", "trailblazer", "trailer", "train", "trained", "trainee", "trainer", "training", "trait", "traitor", "trajectory", "tramp", "trample", "trampoline", "trance", "tranquil", "tranquility", "tranquilize", "tranquilizer", "transact", "transaction", "transatlantic", "transcend", "transcendence", "transcendental", "transcontinental", "transcribe", "transcript", "transcription", "transfer", "transferable", "transform", "transformation", "transformer", "transfusion", "transgress", "transgression", "transient", "transistor", "transit", "transition", "transitional", "transitive", "transitory", "translate", "translation", "translator", "translucence", "translucent", "transmission", "transmit", "transmitter", "transparency", "transparent", "transparently", "transpire", "transplant", "transport", "transportation", "transpose", "transsexual", "transvestite", "trap", "trapeze", "trapper", "trappings", "trash", "trashy", "trauma", "traumatic", "traumatize", "travel", "traveler", "travels", "traverse", "travesty", "trawl", "trawler", "tray", "treacherous", "treachery", "tread", "treadmill", "treason", "treasure", "treasurer", "treasury", "treat", "treatable", "treatise", "treatment", "treaty", "treble", "tree", "treetop", "trek", "trellis", "tremble", "tremendous", "tremendously", "tremor", "trench", "trenchant", "trend", "trendy", "trepidation", "trespass", "trespasser", "trestle", "trial", "trials", "triangle", "triangular", "tribal", "tribe", "tribulation", "tribunal", "tributary", "tribute", "triceps", "trick", "trickery", "trickle", "trickster", "tricky", "tricycle", "trident", "trifle", "trifling", "trigger", "trigonometry", "trike", "trill", "trillion", "trilogy", "trim", "trimester", "trimmings", "trinity", "trinket", "trio", "trip", "tripe", "triple", "triplet", "triplicate", "tripod", "trite", "triumph", "triumphant", "triumphantly", "trivia", "trivial", "trivialize", "trod", "trodden", "troll", "trolley", "trombone", "tromp", "troop", "trooper", "troops", "trophy", "tropic", "tropical", "tropics", "trot", "troubadour", "trouble", "troubled", "troublemaker", "troubleshooter", "troubleshooting", "troublesome", "trough", "trounce", "troupe", "trousers", "trout", "truancy", "truant", "truce", "truck", "trucker", "trucking", "truckload", "truculent", "trudge", "true", "truffle", "truism", "truly", "trump", "trumpet", "trumpeter", "truncated", "trundle", "trunk", "trunks", "trust", "trustee", "trustful", "trusting", "trustworthy", "truth", "truthful", "truthfully", "try", "trying", "tryout", "tub", "tuba", "tubby", "tube", "tuberculosis", "tubing", "tubular", "tuck", "tuesday", "tuft", "tufted", "tug", "tugboat", "tuition", "tulip", "tumble", "tumbler", "tummy", "tumor", "tumult", "tumultuous", "tuna", "tundra", "tune", "tuner", "tunic", "tunnel", "turban", "turbine", "turbulence", "turbulent", "turd", "tureen", "turf", "turgid", "turkey", "turmoil",
    "turn", "turnaround", "turncoat", "turnip", "turnout", "turnover", "turnpike", "turnstile", "turntable", "turpentine", "turquoise", "turret", "turtle", "turtleneck", "tush", "tusk", "tussle", "tutor", "tutorial", "tutoring", "tux", "tuxedo", "twang", "tweak", "tweed", "tweet", "tweezers", "twelfth", "twelve", "twentieth", "twenty", "twerp", "twice", "twiddle", "twig", "twilight", "twin", "twine", "twinge", "twinkle", "twirl", "twist", "twisted", "twister", "twit", "twitch", "twitter", "two", "tycoon", "tyke", "tylenol", "type", "typecast", "typeface", "typewriter", "typewritten", "typhoid", "typhoon", "typical", "typically", "typify", "typing", "typist", "typo", "tyrannical", "tyrannize", "tyranny", "tyrant",
    "ubiquitous", "ubiquity", "udder", "ugh", "ugliness", "ugly", "uh", "ulcer", "ulterior", "ultimate", "ultimately", "ultimatum", "ultrasonic", "ultrasound", "ultraviolet", "um", "umbrella", "umpire", "umpteen", "umpteenth", "unabashed", "unabated", "unable", "unabridged", "unacceptable", "unacceptably", "unaccompanied", "unaccountable", "unaccountably", "unadulterated", "unaffected", "unaided", "unanimity", "unanimous", "unanimously", "unarmed", "unassuming", "unattached", "unattended", "unattractive", "unauthorized", "unavailable", "unavoidable", "unavoidably", "unaware", "unawares", "unbalanced", "unbearable", "unbearably", "unbeatable", "unbeaten", "unbelievable", "unbelievably", "unborn", "unbounded", "unbridled", "unbroken", "unbutton", "uncannily", "uncanny", "uncertain", "uncertainly", "uncertainty", "unchanged", "uncharacteristic", "uncharacteristically", "uncharted", "unchecked", "uncle", "unclean", "unclear", "uncomfortable", "uncomfortably", "uncommon", "uncommonly", "uncompromising", "unconcerned", "unconditional", "unconditionally", "unconfirmed", "unconscionable", "unconscious", "unconsciously", "unconsciousness", "unconstitutional", "uncontrollable", "uncontrollably", "uncontrolled", "unconventional", "uncouth", "uncover", "uncut", "undaunted", "undecided", "undeniable", "undeniably", "under", "underage", "underclass", "underclassman", "undercover", "undercurrent", "undercut", "underdog", "underestimate", "undergo", "undergrad", "undergraduate", "underground", "undergrowth", "underhanded", "underline", "underlying", "undermine", "underneath", "undernourished", "underpaid", "underpants", "underpass", "underprivileged", "underrate", "underrated", "underscore", "undershirt", "underside", "understaffed", "understand", "understandable", "understandably", "understanding", "understate", "understated", "understatement", "understood", "understudy", "undertake", "undertaken", "undertaker", "undertaking", "undertone", "undertook", "undertow", "underwater", "underwear", "underweight", "underwent", "underworld", "underwrite", "underwritten", "underwrote", "undesirable", "undetermined", "undeveloped", "undid", "undisclosed", "undisturbed", "undo", "undoing", "undone", "undoubtedly", "undress", "undressed", "undue", "unduly", "undying", "unearth", "unearthly", "unease", "uneasily", "uneasiness", "uneasy", "uneducated", "unemployed", "unemployment", "unending", "unequal", "unequally", "unequivocal", "unerring", "uneven", "unevenly", "unexpected", "unexpectedly", "unfailing", "unfair", "unfairly", "unfairness", "unfaithful", "unfamiliar", "unfashionable", "unfasten", "unfavorable", "unfeeling", "unfit", "unfold", "unforeseen", "unforgettable", "unfortunate", "unfortunately", "unfounded", "unfriendly", "unfurl", "ungainly", "ungrateful", "ungratefully", "unhappily", "unhappiness", "unhappy", "unhealthy", "unholy", "unhook", "unicorn", "unidentified", "unification", "uniform", "uniformed", "uniformity", "uniformly", "unify", "unilateral", "unimportant", "uninhabitable", "uninhibited", "uninsured", "unintelligible", "uninterested", "union", "unionize", "unique", "uniquely", "unisex", "unison", "unit", "unite", "united", "unity", "universal", "universally", "universe", "university", "unjust", "unjustified", "unkempt", "unkind", "unkindly", "unkindness", "unknowingly", "unknown", "unlawful", "unleaded", "unleash", "unless", "unlike", "unlikely", "unlimited", "unlisted", "unload", "unlock", "unlucky", "unmarked", "unmarried", "unmask", "unmistakable", "unmistakably", "unmitigated", "unmoved", "unnatural", "unnaturally", "unnecessarily", "unnecessary", "unnerve", "unnerving", "unnoticed", "unobtrusive", "unoccupied", "unofficial", "unofficially", "unorthodox", "unpack", "unpaid", "unparalleled", "unpleasant", "unplug", "unplugged", "unpopular", "unpopularity", "unprecedented", "unpredictable", "unprepared", "unprincipled", "unprintable", "unproductive", "unprofessional", "unprofitable", "unprotected", "unprovoked", "unqualified", "unquestionable", "unquestionably", "unquestioned", "unravel", "unreal", "unrealistic", "unreasonable", "unreasonably", "unrelenting", "unreliable", "unreserved", "unresponsive", "unrest", "unrestrained", "unrivaled", "unroll", "unruliness", "unruly", "unsafe", "unsanitary", "unsatisfactory", "unsavory", "unscathed", "unscrew", "unscrupulous", "unseasonable", "unseat", "unseemly", "unseen", "unsettled", "unsightly", "unskilled", "unsolicited", "unsophisticated", "unsound", "unspeakable", "unspecified", "unspoken", "unsportsmanlike", "unstable", "unsteady", "unstoppable", "unsuccessful", "unsuccessfully", "unsuitable", "unsung", "unsure", "unsuspecting", "untangle", "untenable", "unthinkable", "unthinking", "unthinkingly", "untie", "until", "untimely", "untiring", "untold", "untouchable", "untoward", "untried", "untrue", "untruthful", "unused", "unusual", "unusually", "unveil", "unwanted", "unwarranted", "unwelcome", "unwieldy", "unwilling", "unwind", "unwise", "unwitting", "unwittingly", "unwound", "unwritten", "unyielding", "unzip", "up", "upbeat", "upbringing", "upchuck", "upcoming", "update", "upend", "upfront", "upgrade", "upheaval", "upheld", "uphill", "uphold", "upholster", "upholstered", "upholstery", "upkeep", "uplifting", "upon", "upper", "uppercase", "upperclassman", "uppermost", "uppity", "upright", "uprising", "uproar", "uproot", "upscale", "upset", "upshot", "upstage", "upstairs", "upstart", "upstate", "upstream", "upsurge", "upswing", "uptake", "uptight", "uptown", "upturn", "upward", "upwards", "uranium", "uranus", "urban", "urbane", "urchin", "urge", "urgency", "urgent", "urgently", "urinate", "urine", "urn", "us", "usage", "use", "used", "useful", "usefully", "usefulness", "useless", "uselessly", "uselessness", "user", "usher", "usual", "usually", "usurp", "utensil", "uteri", "uterus", "utility", "utilization", "utilize", "utmost", "utopia", "utopian", "utter", "utterance", "utterly",
    "vacancy", "vacant", "vacantly", "vacate", "vacation", "vacationer", "vaccinate", "vaccination", "vaccine", "vacillate", "vacuum", "vagina", "vaginal", "vagrant", "vague", "vaguely", "vagueness", "vain", "vainly", "valedictorian", "valentine", "valet", "valiant", "valiantly", "valid", "validate", "validity", "valley", "valor", "valuable", "valuables", "value", "values", "valve", "vampire", "van", "vandal", "vandalism", "vandalize", "vanguard", "vanilla", "vanish", "vanishing", "vanity", "vanquish", "vapor", "vaporize", "variability", "variable", "variance", "variant", "variation", "varied", "variety", "various", "variously", "varnish", "varsity", "vary", "vase", "vasectomy", "vast", "vastly", "vat", "vault", "veal", "veer", "vegan", "vegetable", "vegetarian", "vegetation", "veggie", "veggies", "vehement", "vehemently", "vehicle", "vehicular", "veil", "veiled", "vein", "velcro", "velocity", "velour", "velvet", "velvety", "vendetta", "vendor", "veneer", "venerable", "venerate", "vengeance", "vengeful", "venison", "venom", "venomous", "vent", "ventilate", "ventilation", "ventilator", "ventriloquism", "ventriloquist", "venture", "venue", "venus", "veranda", "verb", "verbal", "verbally", "verbatim", "verbose", "verdict", "verge", "verification", "verify", "veritable", "vermin", "vernacular", "versatile", "versatility", "verse", "version", "versus", "vertebra", "vertebrae", "vertical", "vertically", "vertigo", "verve", "very", "vessel", "vest", "vestibule", "vestige", "vet", "veteran", "veterinarian", "veterinary", "veto", "vex", "via", "viability", "viable", "viaduct", "vial", "vibes", "vibrant", "vibrate", "vibration", "vicarious", "vice", "vicinity", "vicious", "viciously", "victim", "victimization", "victimize", "victor", "victorious", "victory", "video", "videocassette", "videotape", "vie", "view", "viewer", "viewing", "viewpoint", "vigil", "vigilance", "vigilant", "vigilante", "vigor", "vigorous", "vigorously", "vile", "vilify", "villa", "village", "villager", "villain", "villainy", "vindicate", "vindication", "vindictive", "vine", "vinegar", "vineyard", "vintage", "vinyl", "viola", "violate", "violation", "violence", "violent", "violently", "violet", "violin", "violinist", "viper", "viral", "virgin", "virginity", "virgo", "virile", "virility", "virtual", "virtually", "virtue", "virtuoso", "virtuous", "virulent", "virus", "visa", "visage", "viscosity", "viscous", "vise", "visibility", "visible", "visibly", "vision", "visionary", "visit", "visitation", "visitor", "visor", "vista", "visual", "visualize", "visually", "vital", "vitality", "vitally", "vitamin", "vivacious", "vivaciously", "vivacity", "vivid", "vividly", "vivisection", "vocabulary", "vocal", "vocalist", "vocation", "vocational", "vociferous", "vociferously", "vodka", "vogue", "voice", "void", "volatile", "volatility", "volcanic", "volcano", "volition", "volley", "volleyball", "volt", "voltage", "volume", "voluminous", "voluntarily", "voluntary", "volunteer", "voluptuous", "vomit", "voodoo", "voracious", "voracity", "vortex", "vortices", "vote", "voter", "vouch", "voucher", "vow", "vowel", "voyage", "voyager", "voyeur", "voyeurism", "vulgar", "vulgarity", "vulnerability", "vulnerable", "vulture",
    "wacky", "wad", "waddle", "wade", "wafer", "waffle", "waft", "wag", "wage", "wager", "wages", "wagon", "waif", "wail", "waist", "waistband", "waistline", "wait", "waiter", "waitress", "waive", "waiver", "wake", "waken", "walk", "walker", "walkman", "walkout", "wall", "wallet", "wallop", "wallow", "wallpaper", "walnut", "walrus", "waltz", "wan", "wand", "wander", "wanderer", "wane", "wanna", "wannabe", "want", "wanted", "wanting", "wanton", "war", "warble", "ward", "warden", "wardrobe", "ware", "warehouse", "wares", "warfare", "warhead", "warily", "warlike", "warlock", "warlord", "warm", "warmly", "warmonger", "warmongering", "warmth", "warn", "warning", "warp", "warpath", "warped", "warrant", "warranty", "warren", "warring", "warrior", "warship", "wart", "wartime", "wary", "was", "wash", "washable", "washbasin", "washcloth", "washer", "washing", "washout", "washroom", "wasp", "waste", "wastebasket", "wasted", "wasteful", "wasteland", "watch", "watchdog", "watchful", "watchmaker", "watchman", "watchword", "water", "waterbed", "watercolor", "watercolors", "waterfall", "waterfront", "waterlogged", "watermark", "watermelon", "waterproof", "waters", "watershed", "watertight", "waterway", "waterworks", "watery", "watt", "wave", "wavelength", "waver", "wavy", "wax", "waxiness", "waxy", "way", "waylay", "ways", "wayside", "wayward", "we", "weak", "weaken", "weakling", "weakly", "weakness", "wealth", "wealthy", "wean", "weapon", "weaponry", "wear", "wearily", "weariness", "wearisome", "weary", "weasel", "weather", "weave", "web", "website", "wed", "wedding", "wedge", "wedlock", "wednesday", "wee", "weed", "week", "weekday", "weekend", "weekly", "weeknight", "weep", "weigh", "weight", "weightless", "weightlessness", "weightlifter", "weightlifting", "weighty", "weird", "weirdo", "welcome", "weld", "welder", "welfare", "well", "welsh", "welt", "welter", "went", "wept", "were", "werewolf", "werewolves", "west", "westbound", "westerly", "western", "westerner", "westernize", "westward", "westwards", "wet", "wetback", "whack", "whale", "whaler", "whaling", "wham", "wharf", "wharves", "what", "whatchamacallit", "whatever", "whatsoever", "wheat", "wheel", "wheelbarrow", "wheelchair", "wheels", "wheeze", "when", "whenever", "where", "whereabouts", "whereas", "whereby", "wherein", "whereupon", "wherever", "wherewithal", "whet", "whether", "whew", "which", "whichever", "whiff", "while", "whim", "whimper", "whimsical", "whine", "whiner", "whinny", "whip", "whiplash", "whipping", "whir", "whirl", "whirlpool", "whirlwind", "whisk", "whisker", "whiskers", "whiskey", "whisper", "whistle", "white", "whiten", "whitewash", "whittle", "whiz", "who", "whoa", "whodunit", "whoever", "whole", "wholehearted", "wholeheartedly", "wholesale", "wholesome", "wholly", "whom", "whoop", "whoops", "whoosh", "whopper", "whore", "whose", "why", "wick", "wicked", "wickedly", "wickedness", "wicker", "wicket", "wide", "widely", "widen", "widespread", "widow", "widowed", "widower", "width", "wield", "wiener", "wife", "wig", "wiggle", "wigwam", "wild", "wilderness", "wildlife", "wildly", "wiles", "will", "willful", "willfully", "willing", "willingly", "willingness", "willow", "willowy", "willpower", "wilt", "wily", "wimp", "wimpy", "win", "wince", "winch", "wind", "windbreaker", "winded", "windfall", "winding", "windmill", "window", "windowpane", "windowsill", "windpipe", "windshield", "windsurf", "windsurfing", "windswept", "windy", "wine", "wineglass", "wing", "winged", "wings", "wingspan", "wingtip", "wink", "winner", "winning", "winnings", "wino", "winsome", "winter", "wintertime", "wintry", "wipe", "wiper", "wire", "wired", "wiretap", "wiring", "wiry", "wisdom", "wise", "wisecrack", "wisely", "wish", "wishbone", "wishes", "wisp", "wispy", "wistful", "wistfully", "wit", "witch", "witchcraft", "with", "withdraw", "withdrawal", "withdrawn", "withdrew", "wither", "withheld", "withhold", "withholding", "within", "without", "withstand", "withstood", "witness", "wits", "witticism", "witty", "wives", "wizard", "wizened", "wobble", "wobbly", "woe", "woebegone", "woes", "wok", "woke", "woken", "wolf", "wolves", "woman", "womanhood", "womankind", "womb", "women", "won", "wonder", "wonderful", "wonderfully", "wont", "woo", "wood", "woodchuck", "wooded", "wooden", "woodland", "woodpecker", "woods", "woodwind", "woodwork", "woody", "woof", "wool", "woolen", "woolens", "wooly", "woozy", "word", "wording", "wordy", "wore", "work", "workable", "workaholic", "workbench", "workbook", "worker", "workfare", "workforce", "working", "workings", "workload", "workman", "workmanlike", "workmanship", "workout", "works", "worksheet", "workshop", "workstation", "world", "worldly", "worldwide", "worm", "worms", "worn", "worried", "worry", "worrying", "worse", "worsen", "worship", "worshiper", "worst", "worth", "worthless", "worthwhile", "worthy", "would", "wound", "wounded", "wove", "woven", "wow", "wrangle", "wrangler", "wrap", "wrapper", "wrapping", "wrath", "wreak", "wreath", "wreck", "wreckage", "wren", "wrench", "wrest", "wrestle", "wrestler", "wrestling", "wretch", "wretched", "wriggle", "wring", "wringer", "wrinkle", "wrinkled", "wrist", "wristwatch", "writ", "write", "writer", "writhe", "writing", "written", "wrong", "wrongdoer", "wrongdoing", "wrongful", "wrongfully", "wrongly", "wrote", "wrought", "wrung", "wry", "wryly",
    "xenophobia", "xenophobic", "xerox", "xmas", "xylophone",
    "yacht", "yak", "yam", "yank", "yankee", "yap", "yard", "yardstick", "yarmulke", "yarn", "yawn", "yeah", "year", "yearbook", "yearling", "yearly", "yearn", "yearning", "years", "yeast", "yell", "yellow", "yellowish", "yelp", "yen", "yep", "yes", "yesterday", "yet", "yiddish", "yield", "yippee", "yo", "yodel", "yoga", "yogurt", "yoke", "yokel", "yolk", "yonder", "you", "young", "youngster", "your", "yours", "yourself", "yourselves", "youth", "youthful", "yuck", "yucky", "yuletide", "yum", "yummy", "yuppie",
    "zany", "zap", "zeal", "zealous", "zealously", "zebra", "zero", "zest", "zigzag", "zillion", "zinc", "zip", "zipper", "zit", "zodiac", "zombie", "zone", "zoo", "zoological", "zoologist", "zoology", "zoom", "zucchini"
];


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.3.3
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Vue = factory());
}(this, (function () { 'use strict';

/*  */

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}
/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return typeof value === 'string' || typeof value === 'number'
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

var _toString = Object.prototype.toString;

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 */
function noop () {}

/**
 * Always return false.
 */
var no = function () { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      return JSON.stringify(a) === JSON.stringify(b)
    } catch (e) {
      // possible circular reference
      return a === b
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

var warn = noop;
var tip = noop;
var formatComponentName = (null); // work around flow check

{
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.error("[Vue warn]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var name = typeof vm === 'string'
      ? vm
      : typeof vm === 'function' && vm.options
        ? vm.options.name
        : vm._isVue
          ? vm.$options.name || vm.$options._componentTag
          : vm.name;

    var file = vm._isVue && vm.$options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  var generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

function handleError (err, vm, info) {
  if (config.errorHandler) {
    config.errorHandler.call(null, err, vm, info);
  } else {
    {
      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    }
    /* istanbul ignore else */
    if (inBrowser && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }
}

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    } )); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function (err) { console.error(err); };
    timerFunc = function () {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  } else if (typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve, reject) {
        _resolve = resolve;
      })
    }
  }
})();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var arguments$1 = arguments;

    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments$1[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true,
  isSettingProps: false
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && typeof key === 'number') {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (hasOwn(target, key)) {
    target[key] = val;
    return val
  }
  var ob = (target ).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && typeof key === 'number') {
    target.splice(key, 1);
    return
  }
  var ob = (target ).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        childVal.call(this),
        parentVal.call(this)
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal
    ? extend(res, childVal)
    : res
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent
      ? parent.concat(child)
      : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.computed = function (parentVal, childVal) {
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret
};

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      'Invalid prop: type check failed for prop "' + name + '".' +
      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    valid = typeof value === expectedType.toLowerCase();
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

var mark;
var measure;

{
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

{
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      "referenced during render. Make sure to declare reactive data " +
      "properties in the data option.",
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
};

var prototypeAccessors = { child: {} };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function () {
  var node = new VNode();
  node.text = '';
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.isCloned = true;
  return cloned
}

function cloneVNodes (vnodes) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      for (var i = 0; i < fns.length; i++) {
        fns[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    last = res[res.length - 1];
    //  nested
    if (Array.isArray(c)) {
      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        (last).text += String(c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[res.length - 1] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                "timeout (" + (res.timeout) + "ms)"
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && isDef(c.componentOptions)) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once$$1) {
  if (once$$1) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        this$1.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        cbs[i].apply(vm, args);
      }
    }
    return vm
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  var defaultSlot = [];
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
      child.data && child.data.slot != null
    ) {
      var name = child.data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore whitespace
  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }
  return slots
}

function isWhitespace (node) {
  return node.isComment || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // remove reference to DOM nodes (prevents leak)
    vm.$options._parentElm = vm.$options._refElm = null;
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure((name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure((name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render
  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    {
      observerState.isSettingProps = true;
    }
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    {
      observerState.isSettingProps = false;
    }
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdateHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdateHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = expOrFn.toString();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  if (this.user) {
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    }
  } else {
    value = this.getter.call(vm, vm);
  }
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value);
  }
  popTarget();
  this.cleanupDeps();
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch) { initWatch(vm, opts.watch); }
}

var isReservedProp = {
  key: 1,
  ref: 1,
  slot: 1
};

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      if (isReservedProp[key] || config.isReservedAttr(key)) {
        warn(
          ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (vm.$parent && !observerState.isSettingProps) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var i = keys.length;
  while (i--) {
    if (props && hasOwn(props, keys[i])) {
      "development" !== 'production' && warn(
        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(keys[i])) {
      proxy(vm, "_data", keys[i]);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  var watchers = vm._computedWatchers = Object.create(null);

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    {
      if (getter === undefined) {
        warn(
          ("No getter function has been defined for computed property \"" + key + "\"."),
          vm
        );
        getter = noop;
      }
    }
    // create internal watcher for the computed property.
    watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions);

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (target, key, userDef) {
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(key);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    {
      if (methods[key] == null) {
        warn(
          "method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
    }
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (vm, key, handler) {
  var options;
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  vm.$watch(key, handler, options);
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      }
    });
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    // isArray here
    var isArray = Array.isArray(inject);
    var result = Object.create(null);
    var keys = isArray
      ? inject
      : hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = isArray ? key : inject[key];
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
    }
    return result
  }
}

/*  */

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  context,
  children
) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || {});
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var _context = Object.create(context);
  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
  var vnode = Ctor.options.render.call(null, h, {
    data: data,
    props: props,
    children: children,
    parent: context,
    listeners: data.on || {},
    injections: resolveInject(Ctor.options.inject, context),
    slots: function () { return resolveSlots(children, context); }
  });
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    vnode.functionalOptions = Ctor.options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  if (isUndef(Ctor.cid)) {
    Ctor = resolveAsyncComponent(Ctor, baseCtor, context);
    if (Ctor === undefined) {
      // return nothing if this is indeed an async component
      // wait for the callback to trigger parent update.
      return
    }
  }

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  data = data || {};

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners
    data = {};
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
  );
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    return
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && isUndef(child.ns)) {
        applyNS(child, ns);
      }
    }
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      extend(props, bindObject);
    }
    return scopedSlotFn(props) || fallback
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && "development" !== 'production') {
      slotNodes._rendered && warn(
        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
        "- this will likely cause render errors.",
        this
      );
      slotNodes._rendered = true;
    }
    return slotNodes || fallback
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (Array.isArray(keyCodes)) {
    return keyCodes.indexOf(eventKeyCode) === -1
  } else {
    return keyCodes !== eventKeyCode
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      for (var key in value) {
        if (key === 'class' || key === 'style') {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];
        }
      }
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var tree = this._staticTrees[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = this._staticTrees[index] =
    this.$options.staticRenderFns[index].call(this._renderProxy);
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  var parentVnode = vm.$vnode = vm.$options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };
}

function renderMixin (Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render function");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      {
        vnode = vm.$options.renderError
          ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e)
          : vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };

  // internal render helpers.
  // these are exposed on the instance prototype to reduce generated render
  // code size.
  Vue.prototype._o = markOnce;
  Vue.prototype._n = toNumber;
  Vue.prototype._s = toString;
  Vue.prototype._l = renderList;
  Vue.prototype._t = renderSlot;
  Vue.prototype._q = looseEqual;
  Vue.prototype._i = looseIndexOf;
  Vue.prototype._m = renderStatic;
  Vue.prototype._f = resolveFilter;
  Vue.prototype._k = checkKeyCodes;
  Vue.prototype._b = bindObjectProps;
  Vue.prototype._v = createTextVNode;
  Vue.prototype._e = createEmptyVNode;
  Vue.prototype._u = resolveScopedSlots;
}

/*  */

var uid$1 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$1++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-init:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      initProxy(vm);
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(((vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue$3)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    /* istanbul ignore if */
    if (plugin.installed) {
      return this
    }
    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    plugin.installed = true;
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

var patternTypes = [String, RegExp];

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (cache, current, filter) {
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        if (cachedNode !== current) {
          pruneCacheEntry(cachedNode);
        }
        cache[key] = null;
      }
    }
  }
}

function pruneCacheEntry (vnode) {
  if (vnode) {
    vnode.componentInstance.$destroy();
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes
  },

  created: function created () {
    this.cache = Object.create(null);
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache[key]);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this.cache, this._vnode, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this.cache, this._vnode, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode.ssrContext
  }
});

Vue$3.version = '2.3.3';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return genClassFromData(data)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function genClassFromData (data) {
  var dynamicClass = data.class;
  var staticClass = data.staticClass;
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (isUndef(value)) {
    return ''
  }
  if (typeof value === 'string') {
    return value
  }
  var res = '';
  if (Array.isArray(value)) {
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (isDef(value[i])) {
        if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
          res += stringified + ' ';
        }
      }
    }
    return res.slice(0, -1)
  }
  if (isObject(value)) {
    for (var key in value) {
      if (value[key]) { res += key + ' '; }
    }
    return res.slice(0, -1)
  }
  /* istanbul ignore next */
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
        refs[key].push(ref);
      } else {
        refs[key] = [ref];
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key &&
    a.tag === b.tag &&
    a.isComment === b.isComment &&
    isDef(a.data) === isDef(b.data) &&
    sameInputType(a, b)
  )
}

// Some browsers do not support dynamically changing type for <input>
// so they need to be treated as different nodes
function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      {
        if (data && data.pre) {
          inPre++;
        }
        if (
          !inPre &&
          !vnode.ns &&
          !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        inPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref) {
    if (isDef(parent)) {
      if (isDef(ref)) {
        if (ref.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    var ancestor = vnode;
    while (ancestor) {
      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
      ancestor = ancestor.parent;
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if ("development" !== 'production' && !elmToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }
    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.elm = oldVnode.elm;
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }
    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }
    var elm = vnode.elm = oldVnode.elm;
    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;
          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
              childrenMatch = false;
              break
            }
            childNode = childNode.nextSibling;
          }
          // if childNode is not null, it means the actual childNodes list is
          // longer than the virtual children list.
          if (!childrenMatch || childNode) {
            if ("development" !== 'production' &&
              typeof console !== 'undefined' &&
              !bailed
            ) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
            }
            return false
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (isDef(vnode.tag)) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  /* istanbul ignore if */
  if (isIE9 && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, key);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers && modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }
  // check capture modifier
  if (modifiers && modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers && modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers && modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }
  var events;
  if (modifiers && modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }
  var newHandler = { value: value, modifiers: modifiers };
  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

function getAndRemoveAttr (el, name) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var modelRs = parseModel(value);
  if (modelRs.idx === null) {
    return (value + "=" + assignment)
  } else {
    return "var $$exp = " + (modelRs.exp) + ", $$idx = " + (modelRs.idx) + ";" +
      "if (!Array.isArray($$exp)){" +
        value + "=" + assignment + "}" +
      "else{$$exp.splice($$idx, 1, " + assignment + ")}"
  }
}

/**
 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
 *
 * for loop possible cases:
 *
 * - test
 * - test[idx]
 * - test[test1[idx]]
 * - test["a"][idx]
 * - xxx.test[a[a].test1[idx]]
 * - test.xxx.a["asa"][test1[idx]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;

function parseModel (val) {
  str = val;
  len = str.length;
  index$1 = expressionPos = expressionEndPos = 0;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    return {
      exp: val,
      idx: null
    }
  }

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.substring(0, expressionPos),
    idx: val.substring(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  {
    var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (tag === 'input' && dynamicType) {
      warn$1(
        "<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" +
        "v-model does not support dynamic input types. Use v-if branches instead."
      );
    }
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
  );
  addHandler(el, CHECKBOX_RADIO_TOKEN,
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$c){$$i<0&&(" + value + "=$$a.concat($$v))}" +
      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, CHECKBOX_RADIO_TOKEN, genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;
  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number || type === 'number') {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  var event;
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    // Chrome fires microtasks in between click/change, leads to #4521
    event = isChrome ? 'click' : 'change';
    on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  if (once$$1) {
    var oldHandler = handler;
    var _target = target$1; // save current target element in closure
    handler = function (ev) {
      var res = arguments.length === 1
        ? oldHandler(ev)
        : oldHandler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, handler, capture, _target);
      }
    };
  }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(event, handler, capture);
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, vnode, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (
  elm,
  vnode,
  checkVal
) {
  return (!elm.composing && (
    vnode.tag === 'option' ||
    isDirty(elm, checkVal) ||
    isInputChanged(elm, checkVal)
  ))
}

function isDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is not equal to the updated value
  return document.activeElement !== elm && elm.value !== checkVal
}

function isInputChanged (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if ((isDef(modifiers) && modifiers.number) || elm.type === 'number') {
    return toNumber(value) !== toNumber(newVal)
  }
  if (isDef(modifiers) && modifiers.trim) {
    return value.trim() !== newVal.trim()
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var prefixes = ['Webkit', 'Moz', 'ms'];

var testEl;
var normalize = cached(function (prop) {
  testEl = testEl || document.createElement('div');
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in testEl.style)) {
    return prop
  }
  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < prefixes.length; i++) {
    var prefixed = prefixes[i] + upper;
    if (prefixed in testEl.style) {
      return prefixed
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likley wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    el.setAttribute('class', cur.trim());
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser && window.requestAnimationFrame
  ? window.requestAnimationFrame.bind(window)
  : setTimeout;

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
  addClass(el, cls);
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model$1 = {
  inserted: function inserted (el, binding, vnode) {
    if (vnode.tag === 'select') {
      var cb = function () {
        setSelected(el, binding, vnode.context);
      };
      cb();
      /* istanbul ignore if */
      if (isIE || isEdge) {
        setTimeout(cb, 0);
      }
    } else if (vnode.tag === 'textarea' || el.type === 'text' || el.type === 'password') {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var needReset = el.multiple
        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
        : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
      if (needReset) {
        trigger(el, 'change');
      }
    }
  }
};

function setSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  for (var i = 0, l = options.length; i < l; i++) {
    if (looseEqual(getValue(options[i]), value)) {
      return false
    }
  }
  return true
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition && !isIE9) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    if (transition && !isIE9) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model$1,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag; });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild && (oldChild.data.transition = extend({}, data));
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    var body = document.body;
    var f = body.offsetHeight; // eslint-disable-line

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      if (this._hasMove != null) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if ("development" !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if ("development" !== 'production' &&
    config.productionTip !== false &&
    inBrowser && typeof console !== 'undefined'
  ) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

// check whether current browser encodes a char inside attribute values
function shouldDecode (content, encoded) {
  var div = document.createElement('div');
  div.innerHTML = "<div a=\"" + content + "\">";
  return div.innerHTML.indexOf(encoded) > 0
}

// #3663
// IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/*  */

var decoder;

function decode (html) {
  decoder = decoder || document.createElement('div');
  decoder.innerHTML = html;
  return decoder.textContent
}

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var singleAttrIdentifier = /([^\s"'<>/=]+)/;
var singleAttrAssign = /(?:=)/;
var singleAttrValues = [
  // attr value double quotes
  /"([^"]*)"+/.source,
  // attr value, single quotes
  /'([^']*)'+/.source,
  // attr value, no quotes
  /([^\s"'=<>`]+)/.source
];
var attribute = new RegExp(
  '^\\s*' + singleAttrIdentifier.source +
  '(?:\\s*(' + singleAttrAssign.source + ')' +
  '\\s*(?:' + singleAttrValues.join('|') + '))?'
);

// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
var startTagOpen = new RegExp('^<' + qnameCapture);
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10);/g;

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          continue
        }
      }

      var text = (void 0), rest$1 = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest$1 = html.slice(textEnd);
        while (
          !endTag.test(rest$1) &&
          !startTagOpen.test(rest$1) &&
          !comment.test(rest$1) &&
          !conditionalComment.test(rest$1)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest$1.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest$1 = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var endTagLength = 0;
      var rest = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!--([\s\S]*?)-->/g, '$1')
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest.length;
      html = rest;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      attrs[i] = {
        name: args[1],
        value: decodeAttr(
          value,
          options.shouldDecodeNewlines
        )
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});

function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push(JSON.stringify(text.slice(lastIndex)));
  }
  return tokens.join('+')
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;
  platformGetTagNamespace = options.getTagNamespace || no;
  platformMustUseProp = options.mustUseProp || no;
  platformIsPreTag = options.isPreTag || no;
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  transforms = pluckModuleFunction(options.modules, 'transformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function endPre (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = {
        type: 1,
        tag: tag,
        attrsList: attrs,
        attrsMap: makeAttrsMap(attrs),
        parent: currentParent,
        children: []
      };
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        preTransforms[i](element, options);
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else {
        processFor(element);
        processIf(element);
        processOnce(element);
        processKey(element);

        // determine whether this is a plain element after
        // removing structural attributes
        element.plain = !element.key && !attrs.length;

        processRef(element);
        processSlot(element);
        processComponent(element);
        for (var i$1 = 0; i$1 < transforms.length; i$1++) {
          transforms[i$1](element, options);
        }
        processAttrs(element);
      }

      function checkRootConstraints (el) {
        {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        endPre(element);
      }
      // apply post-transforms
      for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
        postTransforms[i$2](element, options);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      endPre(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var expression;
        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: expression,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) {
      "development" !== 'production' && warn$2(
        ("Invalid v-for expression: " + exp)
      );
      return
    }
    el.for = inMatch[2].trim();
    var alias = inMatch[1].trim();
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      el.alias = iteratorMatch[1].trim();
      el.iterator1 = iteratorMatch[2].trim();
      if (iteratorMatch[3]) {
        el.iterator2 = iteratorMatch[3].trim();
      }
    } else {
      el.alias = alias;
    }
  }
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    }
    if (el.tag === 'template') {
      el.slotScope = getAndRemoveAttr(el, 'scope');
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || platformMustUseProp(el.tag, el.attrsMap.type, name)) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      {
        var expression = parseText(value, delimiters);
        if (expression) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      walkThroughConditionsBlocks(node.ifConditions, isInFor);
    }
  }
}

function walkThroughConditionsBlocks (conditionBlocks, isInFor) {
  for (var i = 1, len = conditionBlocks.length; i < len; i++) {
    markStaticRoots(conditionBlocks[i].block, isInFor);
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    var handler = events[name];
    // #5330: warn click.right, since right clicks do not actually fire click events.
    if ("development" !== 'production' &&
      name === 'click' &&
      handler && handler.modifiers && handler.modifiers.right
    ) {
      warn(
        "Use \"contextmenu\" instead of \"click.right\" since right clicks " +
        "do not actually fire \"click\" events."
      );
    }
    res += "\"" + name + "\":" + (genHandler(name, handler)) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    return isMethodPath || isFunctionExpression
      ? handler.value
      : ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? handler.value + '($event)'
      : isFunctionExpression
        ? ("(" + (handler.value) + ")($event)")
        : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var alias = keyCodes[key];
  return ("_k($event.keyCode," + (JSON.stringify(key)) + (alias ? ',' + JSON.stringify(alias) : '') + ")")
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + (dir.modifiers && dir.modifiers.prop ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  bind: bind$1,
  cloak: noop
};

/*  */

// configurable state
var warn$3;
var transforms$1;
var dataGenFns;
var platformDirectives$1;
var isPlatformReservedTag$1;
var staticRenderFns;
var onceCount;
var currentOptions;

function generate (
  ast,
  options
) {
  // save previous staticRenderFns so generate calls can be nested
  var prevStaticRenderFns = staticRenderFns;
  var currentStaticRenderFns = staticRenderFns = [];
  var prevOnceCount = onceCount;
  onceCount = 0;
  currentOptions = options;
  warn$3 = options.warn || baseWarn;
  transforms$1 = pluckModuleFunction(options.modules, 'transformCode');
  dataGenFns = pluckModuleFunction(options.modules, 'genData');
  platformDirectives$1 = options.directives || {};
  isPlatformReservedTag$1 = options.isReservedTag || no;
  var code = ast ? genElement(ast) : '_c("div")';
  staticRenderFns = prevStaticRenderFns;
  onceCount = prevOnceCount;
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: currentStaticRenderFns
  }
}

function genElement (el) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el)
  } else if (el.for && !el.forProcessed) {
    return genFor(el)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el);
    } else {
      var data = el.plain ? undefined : genData(el);

      var children = el.inlineTemplate ? null : genChildren(el, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < transforms$1.length; i++) {
      code = transforms$1[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el) {
  el.staticProcessed = true;
  staticRenderFns.push(("with(this){return " + (genElement(el)) + "}"));
  return ("_m(" + (staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && warn$3(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el)
    }
    return ("_o(" + (genElement(el)) + "," + (onceCount++) + (key ? ("," + key) : "") + ")")
  } else {
    return genStatic(el)
  }
}

function genIf (el) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice())
}

function genIfConditions (conditions) {
  if (!conditions.length) {
    return '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return el.once ? genOnce(el) : genElement(el)
  }
}

function genFor (el) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (
    "development" !== 'production' &&
    maybeComponent(el) && el.tag !== 'slot' && el.tag !== 'template' && !el.key
  ) {
    warn$3(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genElement(el)) +
    '})'
}

function genData (el) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < dataGenFns.length; i++) {
    data += dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, warn$3)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, warn$3)) + ",";
  }
  // slot target
  if (el.slotTarget) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  return data
}

function genDirectives (el) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = platformDirectives$1[dir.name] || baseDirectives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, warn$3);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length > 1 || ast.type !== 1
  )) {
    warn$3('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, currentOptions);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (slots) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) { return genScopedSlot(key, slots[key]); }).join(',')) + "])")
}

function genScopedSlot (key, el) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el)
  }
  return "{key:" + key + ",fn:function(" + (String(el.attrsMap.scope)) + "){" +
    "return " + (el.tag === 'template'
      ? genChildren(el) || 'void 0'
      : genElement(el)) + "}}"
}

function genForScopedSlot (key, el) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el)) +
    '})'
}

function genChildren (el, checkSkip) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return genElement(el$1)
    }
    var normalizationType = checkSkip ? getNormalizationType(children) : 0;
    return ("[" + (children.map(genNode).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (children) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function maybeComponent (el) {
  return !isPlatformReservedTag$1(el.tag)
}

function genNode (node) {
  if (node.type === 1) {
    return genElement(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genSlot (el) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (componentName, el) {
  var children = el.inlineTemplate ? null : genChildren(el, true);
  return ("_c(" + componentName + "," + (genData(el)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// check valid identifier for v-for
var identRE = /[A-Za-z_$][\w$]*/;

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (ident, type, text, errors) {
  if (typeof ident === 'string' && !identRE.test(ident)) {
    errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
      );
    } else {
      errors.push(("invalid expression: " + (text.trim())));
    }
  }
}

/*  */

function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  optimize(ast, options);
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
}

function makeFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompiler (baseOptions) {
  var functionCompileCache = Object.create(null);

  function compile (
    template,
    options
  ) {
    var finalOptions = Object.create(baseOptions);
    var errors = [];
    var tips = [];
    finalOptions.warn = function (msg, tip$$1) {
      (tip$$1 ? tips : errors).push(msg);
    };

    if (options) {
      // merge custom modules
      if (options.modules) {
        finalOptions.modules = (baseOptions.modules || []).concat(options.modules);
      }
      // merge custom directives
      if (options.directives) {
        finalOptions.directives = extend(
          Object.create(baseOptions.directives),
          options.directives
        );
      }
      // copy other options
      for (var key in options) {
        if (key !== 'modules' && key !== 'directives') {
          finalOptions[key] = options[key];
        }
      }
    }

    var compiled = baseCompile(template, finalOptions);
    {
      errors.push.apply(errors, detectErrors(compiled.ast));
    }
    compiled.errors = errors;
    compiled.tips = tips;
    return compiled
  }

  function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = options || {};

    /* istanbul ignore if */
    {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (functionCompileCache[key]) {
      return functionCompileCache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    {
      if (compiled.errors && compiled.errors.length) {
        warn(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = makeFunction(compiled.render, fnGenErrors);
    var l = compiled.staticRenderFns.length;
    res.staticRenderFns = new Array(l);
    for (var i = 0; i < l; i++) {
      res.staticRenderFns[i] = makeFunction(compiled.staticRenderFns[i], fnGenErrors);
    }

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (functionCompileCache[key] = res)
  }

  return {
    compile: compile,
    compileToFunctions: compileToFunctions
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var expression = parseText(staticClass, options.delimiters);
    if (expression) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData$1
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    {
      var expression = parseText(staticStyle, options.delimiters);
      if (expression) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$2 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$2
};

var modules$1 = [
  klass$1,
  style$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue$3.prototype.$mount;
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        delimiters: options.delimiters
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(((this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue$3.compile = compileToFunctions;

return Vue$3;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__word__ = __webpack_require__(0);


var App = (function () {
    function App() {
        this._wordList = __WEBPACK_IMPORTED_MODULE_1__word__["a" /* allWordList */];
        this._cellSize = 4;
        this._cellData = "ABCD,EFGH,IJKL,MNOP";
        this._wordsLength = 0;
    }
    App.prototype.getData = function () {
        return {
            cellSize: this._cellSize.toString(),
            cellData: this._cellData,
            cells: this.getCells(),
            wordsLength: this._wordsLength.toString(),
            words: [],
        };
    };
    App.prototype.updateSize = function (data) {
        var size = parseInt(data.cellSize);
        if (isNaN(size) || size <= 0) {
            data.cellSize = this._cellSize.toString();
            return;
        }
        this.setCellSize(size);
        data.cellData = this._cellData;
        data.cells = this.getCells();
    };
    App.prototype.updateCells = function (data) {
        var _this = this;
        var arr = data.cellData.split(",");
        if (arr.length !== this._cellSize || arr.some(function (x) { return x.length !== _this._cellSize; })) {
            data.cellData = this._cellData;
            return;
        }
        this._cellData = data.cellData;
        data.cells = this.getCells();
    };
    App.prototype.updateWords = function (data) {
        data.words = this.findWords(data.wordsLength);
    };
    App.prototype.setCellSize = function (size) {
        this._cellSize = size;
        var l = size * size;
        var arr = new Array(size);
        var counter = 0;
        for (var y = 0; y < size; y++) {
            arr[y] = "";
            for (var x = 0; x < size; x++) {
                arr[y] += String.fromCharCode(65 + counter);
                counter++;
                if (counter === 26) {
                    counter = 0;
                }
            }
        }
        this._cellData = arr.join(",");
    };
    App.prototype.getCells = function () {
        return this._cellData.split(",").map(function (x) { return x.split(""); });
    };
    App.prototype.findWords = function (length) {
        var num = parseInt(length);
        if (isNaN(num)) {
            return [];
        }
        this._wordsLength = num;
        if (num <= 0) {
            return [];
        }
        var cells = this._cellData.split(",");
        var m = new Array(this._cellSize);
        for (var i = 0; i < m.length; i++) {
            m[i] = new Array(this._cellSize).fill(false);
        }
        var words = new Array(this._cellSize * this._cellSize);
        for (var y = 0; y < this._cellSize; y++) {
            for (var x = 0; x < this._cellSize; x++) {
                var i = y * this._cellSize + x;
                words[i] = this.searchRecc(cells, m, [], num, x, y);
            }
        }
        return words.reduce(function (prev, curr) { return prev.concat(curr); });
    };
    App.prototype.someStartWith = function (prefix) {
        var lowerPrefix = prefix.toLowerCase();
        for (var i = 0; i < this._wordList.length; i++) {
            if (this._wordList[i].startsWith(lowerPrefix)) {
                return true;
            }
        }
        return false;
    };
    App.prototype.contains = function (word) {
        var lower = word.toLowerCase();
        for (var i = 0; i < this._wordList.length; i++) {
            if (this._wordList[i] === lower) {
                return true;
            }
        }
        return false;
    };
    App.prototype.searchRecc = function (cells, m, v, l, x, y) {
        v.push(cells[y].charAt(x));
        var w = v.join("");
        var r = [];
        l--;
        if (l === 0 && this.contains(w)) {
            r = [w];
        }
        else if (l > 0 && this.someStartWith(w)) {
            m[y][x] = true;
            for (var dy = -1; dy <= 1; dy++) {
                for (var dx = -1; dx <= 1; dx++) {
                    if (dx === 0 && dy === 0) {
                        continue;
                    }
                    var x2 = x + dx;
                    var y2 = y + dy;
                    if (this.inside(x2, y2) && !m[y2][x2]) {
                        r = r.concat(this.searchRecc(cells, m, v, l, x2, y2));
                    }
                }
            }
            m[y][x] = false;
        }
        v.pop();
        return r;
    };
    App.prototype.inside = function (x, y) {
        return (0 <= x && x < this._cellSize && 0 <= y && y < this._cellSize);
    };
    return App;
}());
document.addEventListener("DOMContentLoaded", function () {
    var app = new App();
    var options = {
        el: "#container",
        data: app.getData(),
        methods: {
            updateSize: function () { return app.updateSize(options.data); },
            updateCells: function () { return app.updateCells(options.data); },
            findWords: function () { return app.updateWords(options.data); },
        },
    };
    new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(options);
});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);