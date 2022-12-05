import {
    @Vigilant,
    @TextProperty,
    @ColorProperty,
    @ButtonProperty,
    @SwitchProperty,
    @ParagraphProperty,
    @SliderProperty,
    @PercentSliderProperty,
    @SelectorProperty,
    Color
}
from "../gui/gui";
import {getVersion, prefix} from "../Code/Utils";

@Vigilant("Mushroom", "Mushroom Client", {
    getCategoryComparator: () => () => {
        const categories = [ "Combat", "Visual", "Macro", "Chat Macro", "Sliders", "Skyblock", "Other"];
        return 0;
    }
})
class Config {
    constructor() {
        this.initialize(this);
        this.setCategoryDescription(
            "Combat",
            `
            ${prefix} &f| Client Version 2.0
            
            &f/mhelp for commands

            `
        )
        this.setCategoryDescription(
            "Visual",
            `
            ${prefix} &f| Client Version 2.0
            
            &f/mhelp for commands

            
            `
        )
        this.setCategoryDescription(
            "Macro",
            `
            ${prefix} &f| Client Version 2.0
            
            &f/mhelp for commands

            
            `
        )
        this.setCategoryDescription(
            "Chat Macro",
            `
            ${prefix} &f| &cClient Version 2.0
            
            &f/mhelp for commands

            `
        )
        this.setCategoryDescription(
            "Sliders",
            `
            ${prefix} &f| &cClient Version 2.0
            
            &f/mhelp for commands

            `
        )
        this.setCategoryDescription(
            "Skyblock",
            `
            ${prefix} &f| &cClient Version 2.0
            
            &f/mhelp for commands

            `
        )
        this.setCategoryDescription(
            "Other",
            `
            ${prefix} &f| &cClient Version 2.0
            
            &f/mhelp for commands

            `
        )
    }

// --------------------------------------------------------------------------------
// Combat

    @SwitchProperty({
        name: "&cReach",
        description: "&fExtends your player reach!",
        category: "Combat",
        subcategory: "  "
    })
    reach = false;

    @SwitchProperty({
        name: "&cNo walls",
        description: "&fLets you hit through walls",
        category: "Combat",
        subcategory: "  "
    })
    nowalls = false;

    @SwitchProperty({
        name: "&cKillaura",
        description: "&f am become death\ndestroyer of worlds",
        category: "Combat",
        subcategory: "  "
    })
    killaura = false;

    @SwitchProperty({
        name: "&cKillaura through walls",
        description: "",
        category: "Combat",
        subcategory: "  "
    })
    killaurathroughwalls = false;

    @SwitchProperty({
        name: "&cKillaura autoblock",
        description: "",
        category: "Combat",
        subcategory: "  "
    })
    killauraautoblock = false;

    @SwitchProperty({
        name: "&cKillaura mobs",
        description: "",
        category: "Combat",
        subcategory: "  "
    })
    killauramobs = false;

    @SwitchProperty({
        name: "&cAnti Knockback",
        description: "&fCompletly stops knockback",
        category: "Combat",
        subcategory: "  "
    })
    antiknockback = false;

    @SwitchProperty({
        name: "&cAutoblock",
        description: "&fAutomatically blocks and clicks your sword",
        category: "Combat",
        subcategory: " "
    })
    autoblockpog = false;

    @SwitchProperty({
        name: "&cCPS multiplier",
        description: "&fDoubles every right click you do",
        category: "Combat",
        subcategory: ""
    })
    cpsmultiplierer = false;

    @SwitchProperty({
        name: "&cFREEZE (Use Caution)",
        description: "&fDisables all incoming packets.",
        category: "Combat",
        subcategory: ""
    })
    freezeme = false;

// --------------------------------------------------------------------------------
// Visual

    @SwitchProperty({
        name: "&cFakename",
        description: "&fchanges your name in chat",
        category: "Visual",
        subcategory: " "
        })
    nickhider = true;
    
    @TextProperty({
        name: "&cFake name you want to show",
        description: "&falso include the color of ur name",
        category: "Visual",
        subcategory: " ",
        placeholder: "nickname here!"
    })
    fakename = `${prefix}`;

    @TextProperty({
        name: "&cFake rank you want to show",
        description: "&falso include the color of the rank",
        category: "Visual",
        subcategory: " ",
        placeholder: "fake rank here!"
    })
    fakerank = `${prefix}`;

