let stations = [
  {
    coords: { lat: 56.61713536597153, lng: 21.040272116661075 },
    name: "Šķēde",
    trans_attend: ["8"],
  },
  {
    coords: { lat: 56.6167532099736, lng: 21.040425002574924 },
    name: "Šķēde",
    trans_attend: ["8"],
  },
  {
    coords: { lat: 56.61250243892327, lng: 21.038957834243778 },
    name: "Šķede I",
    trans_attend: ["8"],
  },
  {
    coords: { lat: 56.611920856812986, lng: 21.038732528686527 },
    name: "Šķēde I",
    trans_attend: ["8"],
  },
  {
    coords: { lat: 56.60966698366584, lng: 21.037954688072208 },
    name: "Šķēde II",
    trans_attend: ["8"],
  },
  {
    coords: { lat: 56.60908365799664, lng: 21.037724018096927 },
    name: "Šķēde II",
    trans_attend: ["8"],
  },
  {
    coords: { lat: 56.5952866027515, lng: 21.027094423770908 },
    name: "Attīrīšanas iekārtas",
    trans_attend: ["8"],
  },
  {
    coords: { lat: 56.59533682842393, lng: 21.027156114578247 },
    name: "Attīrīšanas iekārtas",
    trans_attend: ["8"],
  },
  {
    coords: { lat: 56.58393805223956, lng: 21.026603579521183 },
    name: "Lībiešu iela",
    trans_attend: ["8"],
  },
  {
    coords: { lat: 56.583623307160686, lng: 21.02654457092285 },
    name: "Lībiešu iela",
    trans_attend: ["8"],
  },
  {
    coords: { lat: 56.56360155380468, lng: 21.014509499073032 },
    name: "Beberliņi",
    trans_attend: ["8"],
  },
  {
    coords: { lat: 56.56248843143518, lng: 21.01406693458557 },
    name: "Beberliņi",
    trans_attend: ["8"],
  },
  {
    coords: { lat: 56.558698611018634, lng: 21.011776328086857 },
    name: "Pulkveža Brieža iela",
    trans_attend: ["8"],
  },
  {
    coords: { lat: 56.5584708971989, lng: 21.012001633644108 },
    name: "Pulkveža Brieža iela",
    trans_attend: ["8"],
  },
  {
    coords: { lat: 56.55654625788889, lng: 21.00792467594147 },
    name: "Atmodas bulvāris",
    trans_attend: ["4", "7", "22", "23", "25", "22S"],
  },
  {
    coords: { lat: 56.55583349809851, lng: 21.007769107818607 },
    name: "Atmodas bulvāris",
    trans_attend: ["4", "7", "22", "23", "25", "22S"],
  },
  {
    coords: { lat: 56.55414135001608, lng: 21.01179510354996 },
    name: "Pulkveža Brieža iela",
    trans_attend: ["3", "12", "1A", "12A", "12B"],
  },
  {
    coords: { lat: 56.55355100108751, lng: 21.016749143600467 },
    name: "Ģenerāļa Baloža iela",
    trans_attend: ["3", "8", "12", "1A", "12A", "12B"],
  },
  {
    coords: { lat: 56.55328776347143, lng: 21.01815462112427 },
    name: "Ģenerāļa Baloža iela",
    trans_attend: ["3", "8", "12", "1A", "12A", "12B"],
  },
  {
    coords: { lat: 56.55249305804874, lng: 21.024715304374695 },
    name: "Lazaretes iela",
    trans_attend: ["3", "4", "7", "8", "12", "1A", "12A", "12B"],
  },
  {
    coords: { lat: 56.55246643785363, lng: 21.02545022964478 },
    name: "Lazaretes iela",
    trans_attend: ["3", "4", "7", "8", "12", "1A", "12A", "12B"],
  },
  {
    coords: { lat: 56.55206139153888, lng: 21.032960414886478 },
    name: "Laboratorijas iela",
    trans_attend: ["3", "4", "7", "8", "12", "1A", "12A", "12B"],
  },
  {
    coords: { lat: 56.55199927701276, lng: 21.03417277336121 },
    name: "Laboratorijas iela",
    trans_attend: ["3", "4", "7", "8", "12", "1A", "12A", "12B"],
  },
  {
    coords: { lat: 56.55170363436136, lng: 21.040320396423343 },
    name: "Tosmare",
    trans_attend: ["3", "4", "7", "8", "12", "1A", "12A", "12B"],
  },
  {
    coords: { lat: 56.55166814002341, lng: 21.041264533996586 },
    name: "Tosmare",
    trans_attend: ["3", "4", "7", "8", "12", "1A", "12A", "12B"],
  },
  {
    coords: { lat: 56.55144641062071, lng: 21.04641437530518 },
    name: "Mežmalas iela",
    trans_attend: ["3", "4", "7", "8", "12", "1A", "12A", "12B"],
  },
  {
    coords: { lat: 56.55141683180705, lng: 21.046816706657413 },
    name: "Mežmalas iela",
    trans_attend: ["3", "4", "7", "8", "12", "1A", "12A", "12B"],
  },
  {
    coords: { lat: 56.54788935773838, lng: 21.052071154117588 },
    name: "Nākotnes iela",
    trans_attend: ["3", "4", "7", "8", "12", "1A", "12A", "12B"],
  },
  {
    coords: { lat: 56.54763199710147, lng: 21.052360832691196 },
    name: "Nākotnes iela",
    trans_attend: ["3", "4", "7", "8", "12", "1A", "12A", "12B"],
  },
  {
    coords: { lat: 56.543871978910545, lng: 21.055185198783875 },
    name: "Pagr. uz Grīzupes ielu",
    trans_attend: ["3", "4", "6", "7", "8", "9", "12", "1A", "6A", "9A"],
  },
  {
    coords: { lat: 56.543778786924136, lng: 21.055158376693726 },
    name: "Pagr. uz Grīzupes ielu",
    trans_attend: ["3", "4", "6", "7", "8", "9", "12", "1A", "6A", "9A"],
  },
  {
    coords: { lat: 56.541273711400635, lng: 21.054699718952183 },
    name: "Cukuriņš",
    trans_attend: ["3", "4", "6", "7", "8", "9", "12", "1A", "6A", "9A"],
  },
  {
    coords: { lat: 56.540626029715646, lng: 21.05457365512848 },
    name: "Cukuriņš",
    trans_attend: ["3", "4", "6", "7", "8", "9", "12", "1A", "6A", "9A"],
  },
  {
    coords: { lat: 56.538484625990414, lng: 21.05253249406815 },
    name: "Cukura iela",
    trans_attend: ["3", "6", "7", "8", "23", "1A", "1s", "6A"],
  },
  {
    coords: { lat: 56.53845503704803, lng: 21.052690744400028 },
    name: "Cukura iela",
    trans_attend: ["3", "6", "7", "8", "23", "1A", "1s", "6A"],
  },
  {
    coords: { lat: 56.53909400326417, lng: 21.042267680168155 },
    name: "Saraiķu iela",
    trans_attend: ["3", "6", "7", "8", "23", "1A", "6A"],
  },
  {
    coords: { lat: 56.53903482630856, lng: 21.04318499565125 },
    name: "Saraiķu iela",
    trans_attend: ["3", "6", "7", "8", "23", "1A", "6A"],
  },
  {
    coords: { lat: 56.53942522546946, lng: 21.034301519393924 },
    name: "Pulvera iela",
    trans_attend: ["3", "6", "7", "8", "23", "1A", "6A"],
  },
  {
    coords: { lat: 56.538862901166375, lng: 21.031731963157657 },
    name: "Pulvera iela",
    trans_attend: ["3", "6", "7", "8", "23", "1A", "6A"],
  },
  {
    coords: { lat: 56.536305923206776, lng: 21.028486490249637 },
    name: "Valsts tehnikums",
    trans_attend: ["3", "6", "7", "8", "23", "1A", "6A"],
  },
  {
    coords: { lat: 56.536410969808905, lng: 21.028634011745453 },
    name: "Valsts tehnikums",
    trans_attend: ["3", "6", "7", "8", "23", "1A", "6A"],
  },
  {
    coords: { lat: 56.534602318533516, lng: 21.025372445583347 },
    name: "Ventspils iela",
    trans_attend: ["3", "6", "7", "8", "23", "1A", "6A"],
  },
  {
    coords: { lat: 56.53460083893528, lng: 21.025514602661136 },
    name: "Ventspils iela",
    trans_attend: ["3", "6", "7", "8", "23", "1A", "6A"],
  },
  {
    coords: { lat: 56.53460966263409, lng: 21.020724177360538 },
    name: "Lauma",
    trans_attend: ["3", "6", "7", "8", "23", "1A", "6A"],
  },
  {
    coords: { lat: 56.53465260382242, lng: 21.01826459169388 },
    name: "Lauma",
    trans_attend: ["3", "6", "7", "8", "23", "1A", "6A"],
  },
  {
    coords: { lat: 56.53467484787708, lng: 21.01410180330277 },
    name: "Ziemeļu iela",
    trans_attend: ["3", "6", "7", "8", "23", "1A", "6A"],
  },
  {
    coords: { lat: 56.53333914147307, lng: 21.011835336685184 },
    name: "Siļķu iela",
    trans_attend: ["3", "6", "7", "8", "23", "1A", "1s", "6A"],
  },
  {
    coords: { lat: 56.53233164167434, lng: 21.011824607849125 },
    name: "Siļķu iela",
    trans_attend: ["3", "6", "7", "8", "23", "1A", "6A"],
  },
  {
    coords: { lat: 56.53197833976775, lng: 21.01106017827988 },
    name: "Sakņu iela",
    trans_attend: ["11", "23", "11A"],
  },
  {
    coords: { lat: 56.532021263459896, lng: 21.00829213857651 },
    name: "Zaru iela",
    trans_attend: ["11", "1s", "11A"],
  },
  {
    coords: { lat: 56.53203606637574, lng: 21.007313132286075 },
    name: "Ziedu iela",
    trans_attend: ["11", "23", "11A"],
  },
  {
    coords: { lat: 56.532053747841374, lng: 21.003153026103977 },
    name: "Lapu iela",
    trans_attend: ["11", "23", "1s", "11A"],
  },
  {
    coords: { lat: 56.532442834680225, lng: 21.002587080001835 },
    name: "Ziemeļu kapi",
    trans_attend: ["10", "11", "22", "23", "25", "10A", "11A"],
  },
  {
    coords: { lat: 56.53508608478128, lng: 21.002066731452945 },
    name: "Piltenes iela",
    trans_attend: ["10", "11", "22", "23", "25", "1s", "2s", "10A", "11A"],
  },
  {
    coords: { lat: 56.53745813697811, lng: 21.002506613731388 },
    name: "Piltenes iela",
    trans_attend: ["10", "11", "22", "23", "25", "10A", "11A"],
  },
  {
    coords: { lat: 56.53832779840499, lng: 21.002761423587803 },
    name: "Šķēdes iela",
    trans_attend: ["10", "11", "22", "23", "25", "1s", "2s", "10A", "11A"],
  },
  {
    coords: { lat: 56.540172165942984, lng: 21.003305912017826 },
    name: "O.Kalpaka vidusskola",
    trans_attend: ["10", "11", "22", "23", "25", "10A", "11A", "22S"],
  },
  {
    coords: { lat: 56.54051197042882, lng: 21.00343465805054 },
    name: "O.Kalpaka vidusskola",
    trans_attend: ["10", "11", "22", "23", "25", "10A", "11A", "22S"],
  },
  {
    coords: { lat: 56.54412601821005, lng: 21.004016697406772 },
    name: "O.Kaplaka tilts",
    trans_attend: ["10", "11", "10A", "11A"],
  },
  {
    coords: { lat: 56.54835898495498, lng: 21.006041765213013 },
    name: "Turaidas iela",
    trans_attend: ["10", "11", "10A", "11A"],
  },
  {
    coords: { lat: 56.54852463939567, lng: 21.00612759590149 },
    name: "Turaidas iela",
    trans_attend: ["10", "11", "10A", "11A"],
  },
  {
    coords: { lat: 56.548587116242736, lng: 21.00797295570374 },
    name: "Lācplēša dārzs",
    trans_attend: ["4", "7"],
  },
  {
    coords: { lat: 56.54851020546951, lng: 21.008662283420563 },
    name: "Lācplēša dārzs",
    trans_attend: ["4", "7"],
  },
  {
    coords: { lat: 56.551833564521296, lng: 21.006894707679752 },
    name: "Studentu rotas iela",
    trans_attend: ["4", "7", "22", "23", "25", "22S"],
  },
  {
    coords: { lat: 56.5519873724064, lng: 21.00693225860596 },
    name: "Studentu rotas iela",
    trans_attend: ["4", "7", "22", "23", "25", "22S"],
  },
  {
    name: "Invalīdu iela",
    coords: {
      lat: 56.54624161753377,
      lng: 21.017757654190067,
    },
    trans_attend: ["4", "7"],
  },
  {
    name: "Invalīdu iela",
    coords: {
      lat: 56.54586346617288,
      lng: 21.01843893527985,
    },
    trans_attend: ["4", "7"],
  },
  {
    name: "Turaidas iela",
    coords: {
      lat: 56.544883300606045,
      lng: 21.022258400917057,
    },
    trans_attend: ["4", "7"],
  },
  {
    name: "Turaidas iela",
    coords: {
      lat: 56.54502678239902,
      lng: 21.022596359252933,
    },
    trans_attend: ["4", "7"],
  },
  {
    name: "Piemares pamatskola",
    coords: {
      lat: 56.54987326290834,
      lng: 21.023470759391788,
    },
    trans_attend: ["4", "7"],
  },
  {
    name: "Piemares pamatskola",
    coords: {
      lat: 56.55065120974201,
      lng: 21.023610234260563,
    },
    trans_attend: ["4", "7"],
  },
  {
    name: "Talsu iela",
    coords: {
      lat: 56.54360411609149,
      lng: 21.0661393404007,
    },
    trans_attend: ["6", "9", "12", "1s", "4s", "6A", "9A", "12A", "12B"],
  },
  {
    name: "Talsu iela",
    coords: {
      lat: 56.54375204045495,
      lng: 21.068671345710758,
    },
    trans_attend: ["6", "9", "12", "6A", "9A", "12A", "12B"],
  },
  {
    name: "Bērnudārzs",
    coords: {
      lat: 56.544340773693975,
      lng: 21.071916818618774,
    },
    trans_attend: ["6", "9", "12", "1s", "4s", "6A", "9A", "12A", "12B"],
  },
  {
    name: "Bērnudārzs",
    coords: {
      lat: 56.54459184658333,
      lng: 21.072952151298527,
    },
    trans_attend: ["6", "9", "12", "6A", "9A", "12A", "12B"],
  },
  {
    name: "14.novembra bulv.",
    coords: {
      lat: 56.54488334532243,
      lng: 21.07690304517746,
    },
    trans_attend: ["6", "9", "12", "1s", "4s", "6A", "9A", "12A", "12B"],
  },
  {
    name: "14.novembra bulv.",
    coords: {
      lat: 56.544912929241725,
      lng: 21.078466773033142,
    },
    trans_attend: ["6", "9", "12", "6A", "9A", "12A", "12B"],
  },
  {
    name: "Kārklu iela",
    coords: {
      lat: 56.547377530422075,
      lng: 21.084818243980408,
    },
    trans_attend: ["6", "9", "12", "1s", "4s", "6A", "9A", "12A", "12B"],
  },
  {
    name: "Kārklu iela",
    coords: {
      lat: 56.54802688975702,
      lng: 21.085652410984043,
    },
    trans_attend: ["6", "9", "12", "6A", "9A", "12A", "12B"],
  },
  {
    name: "Grīzupes iela",
    coords: {
      lat: 56.549583331162815,
      lng: 21.08756482601166,
    },
    trans_attend: ["6", "9", "12", "1s", "4s", "6A", "9A", "12A", "12B"],
  },
  {
    name: "Grīzupes iela",
    coords: {
      lat: 56.55019859553008,
      lng: 21.088321208953857,
    },
    trans_attend: ["6", "9", "12", "6A", "9A", "12A", "12B"],
  },
  {
    name: "Pagr.uz slimnīcu",
    coords: {
      lat: 56.553282639787604,
      lng: 21.09209775924683,
    },
    trans_attend: ["6", "9", "12", "1s", "4s", "6A", "9A", "12A", "12B"],
  },
  {
    name: "Pagr.uz slimnīcu",
    coords: {
      lat: 56.55375883240204,
      lng: 21.092666387557987,
    },
    trans_attend: ["6", "9", "12", "6A", "9A", "12A", "12B"],
  },
  {
    name: "Ceriņu iela",
    coords: {
      lat: 56.554775743283486,
      lng: 21.096778213977814,
    },
    trans_attend: ["1s", "4s", "6A", "9A", "12B"],
  },
  {
    name: "Ceriņu iela",
    coords: {
      lat: 56.55469736627175,
      lng: 21.09680771827698,
    },
    trans_attend: ["6A", "9A", "12B"],
  },
  {
    name: "Slimnīca",
    coords: {
      lat: 56.55229789455988,
      lng: 21.09896957874298,
    },
    trans_attend: ["6", "9", "12", "1s", "4s", "6A", "9A", "12A", "12B"],
  },
  {
    name: "Slimnīca",
    coords: {
      lat: 56.552244653876436,
      lng: 21.099033951759342,
    },
    trans_attend: ["6", "9", "12", "6A", "9A", "12A", "12B"],
  },
  {
    name: "Pieneņu iela",
    coords: {
      lat: 56.54255076261646,
      lng: 21.097987890243534,
    },
    trans_attend: ["12A"],
  },
  {
    name: "Pieneņu iela",
    coords: {
      lat: 56.54253301116012,
      lng: 21.09799325466156,
    },
    trans_attend: ["12A"],
  },
  {
    name: "Smilgu iela",
    coords: {
      lat: 56.53940068738958,
      lng: 21.099929809570312,
    },
    trans_attend: ["12A"],
  },
  {
    name: "Smilgu iela",
    coords: {
      lat: 56.539365181514896,
      lng: 21.099956631660465,
    },
    trans_attend: ["12A"],
  },
  {
    name: "Pilsētas robeža",
    coords: {
      lat: 56.534869548785665,
      lng: 21.10150694847107,
    },
    trans_attend: ["12A"],
  },
  {
    name: "Autobusu parks",
    coords: {
      lat: 56.53614343357391,
      lng: 21.054804325103763,
    },
    trans_attend: ["4", "9", "23", "9A"],
  },
  {
    name: "Autobusu parks",
    coords: {
      lat: 56.53609312924824,
      lng: 21.05480164289475,
    },
    trans_attend: ["4", "9", "23", "4s", "9A"],
  },
  {
    name: "Saulesdruvas",
    coords: {
      lat: 56.534766239941995,
      lng: 21.05487942695618,
    },
    trans_attend: ["4", "9", "23", "4s", "9A"],
  },
  {
    name: "Satiksmes iela",
    coords: {
      lat: 56.53251220508497,
      lng: 21.04654848575592,
    },
    trans_attend: ["4", "9", "23", "4s", "9A"],
  },
  {
    name: "Satiksmes iela",
    coords: {
      lat: 56.53299161832804,
      lng: 21.048340201377872,
    },
    trans_attend: ["4", "9", "23", "9A"],
  },
  {
    name: "Mehāniksais centrs",
    coords: {
      lat: 56.529734262523476,
      lng: 21.040052175521854,
    },
    trans_attend: ["4", "9", "23", "9A"],
  },
  {
    name: "Brīvības iela",
    coords: {
      lat: 56.527923576996336,
      lng: 21.03616833686829,
    },
    trans_attend: ["4", "9", "23", "9A"],
  },
  {
    name: "Brīvības iela",
    coords: {
      lat: 56.527296232268746,
      lng: 21.034462451934818,
    },
    trans_attend: ["4", "9", "23", "4s", "9A"],
  },
  {
    name: "Brīvības iela",
    coords: {
      lat: 56.52547236449727,
      lng: 21.030364036560062,
    },
    trans_attend: ["T"],
  },
  {
    name: "Brīvības iela",
    coords: {
      lat: 56.52559520055271,
      lng: 21.030645668506622,
    },
    trans_attend: ["T"],
  },
  {
    name: "Metalurgs",
    coords: {
      lat: 56.52418230862621,
      lng: 21.027115881443027,
    },
    trans_attend: ["T"],
  },
  {
    name: "Metalurgs",
    coords: {
      lat: 56.52425487948515,
      lng: 21.0273814201355,
    },
    trans_attend: ["T"],
  },
  {
    name: "Metalurgs",
    coords: {
      lat: 56.52404915858856,
      lng: 21.027105152606968,
    },
    trans_attend: ["4", "9", "9A"],
  },
  {
    name: "Miltu iela",
    coords: {
      lat: 56.52255787002509,
      lng: 21.0283175110817,
    },
    trans_attend: ["22", "23"],
  },
  {
    name: "Zemnieku iela",
    coords: {
      lat: 56.520651057644656,
      lng: 21.027850806713104,
    },
    trans_attend: ["22", "23"],
  },
  {
    name: "Dzelzceļnieku iela",
    coords: {
      lat: 56.52171595169797,
      lng: 21.021467149257663,
    },
    trans_attend: ["T"],
  },
  {
    name: "Dzelzceļnieku iela",
    coords: {
      lat: 56.52177959601364,
      lng: 21.020759046077732,
    },
    trans_attend: ["T"],
  },
  {
    name: "Olimpiskais centrs",
    coords: {
      lat: 56.52127072313359,
      lng: 21.020683944225315,
    },
    trans_attend: ["4", "9", "9A"],
  },
  {
    name: "Olimpiskais centrs",
    coords: {
      lat: 56.52098209882982,
      lng: 21.0199972987175,
    },
    trans_attend: ["4", "9", "22", "23", "4s", "9A"],
  },
  {
    name: "Stacija",
    coords: {
      lat: 56.52369578643726,
      lng: 21.017596721649173,
    },
    trans_attend: ["T"],
  },
  {
    name: "Stacija",
    coords: {
      lat: 56.52318813471133,
      lng: 21.016928851604465,
    },
    trans_attend: ["T"],
  },
  {
    name: "Olimpiskais centrs",
    coords: {
      lat: 56.52025844299007,
      lng: 21.016151010990146,
    },
    trans_attend: ["T"],
  },
  {
    name: "Olimpiskais centrs",
    coords: {
      lat: 56.52062256024106,
      lng: 21.01629585027695,
    },
    trans_attend: ["T"],
  },
  {
    name: "Olimpiskais centrs",
    coords: {
      lat: 56.520172722543315,
      lng: 21.017977595329288,
    },
    trans_attend: ["22"],
  },
  {
    name: "Esperanto iela",
    coords: {
      lat: 56.5173823213335,
      lng: 21.01542949676514,
    },
    trans_attend: ["T"],
  },
  {
    name: "Esperanto iela",
    coords: {
      lat: 56.517151398372924,
      lng: 21.015322208404545,
    },
    trans_attend: ["T"],
  },
  {
    name: "Pīlādžu iela",
    coords: {
      lat: 56.51751406521271,
      lng: 21.014737486839298,
    },
    trans_attend: ["22"],
  },
  {
    name: "T.Breikša iela",
    coords: {
      lat: 56.51888385591636,
      lng: 21.013004779815677,
    },
    trans_attend: ["22"],
  },
  {
    name: "Raiņa iela",
    coords: {
      lat: 56.5170107192243,
      lng: 21.01193726062775,
    },
    trans_attend: [
      "3",
      "6",
      "7",
      "8",
      "10",
      "11",
      "22",
      "25",
      "1A",
      "6A",
      "10A",
      "11A",
    ],
  },
  {
    name: "Raiņa iela",
    coords: {
      lat: 56.51773554102306,
      lng: 21.0109555721283,
    },
    trans_attend: [
      "3",
      "6",
      "7",
      "8",
      "10",
      "11",
      "22",
      "25",
      "1A",
      "2s",
      "6A",
      "10A",
      "11A",
    ],
  },
  {
    name: "Pārbrauktuve",
    coords: {
      lat: 56.520561940045454,
      lng: 21.006851792335514,
    },
    trans_attend: [
      "3",
      "6",
      "7",
      "8",
      "10",
      "11",
      "25",
      "1A",
      "2s",
      "6A",
      "10A",
      "11A",
    ],
  },
  {
    name: "1905.gada iela",
    coords: {
      lat: 56.5207485644864,
      lng: 21.007065027952198,
    },
    trans_attend: ["22"],
  },
  {
    name: "Pārbrauktuve",
    coords: {
      lat: 56.52177550234474,
      lng: 21.005001068115238,
    },
    trans_attend: [
      "3",
      "6",
      "7",
      "8",
      "10",
      "11",
      "22",
      "25",
      "1A",
      "6A",
      "10A",
      "11A",
    ],
  },
  {
    name: "Sliežu iela",
    coords: {
      lat: 56.523855702571396,
      lng: 21.004266142845157,
    },
    trans_attend: ["10", "22", "25", "2s", "10A"],
  },
  {
    name: "Buru iela",
    coords: {
      lat: 56.526844119301316,
      lng: 21.00368142127991,
    },
    trans_attend: ["10", "22", "25", "2s", "10A"],
  },
  {
    name: "Buru iela",
    coords: {
      lat: 56.526752365310294,
      lng: 21.003649234771732,
    },
    trans_attend: ["10", "22", "25", "10A"],
  },
  {
    name: "Ziemeļu kapi",
    coords: {
      lat: 56.53143601328235,
      lng: 21.002774834632877,
    },
    trans_attend: ["10", "22", "25", "2s", "10A"],
  },
  {
    name: "Flotes iela",
    coords: {
      lat: 56.5240904419962,
      lng: 21.01121306419373,
    },
    trans_attend: ["3", "6", "7", "8", "11", "1A", "6A", "11A"],
  },
  {
    name: "Flotes iela",
    coords: {
      lat: 56.524091922005034,
      lng: 21.01105481386185,
    },
    trans_attend: ["3", "6", "7", "8", "11", "1A", "6A", "11A"],
  },
  {
    name: "Krūmu iela",
    coords: {
      lat: 56.529633728404065,
      lng: 21.011824607849125,
    },
    trans_attend: ["3", "6", "7", "8", "11", "1A", "6A", "11A"],
  },
  {
    name: "Krūmu iela",
    coords: {
      lat: 56.5295064660511,
      lng: 21.011787056922916,
    },
    trans_attend: ["3", "6", "7", "8", "11", "1A", "6A", "11A"],
  },
  {
    name: "Rīgas iela",
    coords: {
      lat: 56.51439869540272,
      lng: 21.01480454206467,
    },
    trans_attend: ["3", "6", "7", "8", "10", "11", "25", "6A", "10A", "11A"],
  },
  {
    name: "Rīgas iela",
    coords: {
      lat: 56.51377438841533,
      lng: 21.014501452445984,
    },
    trans_attend: ["3", "6", "7", "8", "10", "11", "25", "6A", "10A", "11A"],
  },
  {
    name: "Esperanto iela",
    coords: {
      lat: 56.51447735319591,
      lng: 21.016480922698978,
    },
    trans_attend: ["4", "9", "22", "23", "4s", "9A"],
  },
  {
    name: "Esperanto iela",
    coords: {
      lat: 56.51513132157159,
      lng: 21.016802787780765,
    },
    trans_attend: ["4", "9", "4s", "9A"],
  },
  {
    name: "Tirgus iela",
    coords: {
      lat: 56.517034290023,
      lng: 21.024532914161686,
    },
    trans_attend: ["22", "23"],
  },
  {
    name: "Radio iela",
    coords: {
      lat: 56.51198956665398,
      lng: 21.011725366115574,
    },
    trans_attend: ["25"],
  },
  {
    name: "Radio iela",
    coords: {
      lat: 56.51194959363218,
      lng: 21.012245714664463,
    },
    trans_attend: ["25"],
  },
  {
    name: "Koncertzāle",
    coords: {
      lat: 56.51130139964532,
      lng: 21.014050841331485,
    },
    trans_attend: [
      "3",
      "4",
      "6",
      "7",
      "8",
      "10",
      "11",
      "22",
      "1A",
      "4s",
      "6A",
      "10A",
      "11A",
    ],
  },
  {
    name: "Līva",
    coords: {
      lat: 56.509574306397276,
      lng: 21.012245714664463,
    },
    trans_attend: [
      "3",
      "4",
      "6",
      "7",
      "8",
      "10",
      "11",
      "22",
      "1A",
      "2s",
      "6A",
      "10A",
      "11A",
    ],
  },
  {
    name: "Līva",
    coords: {
      lat: 56.509128650450336,
      lng: 21.011639535427097,
    },
    trans_attend: [
      "3",
      "4",
      "6",
      "7",
      "8",
      "10",
      "11",
      "22",
      "1A",
      "4s",
      "6A",
      "10A",
      "11A",
    ],
  },
  {
    name: "Liepājas Universitāte",
    coords: {
      lat: 56.50844480649468,
      lng: 21.009796857833862,
    },
    trans_attend: ["6", "1A", "6A"],
  },
  {
    name: "Liepājas Universitāte",
    coords: {
      lat: 56.5087468517616,
      lng: 21.008992195129398,
    },
    trans_attend: ["6", "1A", "2s", "6A"],
  },
  {
    name: "Jūras iela",
    coords: {
      lat: 56.51053920301431,
      lng: 21.006189286708835,
    },
    trans_attend: ["6", "1A", "6A"],
  },
  {
    name: "Graudu iela",
    coords: {
      lat: 56.51075684149819,
      lng: 21.00430637598038,
    },
    trans_attend: ["6", "25", "1A", "2s", "6A"],
  },
  {
    name: "Kūrmājas prospekts",
    coords: {
      lat: 56.51032612355418,
      lng: 21.000132858753208,
    },
    trans_attend: ["6", "25", "1A", "6A"],
  },
  {
    name: "Kūrmājas prospekts",
    coords: {
      lat: 56.5090606520307,
      lng: 20.9997895359993,
    },
    trans_attend: ["6", "25", "1A", "2s", "6A"],
  },
  {
    name: "Peldu iela",
    coords: {
      lat: 56.50653227614955,
      lng: 21.000875830650333,
    },
    trans_attend: ["6", "25", "1A", "6A"],
  },
  {
    name: "Peldu iela",
    coords: {
      lat: 56.50528481687705,
      lng: 21.00144982337952,
    },
    trans_attend: ["6", "25", "1A", "6A"],
  },
  {
    name: "Peldu iela",
    coords: {
      lat: 56.502870450086654,
      lng: 21.00247979164124,
    },
    trans_attend: ["6", "25", "1A", "6A"],
  },
  {
    name: "Jūrmalas iela",
    coords: {
      lat: 56.500741847054584,
      lng: 21.003397107124332,
    },
    trans_attend: ["6", "11", "25", "1A", "6A", "11A"],
  },
  {
    name: "Jūrmalas iela",
    coords: {
      lat: 56.50066347198146,
      lng: 21.00341856479645,
    },
    trans_attend: ["6", "11", "25", "1A", "6A", "11A"],
  },
  {
    name: "Robežu iela",
    coords: {
      lat: 56.49856265223837,
      lng: 21.003756523132328,
    },
    trans_attend: ["6", "11", "25", "1A", "6A", "11A"],
  },
  {
    name: "Robežu iela",
    coords: {
      lat: 56.49793173848674,
      lng: 21.003885269165043,
    },
    trans_attend: ["6", "11", "25", "1A", "6A", "11A"],
  },
  {
    name: "Palangas iela",
    coords: {
      lat: 56.495142851933124,
      lng: 21.004373431205753,
    },
    trans_attend: ["6", "11", "25", "1A", "2s", "6A", "11A"],
  },
  {
    name: "Palangas iela",
    coords: {
      lat: 56.49441558015101,
      lng: 21.004515588283542,
    },
    trans_attend: ["6", "11", "25", "1A", "6A", "11A"],
  },
  {
    name: "Ventas iela",
    coords: {
      lat: 56.49061176687997,
      lng: 21.005617976188663,
    },
    trans_attend: ["6", "11", "25", "1A", "2s", "6A", "11A"],
  },
  {
    name: "Ventas iela",
    coords: {
      lat: 56.49029476385661,
      lng: 21.005626022815708,
    },
    trans_attend: ["6", "11", "25", "1A", "6A", "11A"],
  },
  {
    name: "Klaipēdas iela",
    coords: {
      lat: 56.48743539243858,
      lng: 21.005832552909855,
    },
    trans_attend: ["6", "11", "25", "1A", "2s", "6A", "11A"],
  },
  {
    name: "Klaipēdas iela",
    coords: {
      lat: 56.48728280377305,
      lng: 21.00582450628281,
    },
    trans_attend: ["6", "11", "25", "1A", "6A", "11A"],
  },
  {
    name: "Zivju iela",
    coords: {
      lat: 56.50568615714687,
      lng: 21.011084318161014,
    },
    trans_attend: ["3", "4", "7", "10", "11", "22", "10A", "11A"],
  },
  {
    name: "Pētertirgus",
    coords: {
      lat: 56.50520047535415,
      lng: 21.01164758205414,
    },
    trans_attend: ["3", "4", "7", "9", "10", "11", "22", "23", "9A", "11A"],
  },
  {
    name: "Pētertirgus",
    coords: {
      lat: 56.503995128416975,
      lng: 21.00992023944855,
    },
    trans_attend: [
      "3",
      "4",
      "7",
      "9",
      "10",
      "11",
      "22",
      "23",
      "9A",
      "10A",
      "11A",
    ],
  },
  {
    name: "Kuršu iela",
    coords: {
      lat: 56.50256251173176,
      lng: 21.008922457695007,
    },
    trans_attend: ["3", "4", "9", "9A", "10A"],
  },
  {
    name: "Siena tirgus",
    coords: {
      lat: 56.502380366784024,
      lng: 21.00815534591675,
    },
    trans_attend: ["7", "11", "11A"],
  },
  {
    name: "Siena tirgus",
    coords: {
      lat: 56.50194203064064,
      lng: 21.00784689188004,
    },
    trans_attend: ["7", "11", "11A"],
  },
  {
    name: "Kuršu iela",
    coords: {
      lat: 56.5013594494207,
      lng: 21.008107066154484,
    },
    trans_attend: ["3", "4", "9", "10", "10A"],
  },
  {
    name: "Kungu iela",
    coords: {
      lat: 56.506109160763764,
      lng: 21.019098758697513,
    },
    trans_attend: ["9", "23", "9A"],
  },
  {
    name: "Kungu iela",
    coords: {
      lat: 56.50611212218596,
      lng: 21.01945817470551,
    },
    trans_attend: ["9", "23", "9A"],
  },
  {
    name: "Baznīcas iela",
    coords: {
      lat: 56.50792098697509,
      lng: 21.022011637687687,
    },
    trans_attend: ["9", "23", "9A"],
  },
  {
    name: "Jaunā iela",
    coords: {
      lat: 56.50981807755046,
      lng: 21.023325920104984,
    },
    trans_attend: ["9", "23", "9A"],
  },
  {
    name: "Jaunā iela",
    coords: {
      lat: 56.508912394781206,
      lng: 21.025750637054447,
    },
    trans_attend: ["9", "23", "9A"],
  },
  {
    name: "Dārza iela",
    coords: {
      lat: 56.506097478481486,
      lng: 21.024838685989383,
    },
    trans_attend: ["9", "23", "9A"],
  },
  {
    name: "Ganību iela",
    coords: {
      lat: 56.50069898964906,
      lng: 21.016813516616825,
    },
    trans_attend: ["3", "4", "9", "10", "9A", "10A"],
  },
  {
    name: "Ganību iela",
    coords: {
      lat: 56.49997300027446,
      lng: 21.01656943559647,
    },
    trans_attend: ["3", "4", "9", "10", "9A", "10A"],
  },
  {
    name: "Raiņa vidusskola",
    coords: {
      lat: 56.497181365140854,
      lng: 21.016561388969425,
    },
    trans_attend: ["3", "4", "9", "10", "9A", "10A"],
  },
  {
    name: "Salmu iela",
    coords: {
      lat: 56.49754561995559,
      lng: 21.019586920738224,
    },
    trans_attend: ["3", "4", "9", "10", "9A", "10A"],
  },
  {
    name: "Lauku iela",
    coords: {
      lat: 56.49522110516929,
      lng: 21.018924415111545,
    },
    trans_attend: ["3", "4", "9", "10", "9A", "10A"],
  },
  {
    name: "Lauku iela",
    coords: {
      lat: 56.49486363940153,
      lng: 21.017358005046848,
    },
    trans_attend: ["3", "4", "9", "10", "9A", "10A"],
  },
  {
    name: "Nīcas iela",
    coords: {
      lat: 56.49273337857299,
      lng: 21.018369197845463,
    },
    trans_attend: ["2s"],
  },
  {
    name: "Dzērves iela",
    coords: {
      lat: 56.49243824725947,
      lng: 21.02046668529511,
    },
    trans_attend: ["3", "4", "9", "10", "2s", "9A", "10A"],
  },
  {
    name: "Dzērves iela",
    coords: {
      lat: 56.491937583135154,
      lng: 21.020359396934513,
    },
    trans_attend: ["3", "4", "9", "10", "2s", "9A", "10A"],
  },
  {
    name: "E. Tisē iela",
    coords: {
      lat: 56.48968739155598,
      lng: 21.019849777221683,
    },
    trans_attend: ["3", "4", "9", "10", "2s", "9A", "10A"],
  },
  {
    name: "E. Tisē iela",
    coords: {
      lat: 56.48893820720965,
      lng: 21.018514037132263,
    },
    trans_attend: ["3", "4", "9", "10", "2s", "9A", "10A"],
  },
  {
    name: "Tukuma iela",
    coords: {
      lat: 56.48771649006829,
      lng: 21.012291312217716,
    },
    trans_attend: ["2s"],
  },
  {
    name: "Centrālkapi",
    coords: {
      lat: 56.48585226241979,
      lng: 21.008951961994175,
    },
    trans_attend: ["6", "1A", "6A"],
  },
  {
    name: "Centrālkapi",
    coords: {
      lat: 56.485844854908116,
      lng: 21.009151786565784,
    },
    trans_attend: ["6", "1A", "6A"],
  },
  {
    name: "Centrālkapi",
    coords: {
      lat: 56.48466710043548,
      lng: 21.005993485450748,
    },
    trans_attend: ["11A"],
  },
  {
    name: "Centrālkapi",
    coords: {
      lat: 56.484438941286164,
      lng: 21.006063222885135,
    },
    trans_attend: ["11A"],
  },
  {
    name: "Dienvidu robeža",
    coords: {
      lat: 56.476771472561346,
      lng: 21.008761525154117,
    },
    trans_attend: ["1A", "10A", "11A"],
  },
  {
    name: "Dienvidu robeža",
    coords: {
      lat: 56.47747238432245,
      lng: 21.008595228195194,
    },
    trans_attend: ["1A", "10A", "11A"],
  },
  {
    name: "Dienvidu kapi",
    coords: {
      lat: 56.47291674696083,
      lng: 21.009252369403843,
    },
    trans_attend: ["1A", "10A", "11A"],
  },
  {
    name: "Tonus Elast",
    coords: {
      lat: 56.453926999427736,
      lng: 21.011215746402744,
    },
    trans_attend: ["1A"],
  },
  {
    name: "K.Zāles laukums",
    coords: {
      lat: 56.51209233930211,
      lng: 21.01872324943543,
    },
    trans_attend: ["22"],
  },
  {
    name: "Ādu iela",
    coords: {
      lat: 56.51128436527524,
      lng: 21.022703647613525,
    },
    trans_attend: ["9", "23", "9A"],
  },
  {
    name: "Vaiņodes iela",
    coords: {
      lat: 56.48615848190225,
      lng: 21.016384363174442,
    },
    trans_attend: ["3", "4", "9", "10", "2s", "9A", "10A"],
  },
  {
    name: "Vaiņodes iela",
    coords: {
      lat: 56.48480327746066,
      lng: 21.015874743461612,
    },
    trans_attend: ["3", "4", "6", "9", "10", "1A", "6A", "9A", "10A"],
  },
  {
    name: "Svētes iela",
    coords: {
      lat: 56.48302910274455,
      lng: 21.01472675800324,
    },
    trans_attend: ["1A", "10A"],
  },
  {
    name: "Rojas iela",
    coords: {
      lat: 56.48346109002931,
      lng: 21.017859578132633,
    },
    trans_attend: ["3", "4", "6", "9", "10", "2s", "6A", "9A"],
  },
  {
    name: "Rojas iela",
    coords: {
      lat: 56.48306163290836,
      lng: 21.01915776729584,
    },
    trans_attend: ["3", "4", "6", "9", "10", "6A", "9A"],
  },
  {
    name: "M. Ķempes iela",
    coords: {
      lat: 56.48196117487996,
      lng: 21.026024222373962,
    },
    trans_attend: ["3", "4", "6", "9", "10", "2s", "6A", "9A"],
  },
  {
    name: "M. Ķempes iela",
    coords: {
      lat: 56.48158483286921,
      lng: 21.02720439434052,
    },
    trans_attend: ["3", "4", "6", "9", "10", "6A", "9A"],
  },
  {
    name: "Koncertzāle",
    coords: {
      lat: 56.51097573493228,
      lng: 21.013825535774235,
    },
    trans_attend: ["T"],
  },
  {
    name: "Koncertzāle",
    coords: {
      lat: 56.51089874775666,
      lng: 21.013755798339847,
    },
    trans_attend: ["T"],
  },
  {
    name: "Rožu laukums",
    coords: {
      lat: 56.508445002788996,
      lng: 21.011127233505253,
    },
    trans_attend: ["T"],
  },
  {
    name: "Rožu laukums",
    coords: {
      lat: 56.50826436672549,
      lng: 21.010947525501255,
    },
    trans_attend: ["T"],
  },
  {
    name: "Pētertirgus",
    coords: {
      lat: 56.50546981119077,
      lng: 21.00680619478226,
    },
    trans_attend: ["T"],
  },
  {
    name: "Pētertirgus",
    coords: {
      lat: 56.50489556058435,
      lng: 21.006688177585605,
    },
    trans_attend: ["T"],
  },
  {
    name: "Jūrmalas iela",
    coords: {
      lat: 56.501935299394994,
      lng: 21.00624024868012,
    },
    trans_attend: ["T"],
  },
  {
    name: "Jūrmalas iela",
    coords: {
      lat: 56.50091579238561,
      lng: 21.006169370887484,
    },
    trans_attend: ["T"],
  },
  {
    name: "Līvas laukums",
    coords: {
      lat: 56.49799769671764,
      lng: 21.006684355018344,
    },
    trans_attend: ["T"],
  },
  {
    name: "Līvas laukums",
    coords: {
      lat: 56.497440490602116,
      lng: 21.006489694118503,
    },
    trans_attend: ["T"],
  },
  {
    name: "Ventas iela",
    coords: {
      lat: 56.49169575394459,
      lng: 21.005384624004368,
    },
    trans_attend: ["T"],
  },
  {
    name: "Ventas iela",
    coords: {
      lat: 56.49088869325624,
      lng: 21.00547850131989,
    },
    trans_attend: ["T"],
  },
  {
    name: "Klaipēdas iela",
    coords: {
      lat: 56.48728434295346,
      lng: 21.005652844905857,
    },
    trans_attend: ["T"],
  },
  {
    name: "Klaipēdas iela",
    coords: {
      lat: 56.48702064460042,
      lng: 21.005642116069797,
    },
    trans_attend: ["T"],
  },
  {
    name: "Tukuma iela",
    coords: {
      lat: 56.48715991097471,
      lng: 21.009354293346405,
    },
    trans_attend: ["T"],
  },
  {
    name: "Tukuma iela",
    coords: {
      lat: 56.487220650422515,
      lng: 21.010032892227176,
    },
    trans_attend: ["T"],
  },
  {
    name: "Vaiņodes iela",
    coords: {
      lat: 56.48541389603778,
      lng: 21.012728512287143,
    },
    trans_attend: ["T"],
  },
  {
    name: "Vaiņodes iela",
    coords: {
      lat: 56.4851427770363,
      lng: 21.01302891969681,
    },
    trans_attend: ["T"],
  },
  {
    name: "Ganību iela",
    coords: {
      lat: 56.48377574495424,
      lng: 21.015805006027225,
    },
    trans_attend: ["T"],
  },
  {
    name: "Ganību iela",
    coords: {
      lat: 56.48363054951642,
      lng: 21.0164487361908,
    },
    trans_attend: ["T"],
  },
  {
    name: "Cieceres iela",
    coords: {
      lat: 56.482779091481575,
      lng: 21.021255254745487,
    },
    trans_attend: ["T"],
  },
  {
    name: "Cieceres iela",
    coords: {
      lat: 56.48262352083396,
      lng: 21.021955311298374,
    },
    trans_attend: ["T"],
  },
  {
    name: "Mirdzas Ķempes iela",
    coords: {
      lat: 56.48189784792875,
      lng: 21.025992035865787,
    },
    trans_attend: ["T"],
  },
  {
    name: "Mirdzas Ķempes iela",
    coords: {
      lat: 56.48173042036528,
      lng: 21.026745736598972,
    },
    trans_attend: ["T"],
  },
  {
    name: "Biznesa centrs",
    coords: {
      lat: 56.560594715973494,
      lng: 21.093134433031086,
    },
    trans_attend: ["6A", "9A", "12B"],
  },
  {
    name: "Biznesa centrs",
    coords: {
      lat: 56.56054520432922,
      lng: 21.09316125512123,
    },
    trans_attend: ["6A", "9A", "12B"],
  },
];

export default { stations };
