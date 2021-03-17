-- seeds for types table
INSERT INTO
  types (name)
VALUES
  ('donor'),
  ('receiver_organization'),
  ('receiver_individual');

-- seeds for categories table
INSERT INTO
  categories (name)
VALUES
  ('Health'),
  ('Food Banks'),
  ('Immigration & Refugees'),
  ('Education'),
  ('Animals'),
  ('Kids'),
  ('Women'),
  ('Others');

-- seeds for users table
INSERT INTO
  users (
    username,
    email,
    password,
    type_id,
    avatar,
    category_id
  )
VALUES
  (
    'helloWorld',
    'hello@world.com',
    'helloworld',
    1,
    'https://avatars.dicebear.com/v2/female/f3f1f083c911e25d5350659901780358.svg',
    2
  ),
  (
    'World Heath Organization',
    'who@example.com',
    'password',
    2,
    'https://gravatar.com/avatar/f3f1f083c911e25d5350659901780358?s=400&d=robohash&r=x',
    null
  ),
  (
    'share food bank',
    'sfb@example.com',
    'password',
    2,
    'https://gravatar.com/avatar/f3f1f083c911e25d5350659901780358?s=400&d=retro&r=x',
    null
  ),
  (
    'JoeD',
    'joe@example.com',
    'password',
    1,
    'https://gravatar.com/avatar/f3f1f083c911e25d5350659901780358?s=400&d=monsterid&r=x',
    null
  ),
  (
    'MrDave',
    'dave@example.com',
    'password',
    3,
    'https://gravatar.com/avatar/f3f1f083c911e25d5350659901780358?s=400&d=retro&r=x',
    1
  ),
  (
    'fpowelee0',
    'lhatcliffe0@clickbank.net',
    'K4DCtnA',
    1,
    'https://robohash.org/reprehenderitadea.jpg?size=50x50&set=set1',
    8
  ),
  (
    'thasard1',
    'ckopman1@upenn.edu',
    'U9lhtWIALu',
    2,
    'https://robohash.org/autemiderror.png?size=50x50&set=set1',
    8
  ),
  (
    'glesper2',
    'lsleaford2@cloudflare.com',
    'N8nFcpuzszH',
    1,
    'https://robohash.org/sintiuremolestias.bmp?size=50x50&set=set1',
    7
  ),
  (
    'lvasyuchov3',
    'rchapiro3@archive.org',
    'CGmHiW7KG9',
    2,
    'https://robohash.org/deseruntestab.bmp?size=50x50&set=set1',
    7
  ),
  (
    'fhatherleigh4',
    'lweitzel4@prlog.org',
    'mF0S72ds0',
    2,
    'https://robohash.org/quipariaturnulla.jpg?size=50x50&set=set1',
    1
  ),
  (
    'wmayhow5',
    'ecracknall5@webnode.com',
    'PqkXuHLX',
    2,
    'https://robohash.org/nihilaccusantiumtotam.png?size=50x50&set=set1',
    1
  ),
  (
    'haddeycott6',
    'taronowitz6@businessweek.com',
    'clzNWM2arnQ9',
    2,
    'https://robohash.org/recusandaeexercitationemqui.bmp?size=50x50&set=set1',
    1
  ),
  (
    'nhumbee7',
    'wslany7@google.com',
    'OdS22xftZ',
    2,
    'https://robohash.org/utrepellendusmolestiae.jpg?size=50x50&set=set1',
    3
  ),
  (
    'rsilcocks8',
    'nmouan8@opera.com',
    'QPBOJAqJMM55',
    2,
    'https://robohash.org/rerumconsequunturnon.bmp?size=50x50&set=set1',
    1
  ),
  (
    'lblaiklock9',
    'kleitche9@dropbox.com',
    'aEXJXdf7vok',
    1,
    'https://robohash.org/autemquisin.png?size=50x50&set=set1',
    7
  ),
  (
    'eyounga',
    'lballingera@java.com',
    '3x0UStsdMDuW',
    3,
    'https://robohash.org/atquiahic.bmp?size=50x50&set=set1',
    6
  ),
  (
    'tmacclureb',
    'lwinspurrb@sourceforge.net',
    '0XteuM',
    1,
    'https://robohash.org/nisiistemaxime.png?size=50x50&set=set1',
    8
  ),
  (
    'wwychec',
    'draccioc@discuz.net',
    'Tavngty3Fhs',
    1,
    'https://robohash.org/culpamagnidignissimos.jpg?size=50x50&set=set1',
    2
  ),
  (
    'dcuddd',
    'dtumed@bluehost.com',
    'xE1aTrb1NAC',
    2,
    'https://robohash.org/commodiquiculpa.bmp?size=50x50&set=set1',
    5
  ),
  (
    'vwheatlande',
    'imcwhinniee@usgs.gov',
    '4i3SpTX',
    1,
    'https://robohash.org/veritatisrerumquia.png?size=50x50&set=set1',
    2
  ),
  (
    'amogganf',
    'agureryf@storify.com',
    'dknmGryY',
    3,
    'https://robohash.org/repudiandaeetsint.png?size=50x50&set=set1',
    2
  ),
  (
    'jrapperg',
    'nkeniong@pinterest.com',
    'ztQX6KqU',
    3,
    'https://robohash.org/voluptatemrepellendusut.jpg?size=50x50&set=set1',
    5
  ),
  (
    'cstonbridgeh',
    'abintonh@toplist.cz',
    'd6h22I',
    3,
    'https://robohash.org/illoveniamarchitecto.bmp?size=50x50&set=set1',
    4
  ),
  (
    'lchazottei',
    'aglastonburyi@topsy.com',
    '4Od0T15ohPq',
    3,
    'https://robohash.org/velitomnisofficiis.png?size=50x50&set=set1',
    3
  ),
  (
    'aginnj',
    'ccardoj@hatena.ne.jp',
    'ZTOZ0npA0',
    2,
    'https://robohash.org/odiofacerecommodi.jpg?size=50x50&set=set1',
    3
  ),
  (
    'frillattk',
    'jbrusterk@sogou.com',
    'JYvnvosy',
    2,
    'https://robohash.org/enimquibusdamdicta.png?size=50x50&set=set1',
    4
  ),
  (
    'rporteousl',
    'gbeasleyl@umich.edu',
    'opZkataq2ycE',
    3,
    'https://robohash.org/magniidquia.png?size=50x50&set=set1',
    5
  ),
  (
    'szukermanm',
    'disaaksohnm@altervista.org',
    'FodboE',
    3,
    'https://robohash.org/quiaautiusto.jpg?size=50x50&set=set1',
    1
  ),
  (
    'rbremondn',
    'mtwinbournen@lulu.com',
    'I8TYvP16dPoD',
    3,
    'https://robohash.org/verovoluptatemrem.jpg?size=50x50&set=set1',
    4
  ),
  (
    'nbreedero',
    'ecurteiso@blog.com',
    'mv0pyCoc3',
    1,
    'https://robohash.org/etvoluptatesrepellendus.png?size=50x50&set=set1',
    3
  ),
  (
    'dmaddinp',
    'cantonazzip@mozilla.org',
    '4NRdasYn',
    2,
    'https://robohash.org/culpadoloremqui.jpg?size=50x50&set=set1',
    3
  ),
  (
    'ryushankinq',
    'jbraycottonq@feedburner.com',
    '5Vso8fPYiGj',
    2,
    'https://robohash.org/cupiditateautemmolestias.png?size=50x50&set=set1',
    3
  ),
  (
    'asouthernsr',
    'wrudledger@skyrock.com',
    'NHHmBJlDF',
    2,
    'https://robohash.org/autemvoluptasmagni.jpg?size=50x50&set=set1',
    6
  ),
  (
    'mpamplins',
    'dmasdings@xinhuanet.com',
    'FobQLNLvqyGy',
    1,
    'https://robohash.org/estquidemvoluptatem.png?size=50x50&set=set1',
    4
  ),
  (
    'mgallimoret',
    'alovittt@exblog.jp',
    '4vN8f0I5',
    2,
    'https://robohash.org/facerequidemnon.png?size=50x50&set=set1',
    2
  ),
  (
    'dgappu',
    'kmitkcovu@pbs.org',
    'g5ddAVbCTLWB',
    2,
    'https://robohash.org/harumlaborequo.jpg?size=50x50&set=set1',
    4
  ),
  (
    'jcarrolv',
    'ggoodwillv@google.co.uk',
    'cbsnHCq',
    1,
    'https://robohash.org/velaccusantiumodio.png?size=50x50&set=set1',
    3
  ),
  (
    'aabelovw',
    'pdavidaiw@yelp.com',
    '78FwvXxDc',
    3,
    'https://robohash.org/perferendisvelitharum.png?size=50x50&set=set1',
    2
  ),
  (
    'sdelmontix',
    'ebiddlecombex@pinterest.com',
    'yX7DSvx',
    2,
    'https://robohash.org/velitsuscipitqui.bmp?size=50x50&set=set1',
    8
  ),
  (
    'lkalkofeny',
    'tshakespearey@netvibes.com',
    'tkKcFl5',
    2,
    'https://robohash.org/eumtotamsunt.jpg?size=50x50&set=set1',
    8
  ),
  (
    'sdegenhardtz',
    'mbecketz@amazon.co.uk',
    'Yeqzxwl',
    2,
    'https://robohash.org/eaquefaciliscumque.png?size=50x50&set=set1',
    6
  ),
  (
    'aenrdigo10',
    'abilovsky10@vistaprint.com',
    'IHyOVhbJzj5',
    1,
    'https://robohash.org/consequaturnihildicta.jpg?size=50x50&set=set1',
    8
  ),
  (
    'jocassidy11',
    'abeloe11@storify.com',
    'OG6mXe',
    2,
    'https://robohash.org/velitsapientedolores.png?size=50x50&set=set1',
    2
  ),
  (
    'rgrundwater12',
    'ohassan12@sfgate.com',
    'asKwvH5C4Tt',
    3,
    'https://robohash.org/quocummolestias.bmp?size=50x50&set=set1',
    6
  ),
  (
    'rchamberlen13',
    'jbrockherst13@altervista.org',
    '5DcIuGM',
    3,
    'https://robohash.org/laborumnemocum.png?size=50x50&set=set1',
    7
  ),
  (
    'cbeswick14',
    'ahorick14@walmart.com',
    'yLBr2s',
    2,
    'https://robohash.org/fugiatquiaincidunt.png?size=50x50&set=set1',
    7
  ),
  (
    'averrier15',
    'glammerts15@xinhuanet.com',
    'd2fWY5QaI',
    3,
    'https://robohash.org/ipsumdoloremqueinventore.jpg?size=50x50&set=set1',
    6
  ),
  (
    'bpfaffel16',
    'hbedingfield16@amazon.co.uk',
    'yW8pHcqDyM',
    2,
    'https://robohash.org/enimcummagni.jpg?size=50x50&set=set1',
    3
  ),
  (
    'aenric17',
    'lsushams17@edublogs.org',
    'FXihKqZBk',
    2,
    'https://robohash.org/suscipitdictain.jpg?size=50x50&set=set1',
    2
  ),
  (
    'blorent18',
    'egossipin18@geocities.com',
    'MNRom5U1jCAh',
    2,
    'https://robohash.org/consequaturlaudantiumrecusandae.png?size=50x50&set=set1',
    8
  ),
  (
    'ulawdham19',
    'gdrains19@walmart.com',
    'nQ5AgmTG',
    2,
    'https://robohash.org/siteumqui.jpg?size=50x50&set=set1',
    5
  ),
  (
    'imirrlees1a',
    'ibalogh1a@imgur.com',
    'j861iiS9Ri',
    1,
    'https://robohash.org/remnesciuntrerum.png?size=50x50&set=set1',
    4
  ),
  (
    'ejosephsen1b',
    'mcuppleditch1b@woothemes.com',
    'qc6e6cS5fOR6',
    3,
    'https://robohash.org/illumexercitationemdebitis.bmp?size=50x50&set=set1',
    3
  ),
  (
    'elavies1c',
    'iknevett1c@plala.or.jp',
    'dMvsonB3f',
    2,
    'https://robohash.org/veliteumut.jpg?size=50x50&set=set1',
    1
  ),
  (
    'agallimore1d',
    'gloiterton1d@ebay.com',
    'I1VZ4w7MKr',
    2,
    'https://robohash.org/itaquesitquia.jpg?size=50x50&set=set1',
    4
  );