    @SwitchProperty({
        name: "&cPlayer ESP",
        description: "&fshows a box around every player\ntoggle with /esp!",
        category: "Visual",
        subcategory: ""
    })
    PlayerESP = false;

    @SwitchProperty({
        name: "&cItem ESP",
        description: "&fshows a box around every dropped item\ntoggle with /iesp!",
        category: "Visual",
        subcategory: ""
    })
    ItemESP = false;

    @SwitchProperty({
        name: "&cESP armorstands",
        description: "&fshows a box around EVERY entity\ntoggle with /aesp!",
        category: "Visual",
        subcategory: ""
    })
    Armorstandesp = false;

    @SwitchProperty({
        name: "&cSkull ESP",
        description: "&fshows a box around every skull!",
        category: "Visual",
        subcategory: ""
    })
    skullesppogger = false;

    @SwitchProperty({
        name: "&cChest ESP",
        description: "&fshows a box around every chest!",
        category: "Visual",
        subcategory: ""
    })
    chestesppog = false;

    @SwitchProperty({
        name: "&cClick gui",
        description: "",
        category: "Visual",
        subcategory: ""
    })
    clickguipogg = false;

    @SwitchProperty({
        name: "&cBlock esp",
        description: "",
        category: "Visual",
        subcategory: ""
    })
    blockesptoggle = false;

    // ESP color
    @ColorProperty({
        name: "&fEsp Color",
        description: "&fThe color of ESP",
        category: "Visual",
        subcategory: ""
    })
    Armorstandespcolor = new java.awt.Color(0, 1, 0, 1);

// --------------------------------------------------------------------------------
// Macro

@SwitchProperty({
    name: "&cChest Aura",
    description: "&fAuto opens nearby chests and steals items",
    category: "Macro",
    subcategory: ""
})
chestaurabased = false;

@SwitchProperty({
    name: "&cSkull Aura",
    description: "&fAuto right clicks nearby skulls",
    category: "Macro",
    subcategory: ""
})
skuller = false;

@SwitchProperty({
    name: "&cLever Aura",
    description: "&fAuto right clicks nearby levers!",
    category: "Macro",
    subcategory: ""
})
leverer = false;

@SwitchProperty({
    name: "&cChest Stealer",
    description: "&fAuto takes every item from a chest\n&4included in Chest Aura",
    category: "Macro",
    subcategory: ""
})
cheststealer = false;

@SwitchProperty({
    name: "&cSnowball swap",
    description: "&fAuto throw snowballs on click",
    category: "Macro",
    subcategory: "  "
})
snowballswap = false;

@SwitchProperty({
    name: "&csword swap",
    description: "",
    category: "Macro",
    subcategory: ""
})
swrodswap = false;

@SwitchProperty({
    name: "&cFishing rod swap",
    description: "&fAuto use fishing rod on click\n&4kinda bad because u end up hitting them with rod alot",
    category: "Macro",
    subcategory: "  "
})
fishingrodswap = false;

@SwitchProperty({
    name: "&cScaffold",
    description: "&fAuto bridges for you!",
    category: "Macro",
    subcategory: " "
})
scaffoldi = false;

// --------------------------------------------------------------------------------
// Chat Macro

    @SwitchProperty({
        name: "&cWelcome guild!!!",
        description: "&fAuto send message when guild members come online",
        category: "Chat Macro",
        subcategory: ""
    })
    welcomeguild = true;


    @TextProperty({
        name: "&cwelcome guild message",
        description: '&fset the welcome message\ntype "player" to say username',
        category: "Chat Macro",
        subcategory: "",
        placeholder: "put message here!"
    })
    welcomeguildmessage = "Good morning";

    @SwitchProperty({
        name: "&cguild bridge bot",
        description: "&fmakes guild bridge bot look cleaner",
        category: "Chat Macro",
        subcategory: ""
    })
    guildbridge = true;


    @TextProperty({
        name: "&cguild bridge bots name",
        description: '&fusername of bridge bot',
        category: "Chat Macro",
        subcategory: "",
        placeholder: "put bridge bots name here"
    })
    guildbotsname = "";

    @SwitchProperty({
        name: "&cgeneral quickmaths",
        description: "",
        category: "Chat Macro",
        subcategory: "  "
    })
    generalquickmaths = true;

    @SwitchProperty({
        name: "&cquotes pog",
        description: "&f Makes fun of people who say pog.",
        category: "Chat Macro",
        subcategory: "  "
    })
    quotespog = true;

