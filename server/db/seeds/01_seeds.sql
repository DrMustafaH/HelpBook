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
    'Dan Brown',
    'd',
    'd',
    1,
    'https://images.pexels.com/photos/769772/pexels-photo-769772.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200',
    1
  ),
  (
    'Doctors of the World',
    'o',
    'o',
    2,
    'https://uploads.doctorsoftheworld.org/2013/07/logo.png',
    1
  ),
  (
    'John Smith',
    'i',
    'i',
    3,
    'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200',
    2
  ),
  (
    'Joe Adam',
    'joe@example.com',
    'password',
    1,
    'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200',
    6
  ),
  (
    'Megan Grey',
    'dave@example.com',
    'password',
    3,
    'https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200',
    5
  ),
  (
    'Jessica Turner',
    'lhatcliffe0@clickbank.net',
    'password',
    1,
    'https://images.pexels.com/photos/1841819/pexels-photo-1841819.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200',
    8
  ),
  (
    'World Wildlife Foundation',
    'ckopman1@upenn.edu',
    'password',
    2,
    'https://blog-cdn.classy.org/blog/wp-content/uploads/2016/09/22161501/wwf.png',
    5
  ),
  (
    'Henry Hash',
    'lsleaford2@cloudflare.com',
    'password',
    3,
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
    7
  ),
  (
    'Ronaldo Silva',
    'rchapiro3@archive.org',
    'password',
    1,
    'https://images.pexels.com/photos/247885/pexels-photo-247885.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
    7
  ),
  (
    'Angelina Jolie',
    'lweitzel4@prlog.org',
    'password',
    1,
    'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200',
    1
  ),
  (
    'One Campaign',
    'ecracknall5@webnode.com',
    'password',
    2,
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/ONE_Campaign.svg/1200px-ONE_Campaign.svg.png',
    3
  ),
  (
    'Southside Animal Shelter',
    'taronowitz6@businessweek.com',
    'password',
    2,
    'https://ssasi.org/wp-content/uploads/2017/09/rosiessouthsideanimalshelter-logo-blue.png',
    5
  ),
  (
    'Animal Life',
    'wslany7@google.com',
    'password',
    2,
    'https://i.pinimg.com/originals/d7/e6/fe/d7e6fe6c4e540f6468d8638f5008c1d9.jpg',
    5
  ),
  (
    'Richmond Food Bank',
    'nmouan8@opera.com',
    'password',
    2,
    'http://richmondfoodbank.org/wp-content/uploads/2013/07/RFBS-Logo-Black-Logo-White-Background.jpg',
    2
  ),
  (
    'Canada Food Bank',
    'kleitche9@dropbox.com',
    'password',
    2,
    'https://i.pinimg.com/originals/97/9a/e0/979ae08c4d7dbcda0df39eee6bb45ded.png',
    2
  ),
  (
    'Immigrant Services Society of BC',
    'lballingera@java.com',
    'password',
    2,
    'https://media.glassdoor.com/sqll/484533/immigrant-services-society-of-bc-squarelogo-1479837205268.png',
    3
  ),
  (
    'Mosaic BC',
    'lwinspurrb@sourceforge.net',
    'password',
    2,
    'https://mosaicbc.org/wp-content/uploads/2016/05/MOSAIC-icon-F-square.png',
    3
  ),
  (
    'Insurance Corporation of British Columbia',
    'draccioc@discuz.net',
    'password',
    2,
    'https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Insurance_Corporation_of_British_Columbia_Logo.svg/1200px-Insurance_Corporation_of_British_Columbia_Logo.svg.png',
    8
  ),
  (
    'The UN Refugee Agency',
    'dtumed@bluehost.com',
    'xE1aTrb1NAC',
    2,
    'https://images.squarespace-cdn.com/content/v1/56d1fe3ed210b8b23f16d059/1570556718932-WIJCJYKJFXOVONOG9O42/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/UNHCR%2Blogo.jpg',
    3
  ),
  (
    'James Park School ',
    'imcwhinniee@usgs.gov',
    'password',
    2,
    'http://www.sd43.bc.ca/school/jamespark/Style%20Library/Images/LogoHeader.png',
    4
  ),
  (
    'Catherine Cruise',
    'agureryf@storify.com',
    'password',
    3,
    'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
    4
  ),
  (
    'Mary Jane',
    'nkeniong@pinterest.com',
    'password',
    3,
    'https://images.pexels.com/photos/672445/pexels-photo-672445.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
    5
  ),
  (
    'Zelda Dan',
    'abintonh@toplist.cz',
    'password',
    3,
    'https://images.pexels.com/photos/764529/pexels-photo-764529.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200',
    6
  ),
  (
    'Angela Bush',
    'aglastonburyi@topsy.com',
    'password',
    3,
    'https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200',
    7
  ),
  (
    'Will Smith',
    'ccardoj@hatena.ne.jp',
    'password',
    3,
    'https://images.pexels.com/photos/576924/pexels-photo-576924.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
    3
  ),
  (
    'Dan Ling',
    'jbrusterk@sogou.com',
    'password',
    1,
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200',
    4
  ),
  (
    'Ming Chao',
    'gbeasleyl@umich.edu',
    'password',
    1,
    'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200',
    5
  ),
  (
    'Abraham Joseph',
    'disaaksohnm@altervista.org',
    'password',
    1,
    'https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200',
    1
  ),
  (
    'Mohammed Abdo',
    'mtwinbournen@lulu.com',
    'password',
    1,
    'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200',
    4
  ),
  (
    'Ash Green',
    'ecurteiso@blog.com',
    'password',
    1,
    'https://images.pexels.com/photos/733500/pexels-photo-733500.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200',
    6
  ),
  (
    'Lili Marshal',
    'cantonazzip@mozilla.org',
    'password',
    1,
    'https://images.pexels.com/photos/227294/pexels-photo-227294.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
    5
  ),
  (
    'Nigella Hunt',
    'jbraycottonq@feedburner.com',
    'password',
    1,
    'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200',
    2
  ),
  (
    'Amy White',
    'wrudledger@skyrock.com',
    'password',
    3,
    'https://images.pexels.com/photos/1559193/pexels-photo-1559193.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200',
    6
  ),
  (
    'Rural Literacy Coalition',
    'dmasdings@xinhuanet.com',
    'password',
    2,
    'https://i.pinimg.com/originals/70/34/1f/70341ff61825f30a9bf030c4d4458d2c.jpg',
    4
  ),
  (
    'Milo Adventist Academy',
    'alovittt@exblog.jp',
    'password',
    2,
    'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2020/01/9-Best-School-Logos-and-How-to-Make-Your-Own-for-Free-image7.png',
    4
  ),
  (
    'Woman Power',
    'kmitkcovu@pbs.org',
    'password',
    2,
    'https://image.shutterstock.com/image-vector/womens-power-rights-iconic-womans-260nw-1445242748.jpg',
    7
  ),
  (
    'Woman March Organization',
    'ggoodwillv@google.co.uk',
    'password',
    2,
    'https://static1.squarespace.com/static/5c3feb79fcf7fdce5a3c790b/t/5c3ff59dc74c50276f00f4a8/1598386377503/?format=1500w',
    7
  ),
  (
    'Woman Rights',
    'pdavidaiw@yelp.com',
    'password',
    2,
    'https://depdcblog.files.wordpress.com/2011/01/cedaw-logo.jpg',
    7
  ),
  (
    'Child Aid Association',
    'ebiddlecombex@pinterest.com',
    'password',
    2,
    'https://seeklogo.com/images/C/child-aid-association-pakistan-logo-79D7590245-seeklogo.com.png',
    6
  ),
  (
    'The Children’s Aid Society',
    'tshakespearey@netvibes.com',
    'password',
    2,
    'https://lh3.googleusercontent.com/proxy/3SvhQp-JgAn5D3mdUbtNuuLXSbCX_WLf0NyairGhi0CVlVj1FGN662XW1LCfTL95arvWMIrwpuponnm2CtXc7II-unc3LBP8PqDwroVuntVckBh6M1JXUEtNXhcNNNA',
    6
  ),
  (
    'Adopt an Orphanage',
    'mbecketz@amazon.co.uk',
    'Yeqzxwl',
    2,
    'https://i.pinimg.com/originals/68/2e/4f/682e4f35d500afbf51b9593b828ccb87.png',
    6
  ),
  (
    'Orphan World',
    'abilovsky10@vistaprint.com',
    'password',
    2,
    'https://t4.ftcdn.net/jpg/03/13/00/21/360_F_313002173_ib6DVaxLb035ClMthvP6Ztup4GePFsYn.jpg',
    6
  ),
  (
    'Woodland Build',
    'abeloe11@storify.com',
    'password',
    2,
    'https://uploads.turbologo.com/uploads/design/hq_preview_image/662049/draw_svg20201116-31497-tmjb0u.svg.png',
    8
  ),
  (
    'Senior Help',
    'ohassan12@sfgate.com',
    'password',
    2,
    'https://p1.hiclipart.com/preview/846/862/409/home-logo-physical-therapy-geriatrics-massage-occupational-therapy-medicine-internal-medicine-family-medicine-png-clipart.jpg',
    8
  ),
  (
    'Elderly Help',
    'jbrockherst13@altervista.org',
    'password',
    2,
    'https://st4.depositphotos.com/4259495/24581/v/1600/depositphotos_245818810-stock-illustration-elderly-healthcare-heart-shaped-logo.jpg',
    8
  ),
  (
    'Phil Dunphy',
    'ahorick14@walmart.com',
    'password',
    1,
    'https://randomuser.me/api/portraits/men/97.jpg',
    7
  ),
  (
    'Bill Clinton',
    'glammerts15@xinhuanet.com',
    'password',
    1,
    'https://uifaces.co/our-content/donated/gPZwCbdS.jpg',
    6
  ),
  (
    'Mario Winnans',
    'hbedingfield16@amazon.co.uk',
    'password',
    1,
    'https://randomuser.me/api/portraits/men/86.jpg',
    3
  ),
  (
    'Jill Mathiew',
    'lsushams17@edublogs.org',
    'password',
    1,
    'https://randomuser.me/api/portraits/women/44.jpg',
    2
  ),
  (
    'Megan Fox',
    'egossipin18@geocities.com',
    'password',
    1,
    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
    8
  ),
  (
    'Mandy Moore',
    'gdrains19@walmart.com',
    'password',
    1,
    'https://randomuser.me/api/portraits/women/63.jpg',
    5
  ),
  (
    'Heather Saba',
    'ibalogh1a@imgur.com',
    'password',
    1,
    'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NjYzMzE1MV5BMl5BanBnXkFtZTgwNTA4NDY4OTE@._V1_UX172_CR0,0,172,256_AL_.jpg',
    4
  ),
  (
    'Hannah Mana',
    'mcuppleditch1b@woothemes.com',
    'password',
    1,
    'https://images-na.ssl-images-amazon.com/images/M/MV5BODFjZTkwMjItYzRhMS00OWYxLWI3YTUtNWIzOWQ4Yjg4NGZiXkEyXkFqcGdeQXVyMTQ0ODAxNzE@._V1_UX172_CR0,0,172,256_AL_.jpg',
    3
  ),
  (
    'Hail Mary',
    'iknevett1c@plala.or.jp',
    'password',
    1,
    'https://randomuser.me/api/portraits/women/47.jpg',
    1
  ),
  (
    'Sheela Min',
    'gloiterton1d@ebay.com',
    'password',
    1,
    'https://randomuser.me/api/portraits/women/95.jpg',
    4
  ),
  (
    'Hilary Duff',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://randomuser.me/api/portraits/women/79.jpg',
    1
  ),
  (
    'Christina Adams',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://uifaces.co/our-content/donated/3799Ffxy.jpeg',
    1
  ),
  (
    'Ross Gellar',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://uifaces.co/our-content/donated/rSuiu_Hr.jpg',
    1
  ),
  (
    'Joey Tribbiani',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://uifaces.co/our-content/donated/KtCFjlD4.jpg',
    1
  ),
  (
    'Uncle Roger',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
    1
  ),
  (
    'Mathew Chan',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://randomuser.me/api/portraits/men/22.jpg',
    1
  ),
  (
    'Jim Pattison',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://uifaces.co/our-content/donated/6MWH9Xi_.jpg',
    1
  ),
  (
    'Larry King',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://uifaces.co/our-content/donated/ukegoVAy.jpg',
    2
  ),
  (
    'John Wright',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://uifaces.co/our-content/donated/FJkauyEa.jpg',
    2
  ),
  (
    'Harry Potter',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://randomuser.me/api/portraits/men/91.jpg',
    2
  ),
  (
    'Britney Spears',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEzMjA0ODk1OF5BMl5BanBnXkFtZTcwMTA4ODM3OQ@@._V1_UY256_CR5,0,172,256_AL_.jpg',
    2
  ),
  (
    'Catherine Dan',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    2
  ),
  (
    'Mary Mercedes',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://randomuser.me/api/portraits/women/9.jpg',
    2
  ),
  (
    'Mia Micheal',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    2
  ),
  (
    'Mina Sheikh',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
    3
  ),
  (
    'Victoria Beckham',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMjM1MzgxMl5BMl5BanBnXkFtZTcwNDI0NDE5NQ@@._V1_UY256_CR4,0,172,256_AL_.jpg',
    3
  ),
  (
    'Danny De Vito',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://uifaces.co/our-content/donated/AW-rdWlG.jpg',
    3
  ),
  (
    'Shawn Micheals',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://uifaces.co/our-content/donated/Square__small_.jpg',
    3
  ),
  (
    'Hailey Mathers',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1MDM5NjczOF5BMl5BanBnXkFtZTcwOTY2MDE4OA@@._V1_UY256_CR0,0,172,256_AL_.jpg',
    3
  ),
  (
    'Celine Dion',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2MDc2NjY1NF5BMl5BanBnXkFtZTcwMDY2MjE3Nw@@._V1_UX172_CR0,0,172,256_AL_.jpg',
    3
  ),
  (
    'Mel C',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://images-na.ssl-images-amazon.com/images/M/MV5BNjk5NjE5NTczMV5BMl5BanBnXkFtZTcwODI0OTM0NA@@._V1_UY256_CR4,0,172,256_AL_.jpg',
    3
  ),
  (
    'Nelly Furtado',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwMDEyNTcxMV5BMl5BanBnXkFtZTcwNjM5ODQ2Ng@@._V1_UY256_CR10,0,172,256_AL_.jpg',
    3
  ),
  (
    'Lucy Lui',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=707b9c33066bf8808c934c8ab394dff6',
    4
  ),
  (
    'Dido Many',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://randomuser.me/api/portraits/women/65.jpg',
    4
  ),
  (
    'Craig David',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://randomuser.me/api/portraits/men/43.jpg',
    4
  ),
  (
    'Arura Heigle',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
    4
  ),
  (
    'Sting Harry',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f',
    7
  ),
  (
    'Yvonna Mick',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://randomuser.me/api/portraits/women/26.jpg',
    7
  ),
  (
    'Omar Awad',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://uifaces.co/our-content/donated/vIqzOHXj.jpg',
    7
  ),
  (
    'Evan Jabar',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://randomuser.me/api/portraits/women/17.jpg',
    7
  ),
  (
    'Micheal Jackson',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://randomuser.me/api/portraits/men/61.jpg',
    8
  ),
  (
    'Janet Jackson',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=aa3a807e1bbdfd4364d1f449eaa96d82',
    8
  ),
  (
    'Adil Brown',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://uifaces.co/our-content/donated/N5PLzyan.jpg',
    8
  ),
  (
    'Tim Cook',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
    8
  ),
  (
    'Gloria Singh',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://images.unsplash.com/photo-1498529605908-f357a9af7bf5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=047fade70e80ebb22ac8f09c04872c40',
    8
  ),
  (
    'Micheal Jackson',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://randomuser.me/api/portraits/men/61.jpg',
    8
  ),
  (
    'Bill Gates',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://randomuser.me/api/portraits/men/78.jpg',
    8
  ),
  (
    'Elon Musk',
    'gloiterton1d@ebay.com',
    'password',
    3,
    'https://images.unsplash.com/photo-1506085452766-c330853bea50?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3e378252a934e660f231666b51bd269a',
    8
  ),
  (
    'World Health Organization',
    'gloiterton1d@ebay.com',
    'password',
    2,
    'https://www.who.int/images/default-source/infographics/who-emblem.png?sfvrsn=877bb56a_2',
    1
  ),
  (
    'GlaxoSmithKline',
    'gloiterton1d@ebay.com',
    'password',
    2,
    'https://1000logos.net/wp-content/uploads/2017/01/GSK-Logo.png',
    1
  ),
  (
    'Bayer',
    'gloiterton1d@ebay.com',
    'password',
    2,
    'https://canada2067.letstalkscience.ca/wp-content/uploads/2018/02/bayer-logo.jpg',
    1
  ),
  (
    'Canadian Red Cross',
    'gloiterton1d@ebay.com',
    'password',
    2,
    'https://www.thechronicleherald.ca/media/photologue/photos/cache/Canadian_Red_Cross_logo_large.jpg',
    1
  ),
  (
    'Mental Health Society',
    'gloiterton1d@ebay.com',
    'password',
    2,
    'https://cdn3.vectorstock.com/i/1000x1000/22/22/mental-health-and-psychology-concept-icon-or-logo-vector-27392222.jpg',
    1
  ),
  (
    'Food Bowl Association',
    'gloiterton1d@ebay.com',
    'password',
    2,
    'https://previews.123rf.com/images/mantinov/mantinov1707/mantinov170700030/81714407-donate-and-help-logo-hungry-people-holding-empty-bowl-begging-for-food-and-help-.jpg',
    2
  ),
  (
    'Food Aid',
    'gloiterton1d@ebay.com',
    'password',
    2,
    'https://logopond.com/logos/e2812b30e5877f8ea9417b26a05804f3.png',
    2
  ),
  (
    'Food For Thought',
    'gloiterton1d@ebay.com',
    'password',
    2,
    'https://images-platform.99static.com/Mfgjuk2nfY_Ny0SvF2J86TZkn0Y=/500x500/top/smart/99designs-contests-attachments/18/18434/attachment_18434540',
    2
  ),
  (
    'US. Food',
    'gloiterton1d@ebay.com',
    'password',
    2,
    'https://mms.businesswire.com/media/20201210005659/en/650770/23/USF_LOGOWITHOUTTAG_RGB_WEB.jpg',
    2
  ),
  (
    'Share Food',
    'gloiterton1d@ebay.com',
    'password',
    2,
    'https://thumbs.dreamstime.com/z/food-sharing-vector-design-template-giving-poor-refugees-emblem-charity-volunteer-organizations-feeding-89137695.jpg',
    2
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
    2,
    1,
    'Syringes',
    true,
    '2020-03-21 23:50:30',
    null,
    40,
    1
  ),
  (
    2,
    1,
    'Medical Cotton',
    true,
    '2020-07-10 18:56:50',
    null,
    25,
    6
  ),
  (
    2,
    2,
    'Water Bottles',
    true,
    '2020-09-11 19:18:16',
    null,
    10,
    10
  ),
  (
    2,
    8,
    'Pens',
    true,
    '2020-08-16 21:28:23',
    null,
    20,
    31
  ),
  (
    3,
    2,
    'Tuna cans',
    true,
    '2020-09-20 07:17:58',
    null,
    100,
    46
  ),
  (
    3,
    2,
    'Bread',
    true,
    '2020-03-03 03:24:54',
    null,
    500,
    27
  ),
  (
    3,
    8,
    'Notepads',
    true,
    '2021-02-06 21:07:30',
    null,
    5,
    null
  ),
  (
    3,
    4,
    'KG books',
    true,
    '2020-08-23 13:55:32',
    null,
    10,
    1
  ),
  (
    3,
    5,
    'Puppy pads',
    true,
    '2020-11-06 13:13:50',
    null,
    4,
    1
  ),
  (
    3,
    6,
    'Children Toys',
    true,
    '2020-06-25 01:36:38',
    null,
    2,
    4
  );