-- seeds for request volunteer table
INSERT INTO
  request_volunteer (
    volunteer_id,
    description,
    title,
    start_date,
    end_date,
    start_time,
    end_time,
    is_active,
    requestor_id
  )
VALUES
  (
    1,
    'Need some help in cleaning the lawn and planting it together, it is a big lawn',
    'Lawn work',
    '03-06-2020',
    '03-06-2020',
    '08:00:00',
    '11:00:00',
    TRUE,
    5
  ),
  (
    4,
    'Need some help to move in to a new home and it will be having some heavy lifting',
    'Moving help',
    '10-02-2020',
    '10-02-2020',
    '08:00:00',
    '15:00:00',
    TRUE,
    5
  ),
  (
    4,
    'Need a person to help in a food distribution week for the community of Burnaby and it will be for 4 days',
    'Food Bank help',
    '10-05-2020',
    '10-08-2020',
    '09:00:00',
    '14:00:00',
    TRUE,
    3
  ),
  (
    1,
    'We need help in community vaccination day, you will not vaccinate but will help in organizing the patients and other related chores',
    'Community Vaccine Day',
    '03-31-2021',
    '03-31-2021',
    '08:00:00',
    '09:00:00',
    TRUE,
    2
  );

-- seeds for items wishlist table
INSERT INTO
  items_wishlist (
    user_id,
    category_id,
    item_name,
    is_active,
    entry_date,
    donated_date,
    quantity,
    donor_id
  )
