let i18nLanguages = {
  asTable: [
    ["ENGLISH",             "en", "eng", null],
    ["DANISH",              "da", "dan", null],
    ["DUTCH",               "nl", "dut", null],
    ["FINNISH",             "fi", "fin", null],
    ["FRENCH",              "fr", "fre", null],
    ["GERMAN",              "de", "ger", null],
    ["HEBREW",              "he", "heb", null],
    ["ITALIAN",             "it", "ita", null],
    ["Japanese",            "ja", "jpn", null],
    ["Korean",              "ko", "kor", null],
    ["NORWEGIAN",           "nb", "nor", null],
    ["POLISH",              "pl", "pol", null],
    ["PORTUGUESE",          "pt", "por", null],
    ["RUSSIAN",             "ru", "rus", null],
    ["SPANISH",             "es", "spa", null],
    ["SWEDISH",             "sv", "swe", null],
    ["Chinese",             "zh", "chi", "zh-CN"],
    ["CZECH",               "cs", "cze", null],
    ["GREEK",               "el", "gre", null],
    ["ICELANDIC",           "is", "ice", null],
    ["LATVIAN",             "lv", "lav", null],
    ["LITHUANIAN",          "lt", "lit", null],
    ["ROMANIAN",            "ro", "rum", null],
    ["HUNGARIAN",           "hu", "hun", null],
    ["ESTONIAN",            "et", "est", null],
    ["TG_UNKNOWN_LANGUAGE", null, null, "ut"],
    ["Unknown",             null, null, "un"],
    ["BULGARIAN",           "bg", "bul", null],
    ["CROATIAN",            "hr", "scr", null],
    ["SERBIAN",             "sr", "scc", null],
    ["IRISH",               "ga", "gle", null],
    ["GALICIAN",            "gl", "glg", null],
    // Impossible to tell Tagalog from Filipino at the moment.
    // Use ISO 639-2 code for Filipino here.
    ["TAGALOG",             null, "fil", null],
    ["TURKISH",             "tr", "tur", null],
    ["UKRAINIAN",           "uk", "ukr", null],
    ["HINDI",               "hi", "hin", null],
    ["MACEDONIAN",          "mk", "mac", null],
    ["BENGALI",             "bn", "ben", null],
    ["INDONESIAN",          "id", "ind", null],
    ["LATIN",               "la", "lat", null],
    ["MALAY",               "ms", "may", null],
    ["MALAYALAM",           "ml", "mal", null],
    ["WELSH",               "cy", "wel", null],
    ["NEPALI",              "ne", "nep", null],
    ["TELUGU",              "te", "tel", null],
    ["ALBANIAN",            "sq", "alb", null],
    ["TAMIL",               "ta", "tam", null],
    ["BELARUSIAN",          "be", "bel", null],
    ["JAVANESE",            "jw", "jav", null],
    ["OCCITAN",             "oc", "oci", null],
    ["URDU",                "ur", "urd", null],
    ["BIHARI",              "bh", "bih", null],
    ["GUJARATI",            "gu", "guj", null],
    ["THAI",                "th", "tha", null],
    ["ARABIC",              "ar", "ara", null],
    ["CATALAN",             "ca", "cat", null],
    ["ESPERANTO",           "eo", "epo", null],
    ["BASQUE",              "eu", "baq", null],
    ["INTERLINGUA",         "ia", "ina", null],
    ["KANNADA",             "kn", "kan", null],
    ["PUNJABI",             "pa", "pan", null],
    ["SCOTS_GAELIC",        "gd", "gla", null],
    ["SWAHILI",             "sw", "swa", null],
    ["SLOVENIAN",           "sl", "slv", null],
    ["MARATHI",             "mr", "mar", null],
    ["MALTESE",             "mt", "mlt", null],
    ["VIETNAMESE",          "vi", "vie", null],
    ["FRISIAN",             "fy", "fry", null],
    ["SLOVAK",              "sk", "slo", null],
    ["ChineseT",
        null,  null,  // We intentionally set these 2 fields to null to avoid
                    // confusion between CHINESE_T and CHINESE.
        "zh-TW"],
    ["FAROESE",             "fo", "fao", null],
    ["SUNDANESE",           "su", "sun", null],
    ["UZBEK",               "uz", "uzb", null],
    ["AMHARIC",             "am", "amh", null],
    ["AZERBAIJANI",         "az", "aze", null],
    ["GEORGIAN",            "ka", "geo", null],
    ["TIGRINYA",            "ti", "tir", null],
    ["PERSIAN",             "fa", "per", null],
    ["BOSNIAN",             "bs", "bos", null],
    ["SINHALESE",           "si", "sin", null],
    ["NORWEGIAN_N",         "nn", "nno", null],
    ["PORTUGUESE_P",        null, null, "pt-PT"],
    ["PORTUGUESE_B",        null, null, "pt-BR"],
    ["XHOSA",               "xh", "xho", null],
    ["ZULU",                "zu", "zul", null],
    ["GUARANI",             "gn", "grn", null],
    ["SESOTHO",             "st", "sot", null],
    ["TURKMEN",             "tk", "tuk", null],
    ["KYRGYZ",              "ky", "kir", null],
    ["BRETON",              "br", "bre", null],
    ["TWI",                 "tw", "twi", null],
    ["YIDDISH",             "yi", "yid", null],
    ["SERBO_CROATIAN",      "sh", null, null],
    ["SOMALI",              "so", "som", null],
    ["UIGHUR",              "ug", "uig", null],
    ["KURDISH",             "ku", "kur", null],
    ["MONGOLIAN",           "mn", "mon", null],
    ["ARMENIAN",            "hy", "arm", null],
    ["LAOTHIAN",            "lo", "lao", null],
    ["SINDHI",              "sd", "snd", null],
    ["RHAETO_ROMANCE",      "rm", "roh", null],
    ["AFRIKAANS",           "af", "afr", null],
    ["LUXEMBOURGISH",       "lb", "ltz", null],
    ["BURMESE",             "my", "bur", null],
    // KHMER is known as Cambodian for Google user interfaces.
    ["KHMER",               "km", "khm", null],
    ["TIBETAN",             "bo", "tib", null],
    ["DHIVEHI",             "dv", "div", null],
    ["CHEROKEE",            null, "chr", null],
    ["SYRIAC",              null, "syr", null],
    ["LIMBU",               null, null, "sit-NP"],
    ["ORIYA",               "or", "ori", null],
    ["ASSAMESE",            "as", "asm", null],
    ["CORSICAN",            "co", "cos", null],
    ["INTERLINGUE",         "ie", "ine", null],
    ["KAZAKH",              "kk", "kaz", null],
    ["LINGALA",             "ln", "lin", null],
    ["MOLDAVIAN",           "mo", "mol", null],
    ["PASHTO",              "ps", "pus", null],
    ["QUECHUA",             "qu", "que", null],
    ["SHONA",               "sn", "sna", null],
    ["TAJIK",               "tg", "tgk", null],
    ["TATAR",               "tt", "tat", null],
    ["TONGA",               "to", "tog", null],
    ["YORUBA",              "yo", "yor", null],
    ["CREOLES_AND_PIDGINS_ENGLISH_BASED", null, "cpe", null],
    ["CREOLES_AND_PIDGINS_FRENCH_BASED",  null, "cpf", null],
    ["CREOLES_AND_PIDGINS_PORTUGUESE_BASED", null, "cpp", null],
    ["CREOLES_AND_PIDGINS_OTHER", null, "crp", null],
    ["MAORI",               "mi", "mao", null],
    ["WOLOF",               "wo", "wol", null],
    ["ABKHAZIAN",           "ab", "abk", null],
    ["AFAR",                "aa", "aar", null],
    ["AYMARA",              "ay", "aym", null],
    ["BASHKIR",             "ba", "bak", null],
    ["BISLAMA",             "bi", "bis", null],
    ["DZONGKHA",            "dz", "dzo", null],
    ["FIJIAN",              "fj", "fij", null],
    ["GREENLANDIC",         "kl", "kal", null],
    ["HAUSA",               "ha", "hau", null],
    ["HAITIAN_CREOLE",      "ht", null, null],
    ["INUPIAK",             "ik", "ipk", null],
    ["INUKTITUT",           "iu", "iku", null],
    ["KASHMIRI",            "ks", "kas", null],
    ["KINYARWANDA",         "rw", "kin", null],
    ["MALAGASY",            "mg", "mlg", null],
    ["NAURU",               "na", "nau", null],
    ["OROMO",               "om", "orm", null],
    ["RUNDI",               "rn", "run", null],
    ["SAMOAN",              "sm", "smo", null],
    ["SANGO",               "sg", "sag", null],
    ["SANSKRIT",            "sa", "san", null],
    ["SISWANT",             "ss", "ssw", null],
    ["TSONGA",              "ts", "tso", null],
    ["TSWANA",              "tn", "tsn", null],
    ["VOLAPUK",             "vo", "vol", null],
    ["ZHUANG",              "za", "zha", null],
    ["KHASI",               null, "kha", null],
    ["SCOTS",               null, "sco", null],
    ["GANDA",               "lg", "lug", null],
    ["MANX",                "gv", "glv", null],
    ["MONTENEGRIN",         null, null, "sr-ME"],
    ["XX",                  null, null, "XX"]
  ],
  asDict: {
    "aa": "Afar",
    "ab": "Abkhazian",
    "af": "Afrikaans",
    "am": "Amharic",
    "ar": "Arabic",
    "as": "Assamese",
    "ay": "Aymara",
    "az": "Azerbaijani",
    "ba": "Bashkir",
    "be": "Belarusian",
    "bg": "Bulgarian",
    "bh": "Bihari",
    "bi": "Bislama",
    "bn": "Bengali",
    "bo": "Tibetan",
    "br": "Breton",
    "bs": "Bosnian",
    "ca": "Catalan",
    "chi": "Chinese",
    "co": "Corsican",
    "cs": "Czech",
    "cy": "Welsh",
    "da": "Danish",
    "de": "German",
    "dv": "Dhivehi",
    "dz": "Dzongkha",
    "el": "Greek",
    "en": "English",
    "eo": "Esperanto",
    "es": "Spanish",
    "et": "Estonian",
    "eu": "Basque",
    "fa": "Persian",
    "fi": "Finnish",
    "fj": "Fijian",
    "fo": "Faroese",
    "fr": "French",
    "fy": "Frisian",
    "ga": "Irish",
    "gd": "Scots gaelic",
    "gl": "Galician",
    "gn": "Guarani",
    "gu": "Gujarati",
    "gv": "Manx",
    "ha": "Hausa",
    "he": "Hebrew",
    "hi": "Hindi",
    "hr": "Croatian",
    "ht": "Haitian creole",
    "hu": "Hungarian",
    "hy": "Armenian",
    "ia": "Interlingua",
    "id": "Indonesian",
    "ie": "Interlingue",
    "ik": "Inupiak",
    "is": "Icelandic",
    "it": "Italian",
    "iu": "Inuktitut",
    "ja": "Japanese",
    "jw": "Javanese",
    "ka": "Georgian",
    "kk": "Kazakh",
    "kl": "Greenlandic",
    "km": "Khmer",
    "kn": "Kannada",
    "ko": "Korean",
    "ks": "Kashmiri",
    "ku": "Kurdish",
    "ky": "Kyrgyz",
    "la": "Latin",
    "lb": "Luxembourgish",
    "lg": "Ganda",
    "ln": "Lingala",
    "lo": "Laothian",
    "lt": "Lithuanian",
    "lv": "Latvian",
    "mg": "Malagasy",
    "mi": "Maori",
    "mk": "Macedonian",
    "ml": "Malayalam",
    "mn": "Mongolian",
    "mo": "Moldavian",
    "mr": "Marathi",
    "ms": "Malay",
    "mt": "Maltese",
    "my": "Burmese",
    "na": "Nauru",
    "nb": "Norwegian",
    "ne": "Nepali",
    "nl": "Dutch",
    "nn": "Norwegian",
    "oc": "Occitan",
    "om": "Oromo",
    "or": "Oriya",
    "pa": "Punjabi",
    "pl": "Polish",
    "ps": "Pashto",
    "pt": "Portuguese",
    "qu": "Quechua",
    "rm": "Rhaeto_romance",
    "rn": "Rundi",
    "ro": "Romanian",
    "ru": "Russian",
    "rw": "Kinyarwanda",
    "sa": "Sanskrit",
    "sd": "Sindhi",
    "sg": "Sango",
    "sh": "Serbo croatian",
    "si": "Sinhalese",
    "sk": "Slovak",
    "sl": "Slovenian",
    "sm": "Samoan",
    "sn": "Shona",
    "so": "Somali",
    "sq": "Albanian",
    "sr": "Serbian",
    "ss": "Siswant",
    "st": "Sesotho",
    "su": "Sundanese",
    "sv": "Swedish",
    "sw": "Swahili",
    "ta": "Tamil",
    "te": "Telugu",
    "tg": "Tajik",
    "th": "Thai",
    "ti": "Tigrinya",
    "tk": "Turkmen",
    "tn": "Tswana",
    "to": "Tonga",
    "tr": "Turkish",
    "ts": "Tsonga",
    "tt": "Tatar",
    "tw": "Twi",
    "ug": "Uighur",
    "uk": "Ukrainian",
    "ur": "Urdu",
    "uz": "Uzbek",
    "vi": "Vietnamese",
    "vo": "Volapuk",
    "wo": "Wolof",
    "xh": "Xhosa",
    "yi": "Yiddish",
    "yo": "Yoruba",
    "za": "Zhuang",
    "zh": "Chinese",
    "zh-CN": "Chinese",
    "zu": "Zulu"
  }
};