-- seeds for requested money table
INSERT INTO
  requested_money (user_id, is_active, requested_amount)
VALUES
  (2, TRUE, 5000),
  (7, TRUE, 1000),
  (11, TRUE, 2500),
  (12, TRUE, 4500),
  (13, TRUE, 2000);

-- seeds for donated money table
INSERT INTO
  donated_money (
    user_id,
    donation_date,
    donated_amount,
    requested_money_id
  )
VALUES
  (1, '2021-01-28 04:39:13', 10, 1),
  (1, '2020-04-22 23:24:45', 40, 3),
  (1, '2020-07-21 18:54:53', 30, 2),
  (1, '2020-09-08 11:58:50', 50, 1),
  (6, '2021-01-02 12:03:20', 800, 4),
  (6, '2021-02-12 00:10:09', 20, 5),
  (6, '2020-06-07 08:25:14', 600, 1),
  (10, '2020-12-03 04:23:18', 200, 1),
  (26, '2021-02-20 11:29:06', 100, 3),
  (30, '2020-11-19 13:07:14', 100, 4),
  (47, '2020-08-26 10:17:19', 100, 5);

-- seeds for donor following table
INSERT INTO
  donor_following (user_id, receiver_id)
VALUES
  (1, 16),
  (1, 7),
  (1, 5),
  (1, 37),
  (1, 38),
  (1, 21),
  (10, 12),
  (10, 7),
  (10, 15),
  (10, 16),
  (6, 2),
  (10, 34),
  (10, 40),
  (6, 7),
  (6, 11),
  (6, 12),
  (26, 2),
  (27, 2),
  (28, 2),
  (29, 2),
  (30, 2);

-- seeds for recevier followers table
INSERT INTO
  receiver_followers (user_id, donor_id)
VALUES
  (2, 21),
  (2, 20),
  (2, 19),
  (2, 18),
  (2, 17),
  (2, 11),
  (5, 3),
  (21, 6);

-- seeds for recommendations table
INSERT INTO
  recommendations (user_id, recommended_name, recommended_avatar)
VALUES
  (
    1,
    'Animal Life',
    'https://i.pinimg.com/originals/d7/e6/fe/d7e6fe6c4e540f6468d8638f5008c1d9.jpg'
  ),
  (
    1,
    'GlaxoSmithKline',
    'https://1000logos.net/wp-content/uploads/2017/01/GSK-Logo.png'
  ),
  (
    1,
    'Mosaic BC',
    'https://mosaicbc.org/wp-content/uploads/2016/05/MOSAIC-icon-F-square.png'
  ),
  (
    1,
    'Mia Micheal',
    'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
  ),
  (
    1,
    'The UN Refugee Agency',
    'https://images.squarespace-cdn.com/content/v1/56d1fe3ed210b8b23f16d059/1570556718932-WIJCJYKJFXOVONOG9O42/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/UNHCR%2Blogo.jpg'
  );