VALUES
  (
    33,
    4,
    'blankets',
    true,
    '2020-03-21 23:50:30',
    null,
    6,
    9
  ),
  (
    10,
    5,
    'canned food',
    true,
    '2020-07-10 18:56:50',
    null,
    6,
    12
  ),
  (
    8,
    3,
    'water',
    true,
    '2020-09-11 19:18:16',
    null,
    6,
    23
  ),
  (
    21,
    6,
    'dog food',
    true,
    '2020-08-16 21:28:23',
    null,
    6,
    34
  ),
  (
    43,
    7,
    'markers',
    true,
    '2020-09-20 07:17:58',
    null,
    8,
    5
  ),
  (
    26,
    7,
    'water',
    true,
    '2020-03-03 03:24:54',
    null,
    9,
    27
  ),
  (
    8,
    3,
    'toilet paper',
    true,
    '2021-02-06 21:07:30',
    null,
    2,
    28
  ),
  (
    4,
    8,
    'toilet paper',
    true,
    '2020-08-23 13:55:32',
    null,
    8,
    44
  ),
  (
    10,
    1,
    'toilet paper',
    true,
    '2020-11-06 13:13:50',
    null,
    4,
    43
  ),
  (
    50,
    7,
    'jackets',
    false,
    '2020-05-24 23:13:56',
    null,
    5,
    10
  ),
  (
    32,
    5,
    'markers',
    true,
    '2020-06-25 01:36:38',
    null,
    2,
    13
  ),
  (
    13,
    8,
    'water',
    true,
    '2020-08-16 22:13:16',
    null,
    8,
    32
  ),
  (
    6,
    1,
    'toilet paper',
    true,
    '2020-02-01 22:39:56',
    null,
    10,
    9
  ),
  (
    25,
    2,
    'jackets',
    true,
    '2020-07-04 23:02:23',
    null,
    5,
    21
  ),
  (
    34,
    1,
    'jackets',
    true,
    '2021-02-11 06:45:09',
    null,
    1,
    15
  ),
  (
    2,
    7,
    'puppy pads',
    false,
    '2020-12-06 14:36:11',
    null,
    2,
    5
  ),
  (
    42,
    1,
    'blankets',
    true,
    '2020-10-16 22:24:53',
    null,
    1,
    31
  ),
  (
    2,
    1,
    'blankets',
    true,
    '2020-01-28 05:07:07',
    null,
    10,
    7
  ),
  (
    45,
    7,
    'toilet paper',
    true,
    '2020-05-11 14:20:22',
    null,
    2,
    17
  ),
  (
    23,
    5,
    'toilet paper',
    true,
    '2020-10-13 07:29:04',
    null,
    8,
    19
  ),
  (
    45,
    3,
    'canned food',
    true,
    '2020-04-15 12:04:50',
    null,
    4,
    23
  ),
  (
    47,
    4,
    'toilet paper',
    true,
    '2020-12-23 21:04:20',
    null,
    3,
    15
  ),
  (
    15,
    7,
    'puppy pads',
    true,
    '2020-07-04 12:33:58',
    null,
    2,
    47
  ),
  (
    10,
    2,
    'water',
    true,
    '2020-07-15 04:00:42',
    null,
    6,
    5
  ),
  (
    5,
    4,
    'markers',
    true,
    '2020-09-28 03:16:23',
    null,
    1,
    10
  ),
  (
    17,
    5,
    'cat food',
    true,
    '2020-01-25 14:22:59',
    null,
    10,
    24
  ),
  (
    16,
    7,
    'canned food',
    true,
    '2020-06-10 10:44:39',
    null,
    8,
    5
  ),
  (
    10,
    7,
    'markers',
    true,
    '2020-05-10 14:14:40',
    null,
    7,
    50
  ),
  (
    29,
    1,
    'toilet paper',
    true,
    '2020-10-04 14:43:16',
    null,
    1,
    40
  ),
  (
    21,
    1,
    'markers',
    true,
    '2020-04-27 17:46:56',
    null,
    4,
    20
  ),
  (
    16,
    1,
    'canned food',
    true,
    '2020-03-09 00:43:15',
    null,
    3,
    10
  ),
  (
    5,
    5,
    'blankets',
    true,
    '2020-08-15 13:24:19',
    null,
    6,
    1
  ),
  (
    21,
    6,
    'toilet paper',
    true,
    '2020-09-25 19:51:02',
    null,
    6,
    9
  ),
  (
    48,
    4,
    'canned food',
    true,
    '2020-07-26 13:35:13',
    null,
    6,
    7
  ),
  (
    33,
    6,
    'canned food',
    true,
    '2020-03-16 16:49:46',
    null,
    7,
    3
  ),
  (
    7,
    8,
    'canned food',
    true,
    '2020-12-04 10:41:14',
    null,
    8,
    3
  ),
  (
    48,
    5,
    'cat food',
    true,
    '2020-06-19 07:09:24',
    null,
    7,
    6
  ),
  (
    10,
    2,
    'blankets',
    true,
    '2021-03-03 00:26:23',
    null,
    6,
    14
  ),
  (
    11,
    3,
    'blankets',
    true,
    '2020-04-26 06:14:20',
    null,
    7,
    22
  ),
  (
    4,
    2,
    'puppy pads',
    true,
    '2020-10-25 22:29:19',
    null,
    10,
    1
  ),
  (
    1,
    1,
    'dog food',
    true,
    '2020-04-29 09:56:46',
    null,
    9,
    3
  ),
  (
    43,
    3,
    'jackets',
    true,
    '2020-04-15 00:39:43',
    null,
    8,
    9
  ),
  (
    13,
    1,
    'puppy pads',
    true,
    '2020-09-16 16:58:25',
    null,
    9,
    7
  ),
  (
    7,
    7,
    'canned food',
    true,
    '2021-02-23 09:39:32',
    null,
    1,
    17
  ),
  (
    17,
    1,
    'water',
    true,
    '2020-09-26 23:09:19',
    null,
    10,
    1
  ),
  (
    26,
    4,
    'cat food',
    true,
    '2020-10-12 03:34:48',
    null,
    3,
    10
  ),
  (
    18,
    1,
    'blankets',
    true,
    '2020-02-08 22:12:33',
    null,
    1,
    13
  ),
  (
    21,
    8,
    'blankets',
    true,
    '2020-07-10 21:53:36',
    null,
    2,
    10
  ),
  (
    47,
    1,
    'markers',
    true,
    '2020-04-07 19:10:20',
    null,
    7,
    2
  ),
  (
    10,
    5,
    'markers',
    true,
    '2020-09-27 08:09:53',
    null,
    2,
    40
  );

