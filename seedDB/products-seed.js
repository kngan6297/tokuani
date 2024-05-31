const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const Product = require("../models/product");
const Category = require("../models/category");
const mongoose = require("mongoose");
const faker = require("faker");
const connectDB = require("./../config/db");
connectDB();

async function seedDB() {
  faker.seed(0);

  //----------------------Nendoroid
  const nendoroid_titles = [
    "2492 Nendoroid Kazusa Kyoyama",
    "2480 Nendoroid Archer/Baobhan Sith",
    "2474 Nendoroid Winry Rockbell",
    "2475 Nendoroid Takane Lui",
    "2487 Nendoroid Tama Kunimi",
    "2488 Nendoroid MEMcho",
    "539 Nendoroid Hatsune Miku: Harvest Moon Ver.",
    "2465 Nendoroid Marika Yamagata",
    "2477 Nendoroid Racing Miku: 2024 Ver.",
    "2483 Nendoroid Kikoru Shinomiya"
  ];
  const nendoroid_imgs = [
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/35759/uBeg6VziRP5Q0vAmb2LDTfqw3C7MUEWa.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/56924/gwWAai6XDnJ0Vr4PSmkz8CNvyMGuRdEp.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/34673/tH1CD4vfJbeMcPV79ysWNEjQ3XAwzr5g.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/46618/3H7eDXCWBLp58wNMhnRP4dUgKJz9is1c.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/35123/kgSwnXvNB0qhWfrsTtyELMH6QRuPAVxc.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/34675/byuQjYm7sgHPdEtV5Ra41Nk9S3eUiqGz.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/product/20150709/5128/34574/large/718beffd98da79e4f9e07af02d755f8b.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/36457/pxq7v60LGMR3Bh2UkWA9tdsFzSDgPnaV.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/35622/J6cfmN3HUw7TaEWVBR2GYeCLF1rbvy5u.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/44945/xKeLuYSgX0Rfwh4UkPnt67rmyGp2dsj9.jpg"
  ];

  //--------------------figma
  const figma_titles = [
    "629 figma Sakamata Chloe",
    "628 figma Alice",
    "399 figma Aqua",
    "627 figma Takanashi Kiara",
    "625 figma Veronica Sweetheart",
    "623-DX figma Ciel DX Edition",
    "621 figma SAMURAI",
    "620 figma Kazusa Kyoyama",
    "619 figma La+ Darknesss",
    "567 figma Shiroko Sunaookami",
    "617 figma Makima"
  ];
  const figma_imgs = [
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/57559/erNSMvU253KZG6zFt7LqYi9cBHQkuyDR.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/57519/HuQpjtay5DYx96sZKFE4vMXThzGLkSfJ.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/product/20180619/7357/52686/large/0db9409549ca20590cbaf4ed36868029.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/46899/xvZrKkq7cQ3FVdEJ2gzGwm5sYTyUh0H6.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/34654/jVqTgzknK03vZ4CbmBPaJ81wDuN6X9dH.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/57486/Xb9eUGmESpQdztJCksPVx0KA6N8in1fT.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/34655/PrU8Sd4yWtkVJ56a3jYzKTA2bqHcxfD9.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/product/20231128/15293/124118/large/0be17f44dd14fd62481ec9e3fc8d4ab7.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/product/20231117/15229/123441/large/a268bc5acfeca57a1fe1512bd1660fd0.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/product/20220407/12549/97545/large/2a2cbbe503e4914e9ebe50f69a353df7.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/product/20231117/15241/123607/large/054a5fdf979cd40c465a198d5020195f.jpg"
  ];

  //--------------------Scale Figure
  const scalefigure_titles = [
    "Scarlet",
    "Sword Art Online the Movie -Progressive- Scherzo of Deep Night - Kirito & Asuna Set",
    "Miyako (Swimsuit): Memorial Lobby Ver.",
    "Ushio Kofune",
    "Ikuyo Kita",
    "Cheshire: Summery Date!",
    "Cirno: Summer Frost Ver. (Suntanned Ver.)",
    "Hatsune Miku: Beauty Looking Back Miku Ver.",
    "FAIRY TAIL Erza Scarlet: Ataraxia Armor Ver.",
    "Caster/Altria Caster"
  ];
  const scalefigure_imgs = [
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/36119/8H9aEjBLRVXcuUv3tkmCNxqfM5nzZ7Je.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/61231/Tf7y0swSUF1K65eYpGgRd9kQDXmAtZjC.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/57300/DCBPsyRKt6f2dNwHb5xAcSgpJ0kVq7mr.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/45971/A80KMxdnLFRGWXBwhZiJcmVgufvkUEtr.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/55196/d4sQWzH0AVjbf61qEGg38Y5LaT7nPi2r.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/36232/HLmyXq51JBrUMKtnPcfb2VxSukYwdZ9v.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/60346/i6qWZfRTMdGutzShLpNyHsnXQajrU4Ag.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/45694/w5gkzuAW0QnUTNRjDXBx9hY1scPLGEbC.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/61181/P7vVjJFMGAUCxWweHDy30c26kgBzL89Y.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/47307/sSXWUaeA25xy1iMg36P0BHGcQvDRVd4n.jpg"
  ];

  //--------------------POP UP PARADE
  const popupparade_titles = [
    "POP UP PARADE Elaina L Size",
    "POP UP PARADE Mina Ashiro",
    "POP UP PARADE Kikoru Shinomiya",
    "POP UP PARADE Chun-Li: Pink Costume Ver.",
    "POP UP PARADE Kyoka Uzen",
    "POP UP PARADE Hatsune Miku: Translucent Color Ver.",
    "POP UP PARADE Rikka Takarada L Size",
    "POP UP PARADE Kurumi Tokisaki: School Uniform Ver. L Size",
    "POP UP PARADE Zundamon",
    "POP UP PARADE Zero Two: Pilot Suit Ver. L Size"
  ];
  const popupparade_imgs = [
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/55963/gDrwTquL57vNRAYM2hzFcQX3CasWEipH.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/44953/TtXu1R8jx0vLBnm5NdYS9frF2JDaEhwp.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/44952/FYAfrXVaE7m2L9xdUSct5New1ZMvPhsW.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/60245/rUNXe2jtmL7bhdazgv3iqBK48QMYwHGy.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/56338/UVh2DsWauq94LevbtGykgMzcrxJKAXP8.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/60461/VMY3PBQ0XET2pvrHkmiaKCDdnyUsFbc9.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/35063/XJzR1ce2gU3QuSixCrjmqDbN5469vdp8.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/56117/gvT2G3iPasNCn6SRV45tWd8bAwMmu0D1.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/36137/brBLXpmnyPMv972A8W5s3ihuqDERZNcS.jpg",
    "https://www.goodsmile.com/gsc-webrevo-sdk-storage-prd/product/image/55666/hTLpJB2vC7UGQeb9aH5gN1f6wrxAPiFc.jpg"
  ];

  //--------------------S.H.Figuarts
  const shf_titles = [
    "S.H.Figuarts KAMEN RIDER HOROBI ARK SCORPION FINAL BATTLE WEAPONS SET",
    "S.H.Figuarts KAMEN RIDER VALVARAD",
    "S.H.Figuarts (SHINKOCCHOU SEIHOU) KAMEN RIDER GAIM ORANGE ARMS",
    "S.H.Figuarts KAMEN RIDER BUFFA FEVER ZOMBIE FORM",
    "S.H.Figuarts (SHINKOCCHOU SEIHOU) MASKED RIDER HIBIKI SHINKOCCHOU SEIHOU 10th Anniversary Ver.",
    "S.H.Figuarts BROTHERS' MANTLE",
    "S.H.Figuarts GOMORA ARMOR [ULTRAMAN NEW GENERATION STARS Ver.]",
    "S.H.Figuarts ULTRAMAN ORB ORB TRINITY",
    "S.H.Figuarts (SHINKOCCHOU SEIHOU) EVIL TIGA",
    "S.H.Figuarts STAK EARTH GALLON Mod.2/Mod.3/Mod.4 Option Parts Set"
  ];
  const shf_imgs = [
    "https://tamashiiweb.com/images/item/item_0000014915_6biL8gj8_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014891_YxK14Yqg_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014823_M0Lq4MUL_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014865_UFk7UrLJ_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014827_lkT7h4yn_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014970_EKcBkkfK_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014969_mW4gakfH_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014968_pzhXacU8_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014871_gUj1EY0N_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014862_SwBrww1X_01.jpg"
  ];

  //-----------------------FiguartsZERO
  const figuartszero_titles = [
    "FiguartsZERO [Super Fierce Battle] Super Saiyan 2 SON GOHAN- The Raging True Power!!-",
    "FiguartsZERO [Super Fierce Battle] MARSHALL.D.TEACH -KUROUZU-",
    "FiguartsZERO [Super Fierce Battle] Minato Namikaze-Rasengan-",
    "FiguartsZERO [EXTRA BATTLE] YAMATO -ONE PIECE BOUNTY RUSH 5th Anniversary-",
    "FiguartsZERO [EXTRA BATTLE] PORTGAS.D.ACE -ONE PIECE BOUNTY RUSH 5th Anniversary-",
    "FiguartsZERO [EXTRA BATTLE] ITACHI UCHIHA -The Light & Dark of the Mangekyo Sharingan-",
    "FiguartsZERO [Super Battle] SASUKE UCHIHA -The Light & Dark of the Mangekyo Sharingan-",
    "Figuarts Zero chouette Super Sailor Moon -Bright Moon & Legendary Silver Crystal-［Special Color Edition］",
    "Figuarts Zero chouette Sailor Cosmos -Darkness calls to light, and light, summons darkness-",
    "FiguartsZERO POWER",
  ];
  const figuartszero_imgs = [
    "https://tamashiiweb.com/images/item/item_0000014956_sCTRNefr_08.jpg",
    "https://tamashiiweb.com/images/item/item_0000014841_0gZy0OMX_06.jpg",
    "https://tamashiiweb.com/images/item/item_0000014870_9xPwHxtD_07.jpg",
    "https://tamashiiweb.com/images/item/item_0000014774_YIu8wBuR_03.jpg",
    "https://tamashiiweb.com/images/item/item_0000014773_VtVSdlMJ_03.jpg",
    "https://tamashiiweb.com/images/item/item_0000014699_DAATbovf_07.jpg",
    "https://tamashiiweb.com/images/item/item_0000014698_CCPsWvXs_07.jpg",
    "https://tamashiiweb.com/images/item/item_0000014723_iNqudw4O_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014720_NeYjvrD6_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014627_wwdEtMWP_09.jpg",
  ];

  //-----------------S.H.MonsterArts
  const shm_titles = [
    "S.H.MonsterArts Elemental Hero Flame Wingman",
    "S.H.MonsterArts Godzilla (1954) 70th Anniversary Special Ver.",
    "S.H.MonsterArts SKAR KING FROM GODZILLA × KONG: THE NEW EMPIRE",
    "S.H.MonsterArts GODZILLA [2016] THE FOURTH ORTHOchromatic Ver.",
    "S.H.MonsterArts GODZILLA (2024) EVOLVED Ver. FROM GODZILLA × KONG: THE NEW EMPIRE",
    "S.H.MonsterArts GODZILLA [2023] MINUS COLOR Ver.",
    "S.H.MonsterArts ZINOGRE -20th Anniversary Edition-",
    "S.H.MonsterArts RATHALOS -20th Anniversary Edition-",
    "S.H.MonsterArts KONG FROM GODZILLA x KONG: THE NEW EMPIRE [2024]",
    "S.H.MonsterArts GODZILLA FROM GODZILLA x KONG: THE NEW EMPIRE [2024]",
  ];
  const shm_imgs = [
    "https://tamashiiweb.com/images/item/item_0000014945_mjT5oB8J_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014944_EBML31bz_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014964_OqMG5NLr_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014958_5PcjwKDt_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014925_0ndD5P8U_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014910_r9ENoof1_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014802_9xvIAkgZ_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014801_rri6xy2o_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014621_rLJEBSLK_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014620_7kJwluIx_01.jpg",
  ];

  //-----------------PROPLICA
  const proplica_titles = [
    "PROPLICA Nichirin Sword（Giyu Tomioka）",
    "PROPLICA THE LEGEND OF ZELDA MASTER SWORD",
    "PROPLICA TRANSFORMATION BROOCH&DISGUISE PEN SET-Brilliant Color Edition-",
    "PROPLICA Heart-shift bracelets",
    "PROPLICA MOON STICK -Brilliant Color Edition-",
    "PROPLICA VANITIM",
    "PROPLICA Eternal Tiare",
    "PROPLICA Nichirin Sword (Muichiro Tokito)",
    "PROPLICA Touken Ranbu ONLINE PROPLICA Mikazuki Munechika",
    "PROPLICA Eternal Moon Article"
  ];
  const proplica_imgs = [
    "https://tamashiiweb.com/images/item/item_0000014967_oCyGIwCK_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014850_OPEQLisB_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014914_HqF2tGC3_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014849_rbzOqjSb_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014739_ShHO3xHC_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014517_KR4fFE59_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014544_cOM1lF8B_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014495_s74MiDVi_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014405_Dtlu7yiP_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014270_LfUPeDld_01.jpg"
  ];

  //-----------------METAL BUILD
  const metalbuild_titles = [
    "METAL BUILD Destiny Gundam (Full Package)",
    "METAL BUILD Strike FREEDOM GUNDAM",
    "METAL BUILD GUNDAM DYNAMES SAGA",
    "METAL BUILD Gundam Astray Blue Frame (fully equipped with weapons) -PROJECT ASTRAY-",
    "METAL BUILD EVANGELION 01 TEST TYPE CHOGOKIN 50th Exclusive",
    "METAL BUILD DRAGON SCALE RYUOUMARU",
    "METAL BUILD LAUNCHER STRIKER",
    "METAL BUILD SWORD STRIKER",
    "METAL BUILD DRAGON SCALE LANCELOT ALBION",
    "METAL BUILD AILE STRIKER -STORE LIMITED EDITION-"
  ];
  const metalbuild_imgs = [
    "https://tamashiiweb.com/images/item/item_0000014988_Qwj7Omi3_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014987_SNtYhSZ9_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014963_95NO8XXy_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014924_qqJiVsEi_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014922_nofOAzQ8_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014762_2P4sCA7E_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014776_kwwhVPhf_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014775_R422GnLs_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014710_30ZiTwfS_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014724_zPOVGvcZ_01.jpg"
  ];

  //-----------------THE ROBOT SPIRITS
  const therobotspirits_titles = [
    "THE ROBOT SPIRITS ＜SIDE EVA＞EVANGELION 00 PROTO TYPE (modified)",
    "THE ROBOT SPIRITS <SIDE EVA> Evangelion Unit 2",
    "THE ROBOT SPIRITS ＜SIDE AC＞IB-07: SOL 644 / Ayre",
    "THE ROBOT SPIRITS ＜SIDE MS＞RMS-106 HI-ZACK ver. A.N.I.M.E.",
    "THE ROBOT SPIRITS ＜SIDE MS＞ MSJ-R122 Demi-birding ver. A.N.I.M.E.",
    "THE ROBOT SPIRITS ＜SIDE MS＞Amuro Ray’s DIJEH",
    "THE ROBOT SPIRITS ＜SIDE MS＞MS-07H GOUF FLYING TEST TYPE JABURO BASE ver. A.N.I.M.E.",
    "THE ROBOT SPIRITS ＜SIDE MS＞RGC-80 GM CANNON JABURO BASE ver. A.N.I.M.E.",
    "THE ROBOT SPIRITS <SIDE AB> Botune (King Foizon machine)",
    "THE ROBOT SPIRITS <SIDE AB> BOZUNE GENERAL USE ＆ AURA BATTLER PRODUCTION STAND SET"
  ];
  const therobotspirits_imgs = [
    "https://tamashiiweb.com/images/item/item_0000014986_NY1WfNj8_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014985_ZmZdDh6A_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014879_Mrn63I7R_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014878_e2ZXCXBX_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014923_KlSL9o2J_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014916_7vZeg1EA_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014912_a20rr0GJ_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014911_GEZCaNcC_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014897_l1YmB4Cz_01.jpg",
    "https://tamashiiweb.com/images/item/item_0000014896_N4QfhM4I_01.jpg"
  ];

  async function seedProducts(titlesArr, imgsArr, categStr) {
    try {
      const categ = await Category.findOne({ title: categStr });
      for (let i = 0; i < titlesArr.length; i++) {
        let prod = new Product({
          productCode: faker.helpers.replaceSymbolWithNumber("####-##########"),
          title: titlesArr[i],
          imagePath: imgsArr[i],
          description: faker.lorem.paragraph(),
          price: faker.random.number({ min: 10, max: 50 }),
          manufacturer: faker.company.companyName(0),
          available: true,
          category: categ._id,
        });
        await prod.save();
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function closeDB() {
    console.log("CLOSING CONNECTION");
    await mongoose.disconnect();
  }

  await seedProducts(nendoroid_titles, nendoroid_imgs, "Nendoroid");
  await seedProducts(figma_titles, figma_imgs, "figma");
  await seedProducts(scalefigure_titles,scalefigure_imgs, "Scale Figure");
  await seedProducts(popupparade_titles, popupparade_imgs, "POP UP PARADE");
  await seedProducts(shf_titles, shf_imgs, "S.H.Figuarts");
  await seedProducts(figuartszero_titles, figuartszero_imgs, "FiguartsZERO");
  await seedProducts(shm_titles, shm_imgs, "S.H.MonsterArts");
  await seedProducts(proplica_titles, proplica_imgs, "PROPLICA");
  await seedProducts(metalbuild_titles, metalbuild_imgs, "METAL BUILD");
  await seedProducts(therobotspirits_titles, therobotspirits_imgs, "THE ROBOT SPIRITS");
  await closeDB();
}

seedDB();