    @SwitchProperty({
        name: "&cAuto send quickmaths answer",
        description: "&fAuto reply answer to quickmaths quiz.",
        category: "Chat Macro",
        subcategory: "  "
    })
    quickmathsautosend = true;

    @SwitchProperty({
        name: "&cguild bot",
        description: "",
        category: "Chat Macro",
        subcategory: ""
    })
    guildbottoggle = true;


    @SwitchProperty({
        name: "&cball",
        description: "&fGuild chat 8ball message\nwhen someone types !8ball 'question'",
        category: "Chat Macro",
        subcategory: " "
    })
    eightballconfig = true;

    @SwitchProperty({
        name: '&c"wrong chat"',
        description: "&fbullys people for saying wc.",
        category: "Chat Macro",
        subcategory: '   '
    })
    wrongchatperson = true;

    @SwitchProperty({
        name: '&c"wrong chat" in guild chat',
        description: "&fMakes the wc quotes in guild chat instead of public / party",
        category: "Chat Macro",
        subcategory: '   '
    })
    wcinguildchat = true;

    @SwitchProperty({
        name: '&c"wrong chat" in party chat',
        description: "&fMakes the wc quotes in party chat instead of public / guild",
        category: "Chat Macro",
        subcategory: '   '
    })
    wcinpartychat = true;

    @SwitchProperty({
        name: '&c"GG"',
        description: "&fbullys people saying gg",
        category: "Chat Macro",
        subcategory: '   '
    })
    goodgamerpog = true;

    @SwitchProperty({
        name: '&c"GG" in guild chat',
        description: "&fMakes gg quotes in guild chat instead of public / party",
        category: "Chat Macro",
        subcategory: '   '
    })
    gginguildchat = true;

    @SwitchProperty({
        name: '&c"GG" in party chat',
        description: "&fMakes gg quotes in party chat instead of public / guild",
        category: "Chat Macro",
        subcategory: '   '
    })
    gginpartychat = true;

    @SwitchProperty({
        name: "&cQuickmaths solver!",
        description: "&fTells you the answer to quickmaths",
        category: "Chat Macro",
        subcategory: "  "
    })
    quickmathssolver = true;

    @SwitchProperty({
        name: "&cGuild maths bot",
        description: "&fAuto send answers to !maths 'question' in guild chat\n&lBannable. maybe",
        category: "Chat Macro",
        subcategory: " "
    })
    guildmathsbot = true;

    @SwitchProperty({
        name: "&cAuto Party Transfer",
        description: '&f"I really hope someone doesnt transfer the party to me"',
        category: "Chat Macro",
        subcategory: "    ",
    })
    autoTransfer = true;

// --------------------------------------------------------------------------------
//Fake Ban

@SwitchProperty({
    name: "&cbeamed",
    description: "",
    category: "Visual",
    subcategory: "  "
})
showfakeban = false;

    @SelectorProperty({
        name: '&cFakeban type',
        description: '&fFakeban reason (shows when you press ban me key)',
        category: 'Visual',
        subcategory: "  ",
        options: ['Perm Cheating ban', 'Username ban',"Security ban", 'Boosting ban','Inappropriate build ban','Temp Cheating ban','Custom'],
    })
    banMethod = 0;
    @SelectorProperty({
        name: '&cFakeban time',
        description: '&fBan time',
        category: 'Visual',
        subcategory: "  ",
        options: ['7 days', '30 days',"90 days", '180 days','360 days'],
    })
    BanTime = 0;

    @TextProperty({
        name: '&cCustom Fakeban Reason',
        description: '&fBan reason',
        category: 'Visual',
        subcategory: '  ',
        placeholder: 'Empty... :(',
        triggerActionOnInitialization: false,
    })
    Reason = 'Heckering cheter gat bend';

    @TextProperty({
        name: '&cCustom fakeban time',
        description: '&fBan time (only if you select the "custom" option in ban options',
        category: 'Visual',
        subcategory: '  ',
        placeholder: 'Empty... :(',
        triggerActionOnInitialization: false,
    })
    Time = '4d 2h 0m 6s';
    @SwitchProperty({
        name: '&cCustom Fakeban perm',
        description: '&fTurning this on will be perm ban and ignore ban time',
        category: 'Visual',
        subcategory: '  ',
        placeholder: 'Activate',
    })
    Perm = false;
  