-- seeds for requested money table
INSERT INTO
  requested_money (user_id, is_active, requested_amount)
VALUES
  (2, TRUE, 1000),
  (3, TRUE, 500),
  (18, TRUE, 400),
  (22, TRUE, 100),
  (25, TRUE, 6000),
  (35, TRUE, 6000),
  (19, TRUE, 200),
  (47, TRUE, 200),
  (21, TRUE, 7050),
  (9, TRUE, 400),
  (24, TRUE, 200),
  (37, TRUE, 100),
  (1, TRUE, 7050),
  (26, TRUE, 500),
  (5, TRUE, 1000),
  (9, TRUE, 500),
  (12, TRUE, 7050),
  (13, TRUE, 900),
  (17, TRUE, 100),
  (28, true, 1000),
  (20, TRUE, 100),
  (7, TRUE, 8000);

-- seeds for donated money table
INSERT INTO
  donated_money (
    user_id,
    donation_date,
    donated_amount,
    requested_money_id
  )
VALUES
  (36, '2021-01-28 04:39:13', 6000, 5),
  (32, '2020-04-22 23:24:45', 40, 4),
  (12, '2020-07-21 18:54:53', 200, 3),
  (50, '2020-09-08 11:58:50', 50, 7),
  (18, '2021-01-02 12:03:20', 800, 13),
  (46, '2021-02-12 00:10:09', 20, 4),
  (36, '2020-06-07 08:25:14', 600, 22),
  (5, '2020-12-03 04:23:18', 200, 1),
  (41, '2021-02-20 11:29:06', 600, 18),
  (10, '2020-11-19 13:07:14', 100, 14),
  (47, '2020-08-26 10:17:19', 900, 20),
  (39, '2020-10-09 21:51:43', 500, 1),
  (4, '2021-03-10 15:25:15', 900, 17),
  (4, '2020-04-07 09:23:04', 500, 22),
  (3, '2020-11-22 14:32:52', 800, 15),
  (8, '2020-10-08 09:44:37', 500, 16),
  (42, '2020-07-07 06:50:21', 400, 2),
  (13, '2020-07-08 16:35:09', 400, 6),
  (11, '2021-01-18 14:46:56', 700, 22),
  (50, '2020-04-06 01:25:50', 800, 9);

-- seeds for donor following table
INSERT INTO
  donor_following (user_id, receiver_id)
VALUES
  (2, 43),
  (1, 22),
  (5, 4),
  (31, 29),
  (27, 25),
  (18,18),
  (33, 12),
  (43, 50),
  (25,7),
  (26, 9),
  (1, 21),
  (47, 32),
  (50, 15),
  (8, 9),
  (25, 29),
  (26, 3),
  (29, 40),
  (18, 15),
  (11, 19),
  (11, 4),
  (30,8),
  (35,6),
  (31,5),
  (10,12),
  (18,22),
  (13,9),
  (31,7),
  (13,16),
  (26,22),
  (49,21),
  (10,48),
  (23,47),
  (29,50),
  (9,12),
  (13,9),
  (1,7),
  (22,1),
  (49,6),
  (32,22),
  (49,21),
  (12,15),
  (46,4),
  (35,8),
  (33,6),
  (12,7),
  (14,10),
  (33,45),
  (48,30),
  (15,12),
  (10,4),
  (8,6),
  (37,5),
  (47,1);

-- seeds for recevier followers table
INSERT INTO
  receiver_followers (user_id, donor_id)
VALUES
  (12, 34),
  (46, 3),
  (41, 40),
  (33, 46),
  (33, 39),
  (33, 49),
  (32, 2),
  (26, 20),
  (49, 34),
  (32, 13),
  (5, 15),
  (11, 31),
  (39, 32),
  (27, 18),
  (44, 21),
  (9, 4),
  (4, 23),
  (12, 47),
  (43, 11),
  (13, 43),
  (14, 26),
  (34, 50),
  (6, 25),
  (44, 41),
  (28, 22),
  (23, 4),
  (19, 36),
  (43, 33),
  (20, 44),
  (31, 38),
  (30, 48),
  (27, 26),
  (30, 43),
  (31, 22),
  (6, 41),
  (5, 31),
  (9, 45),
  (30, 29),
  (16, 41),
  (43, 25),
  (12, 46),
  (39, 27),
  (16, 19),
  (38, 32),
  (32, 33),
  (37, 45),
  (47, 9),
  (9, 29),
  (22, 13),
  (20, 19);