    @TextProperty({
        name: '&cFakeban Reason',
        description: '&fBan reason',
        category: 'Visual',
        subcategory: '  ',
        placeholder: 'Empty... :(',
    })


// ----------------------------------------------------------------------
// Sliders
    @SliderProperty({
        name: "&cZombies gun macro speed",
        description: "&f(Speed of gun macro send in milliseconds)",
        category: "Sliders",
        subcategory: "   ",
        min: 10,
        max: 1000
    })
    Zombiesgunmacrospeed = 500;

    @SliderProperty({
        name: "&chilarity speed",
        description: "&fplease i want to see more",
        category: "Sliders",
        subcategory: "",
        min: 1,
        max: 5000
    })
    hilarityspeed = 1000;


    @SliderProperty({
        name: "&cChest Aura reach",
        description: "&fReach distance for chest aura",
        category: "Sliders",
        subcategory: " ",
        min: 1,
        max: 6
    })
    auraReach = 5;

    @SliderProperty({
        name: "&cSkull Aura reach",
        description: "&fReach distance for skull aura",
        category: "Sliders",
        subcategory: " ",
        min: 1,
        max: 6
    })
    skullreach = 5;

    @SliderProperty({
        name: "&cLever Aura reach",
        description: "&fReach distance for lever aura",
        category: "Sliders",
        subcategory: " ",
        min: 1,
        max: 6
    })
    leverreach = 5;

    @SliderProperty({
        name: "&cright click auto Clicker Speed",
        description: "&fSpeed of autoclicker\n&aRun /ct load to change speed",
        category: "Sliders",
        subcategory: "   ",
        min: 1,
        max: 30
    })
    autoclickerspeed = 20;
    
    
    @SliderProperty({
        name: "&cleft click auto Clicker Speed",
        description: "&fSpeed of autoclicker\n&aRun /ct load to change speed",
        category: "Sliders",
        subcategory: "   ",
        min: 1,
        max: 30
    })
    leftclickacspeed = 20;

    @SliderProperty({
        name: "&cQuickmaths solver speed",
        description: "&fSpeed of auto send in milliseconds",
        category: "Sliders",
        subcategory: " ",
        min: 1,
        max: 10000
    })
    quickmathsautosendcooldown = 50;

    @SliderProperty({
        name: "&cautoterm speed",
        description: "&fSpeed of autoterms in millisecconds",
        category: "Sliders",
        subcategory: "    ",
        min: 100,
        max: 1000
    })
    autotermspeed = 200;


// ----------------------------------------------------------------------
// Skyblock

    @SwitchProperty({
        name: "&c ghostblocks",
        description: "&fmakes ghostblocks straight to terms in f7",
        category: "Skyblock",
        subcategory: "  "
        })
        p3termghostblocks = true;

    @SwitchProperty({
            name: "ghostblocks",
            description: "",
            category: "Skyblock",
            subcategory: "  "
        })
    ghostblockstoggle = true;

    @SwitchProperty({
        name: "&cDungeon Score calc",
        description: "&fshows you the dungeon score",
        category: "Skyblock",
        subcategory: ""
        })
    scorecalc = true;
    
    @SwitchProperty({
        name: "&cshitter warning",
        description: "&fwarns you if a shitter joins your group",
        category: "Skyblock",
        subcategory: ""
        })
    shitterwarning = true;

    @SwitchProperty({
        name: "&cauto kick shitters",
        description: "&fautomatically kicks shitters from dungeon groups",
        category: "Skyblock",
        subcategory: ""
        })
    kickshitter = false;

    @SwitchProperty({
        name: "&cDungeon Score calc message",
        description: "&fsends messages on 270 / 300 score",
        category: "Skyblock",
        subcategory: ""
        })
        scorecalcmessage = true;

    @TextProperty({
        name: "&c270 score message",
        description: '&fmessage to send on 270 score',
        category: "Skyblock",
        subcategory: " ",
        placeholder: "put text here"
    })
    e270scoremesssage = "lunar client > 269 score";

    @TextProperty({
        name: "&c300 score message",
        description: '&fmessage to send on 300 score',
        category: "Skyblock",
        subcategory: " ",
        placeholder: "put text here"
    })
    e300scoremesssage = "lunar client > 269 score";


    @SwitchProperty({
        name: "&cfunny score calc",
        description: "&fsends messages on every score",
        category: "Skyblock",
        subcategory: ""
        })
    funnyscorecalc = true;
    
    @SwitchProperty({
        name: "&fautoharp",
        description: "&cautomatically does melody harp",
        category: "Skyblock",
        subcategory: ""
        })
    autoharp = true;
    
        @SwitchProperty({
        name: "&c guy died!",
        description: "&fsends message when someone dies in skyblock dungeons",
        category: "Skyblock",
        subcategory: "      "
    })
    toxicdeath = true;

    @SwitchProperty({
        name: "&cautoterms",
        description: "&fautomatically does necron terminals",
        category: "Skyblock",
        subcategory: "  "
        })
    autoterms = true;

    @SwitchProperty({
        name: "&cAuction Sniper",
        description: "&fSnipes items in skyblock",
        category: "Skyblock",
        subcategory: "   "
    })
    ahsniper = false;
    
    @SwitchProperty({
        name: "&cAuction Sniper p2",
        description: "&fAuto Confirms buying items",
        category: "Skyblock",
        subcategory: "   "
    })
    ahsniper2 = false;

    @SwitchProperty({
        name: "&c gyro times for mage",
        description: "&fTiming for mage gyros if your team insta kills teras",
        category: "Skyblock",
        subcategory: "   "
    })
    m6gyros = false;

    @TextProperty({
        name: "&cSelf death message",
        description: '&fmessage to send when you die',
        category: "Skyblock",
        subcategory: "      ",
        placeholder: "TYPE HERE"
    })
    idiedmessage = "TANKS FAULT! OMFG WHY IS HE NOT NEAR ME WHERES THE HEALER MAN PLEASE MASTIFF WISH AND WHY IS NO ONE CLEARING MY ROOMS FOR ME YOUR ALL THROWING";

    @TextProperty({
        name: "&cDeath message",
        description: '&fput "player" to say the persons name',
        category: "Skyblock",
        subcategory: "      ",
        placeholder: "Toxic Death Message"
    })
    toxicdeathmessage = "OMG LOOK AT THIS NON! player has died! BAD";

// ----------------------------------------------------------------------
// Other

    @SwitchProperty({
        name: "&cSpanish Translator",
        description: '&f"no hablo español"',
        category: "Other",
        subcategory: " "
        })
    spanish = true;

    @SwitchProperty({
        name: "&chilarity",
        description: '&f Fake Messgages from people',
        category: "Other",
        subcategory: " "
        })
    hilarity = true;

    @SwitchProperty({
        name: "&comega hilarity",
        description: '&fnot recomended if you die alot',
        category: "Other",
        subcategory: " "
        })
    omegahilarity = false;

    @SwitchProperty({
        name: "&clarge hilarity",
        description: '&fnot recomended if you die in dungeons alot',
        category: "Other",
        subcategory: " "
        })
    largehilarity = false;
    
  @ButtonProperty({
    name: "&cjoin the discord!",
    description: "&fJoin this discord!",
    category: "Other",
    subcategory: "",
    placeholder:"join"
})
Reset() {
  java.awt.Desktop.getDesktop().browse(new java.net.URI("https://discord.gg/VJbWusPaAD"));
    ChatLib.command("ct copy "+"https://discord.gg/VJbWusPaAD",true)
}
@ButtonProperty({
    name: "CLICK",
    description: "&cCLICK",
    category: "Other",
    subcategory: "",
    placeholder:"CLICK"
})
Join() {
  ChatLib.command("g leave")
  setTimeout() ; 100
  var delayInMilliseconds = 100;
  setTimeout(function() {
  ChatLib.command("g confirm")
  }, delayInMilliseconds);
  setTimeout() ; 100
  var delayInMilliseconds = 200;
  setTimeout(function() {
  ChatLib.command("g join shady addons")
  }, delayInMilliseconds);
  ChatLib.chat("&eGG you joined the best guild ww!")
}

    @SwitchProperty({
        name: "&aCLICK FOR UPDATES!",
        description: "&2Click for updates!!!",
        category: "Other",
        subcategory: "    "
    })
    ComingSoon = true;

    @SwitchProperty({
        name: "&cMushroom Client on top",
        description: "&4puts mushroom client in tab!",
        category: "Other",
        subcategory: "  "
        })
        mushroomclientontop = true;
    
    
      @SwitchProperty({
        name: "&aMushroom Client logo",
        description: "&btoggle showing the 'mushroom client'\n&blogo in the top right",
        category: "Other",
        subcategory: "  "
        })
        showmushroomlogo = false;
    
      @SwitchProperty({
        name: "&bMushroom Client text",
        description: "&atoggle showing the 'mushroom client'\n&atext in the top right",
        category: "Other",
        subcategory: "  "
        })
        showmushroomtext = true;
    
      @SwitchProperty({
        name: "&9Mushroom shadow",
        description: "&1toggles the mushroom shadow",
        category: "Other",
        subcategory: "  "
        })
        mushroomshadow = false;
    
      @SwitchProperty({
        name: "&2Mushroom Rainbow",
        description: "&5If the [MUSHROOM CLIENT] is rainbow colored",
        category: "Other",
        subcategory: "  "
        })
        Mushroomrainbow = true;
    
      @SwitchProperty({
        name: "&3Discord RPC",
        description: "&9Shows ur playing the best client",
        category: "Other",
        subcategory: "   "
        })
        discordrpc = true;

        @SwitchProperty({
            name: "&3Discord RPC location",
            description: "&9says if your in a skyblock island",
            category: "Other",
            subcategory: "   "
            })
        discordrpcskyblock = true;

        @TextProperty({
            name: "&cDiscord rpc text",
            description: '&aText to show on your discord rpc',
            category: "Other",
            subcategory: "   ",
            placeholder: "put text here"
        })
        discordrpctext = "[insert text here]";

        @TextProperty({
            name: "&cDiscord rpc bottom text",
            description: '&aText to show on your discord rpc line 2',
            category: "Other",
            subcategory: "   ",
            placeholder: "put text here"
        })
        discordrpctext2 = "[insert text here]";


        @SelectorProperty({
            name: '&dDiscord RPC picture',
            description: '&4Picture',
            category: 'Other',
            subcategory: "   ",
            options: ['rat', 'swavy', 'bigrat', 'badlion', 'apex legends', 'valorant', 'minecraft', 'mushroom client', 'visual studio', 'changing'],
            })
        discordrpcpic = 0;

        @TextProperty({
            name: "killaura keybind",
            description: '',
            category: "Keybind",
            subcategory: "   ",
            placeholder: "put text here"
        })
        killaurakeybindconfig = "";

        @TextProperty({
            name: "nowall keybind",
            description: '',
            category: "Keybind",
            subcategory: "   ",
            placeholder: "put text here"
        })
        nowallkeybindconfig = "";

        @TextProperty({
            name: "autoblock keybind",
            description: '',
            category: "Keybind",
            subcategory: "   ",
            placeholder: "put text here"
        })
        autoblockkeybindconfig = "";

        @TextProperty({
            name: "cpsmultiplier keybind",
            description: '',
            category: "Keybind",
            subcategory: "   ",
            placeholder: "put text here"
        })
        cpsmultikeybindconfig = "";

        @TextProperty({
            name: "antikb keybind",
            description: '',
            category: "Keybind",
            subcategory: "   ",
            placeholder: "put text here"
        })
        antikbkeybindconfig = "";

        @TextProperty({
            name: "freeze keybind",
            description: '',
            category: "Keybind",
            subcategory: "   ",
            placeholder: "put text here"
        })
        freezekeybindconfig = "";
        @TextProperty({
            name: "combatx",
            description: '',
            category: "Other",
            subcategory: "   ",
            placeholder: "put text here"
        })
        combatxpog = "52";

        @TextProperty({
            name: "combaty",
            description: '',
            category: "Other",
            subcategory: "   ",
            placeholder: "put text here"
        })
        combatypog = "2";
}

// mushroom client was originally a chat macro mod for my friends!

/*
    @SwitchProperty({
        name: "&cQuote yeeter",
        description: "&5Rest in cum ENDER_YEETER",
        category: "Chat Macro",
        subcategory: "quotes"
    })
    stfuyeeter = true;

    @SwitchProperty({
        name: "&2Quote ema",
        description: "&aL ema",
        category: "Chat Macro",
        subcategory: "quotes"
    })
    stfuema = true;

    @SwitchProperty({
        name: "&bQuote chomp",
        description: "&eL chomp",
        category: "Chat Macro",
        subcategory: "quotes"
    })
    stfuchomp = true;


    @SwitchProperty({
        name: "&9Quote twiftan",
        description: "&1L twift",
        category: "Chat Macro",
        subcategory: "quotes"
    })
    stfutwiftan = true;

    @SwitchProperty({
        name: "&eQuote luceeyum",
        description: "&6L lucee",
        category: "Chat Macro",
        subcategory: "quotes"
    })
    stfuluceeyum = true;

    @SwitchProperty({
        name: "&5Quote Lord_Terror23",
        description: "&9L terror",
        category: "Chat Macro",
        subcategory: "quotes"
    })
    lordterrormessage = true;
*/

export default new Config()