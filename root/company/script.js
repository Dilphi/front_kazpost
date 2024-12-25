      document.addEventListener("DOMContentLoaded",function () {

        // Место для обновления текста
        const textContainer = document.getElementById("textConteiner");

        // Кнопки для обновления текста
         const buttons = Array.from(document.querySelectorAll('button')); // Получаем все кнопки

        // Массив с текстами для каждой кнопки
    const texts = [ 
        //Первая кнопка
        `  <h2>Деятельность</h2>
                
            <p>АО «Казпочта» - Национальный оператор почты Казахстана - является одним из базовых элементов общегосударственной инфраструктуры.</p>
                
            <p>АО «Казпочта» предоставляет широкий спектр почтовых, финансовых, брокерских, агентских, электронных услуг. В распоряжении АО «Казпочта» самая масштабная филиальная сеть в стране, охватывающая практически всю территорию Казахстана, особенно на уровне районной и сельской местности. Почтовая сеть является эффективным инструментом для продвижения электронной торговли, транспортно-логистического сервиса, финансовых услуг для бизнеса и населения.</p>
                
            <p>АО «Казпочта» несет ответственность за обеспечение экономической, социальной, экологической стабильности, оказывая общедоступные услуги на всей территории Республики Казахстан. Осознавая свою ответственность за вклад в устойчивое развитие общества, АО «Казпочта» принимает обязательства по социально-ответственному взаимодействию со всеми заинтересованными сторонами. Преимущество АО «Казпочта» в том, что компания представлена в самых отдаленных населенных пунктах страны, и в сложившихся условиях отделения почтовой связи смогут выступить центром экономической активности на селе, и для этого руководством АО «Казпочта» прилагаются все усилия.</p>
                
            <p>В компании активно идет процесс модернизации и перехода к качественному предоставлению услуг, что означает не только улучшение обслуживания, но и технического, операционного, технологического, информационного обновления почтовой сети. АО «Казпочта» поддерживает инициативы, направленные на расширение своего участия в правительственных программах и проектах развития АО «Самрук-Қазына». Интерес к развитию АО «Казпочта» проявляется на самом высоком государственном уровне, что обязывает с особой ответственностью относиться к поставленным задачам.</p> 
            
            <p>История Казахстанской почты</p>
                
            <p>Почта возникла как инструмент по передаче информации и управлению государством и лишь позже стала доступна широким слоям населения. В 1860 году открылось первое почтовое отделение связи в Верном (г. Алматы), вскоре преобразованное в почтово-телеграфную контору, которой в 1883 году подчинялись уже 14 почтовых отделений связи.</p>
                
            <p>В СССР с 1924-го по 1991 год почта Казахской ССР была неотъемлемой частью единой советской системы связи и на территории республики почтовые сборы оплачивались марками Советского Союза.</p>
                
            <p>Великая Отечественная война поставила перед почтой трудную и ответственную задачу - в любых условиях обеспечивать регулярную надежную связь в армии, в тылу, между фронтом и тылом. Особые трудности в начале войны возникали и потому, что большое количество квалифицированных связистов было призвано в армию.</p>
                
            <p>В марте 1946 года Уполномоченный Народного Комиссариата связи СССР при СНК Казахской ССР был переименован в Уполномоченного Министерства связи СССР при Совете Министров Казахской ССР. В 1950 году в республике уже насчитывалось 2438 почтовых предприятий (2083 - в сельской местности). 25 декабря 1954 года Управление Уполномоченного Министерства связи СССР было преобразовано в Министерство связи Казахской ССР, почтовая и электрическая связь образовывали единую отрасль "Связь" в составе этого министерства. С середины 60-х годов в Казахстане функционировало более 4000 отделений связи с полным спектром почтовых услуг. В этот период почтовая связь республики работала рентабельно, но прибыль отрасли в основном направлялась на развитие электросвязи. Основная часть доходов обеспечивалась за счет доставки пенсий и предоставления телеграфно-телефонных услуг. Резкое изменение ситуации в отрасли произошло после приобретения Казахстаном независимости и суверенитета. В этих условиях казахстанская почта (как и все отрасли народного хозяйства) столкнулась с определенными трудностями и проблемами, связанными с либерализацией цен в период коренных изменений экономики страны и нарушением стройной системы почтовой связи бывшего Советского Союза.</p> <p>Казахстан обрёл независимость в декабре 1991 года и сразу же занялся организацией собственной почты. Сложным для казахстанской стал период 1999-2000 годов, когда проходил переход к акционированию, поскольку трансформации подверглась вся деятельность почтовой отрасли. Переход от государственной формы управления к акционированию перевел отрасль на рельсы самофинансирования, выработку самостоятельной политики внешнего заимствования для модернизации материально-технической базы, разработку стратегических направлений развития, нацеленных на усиление позиций компании на рынке, включая развернутую диверсификацию деятельности и завоевание новых ниш.</p>
                
            <p>В настоящее время АО «Казпочта» является единственным акционером (100% доля) компании ООО «Казпост» (ФРГ).</p>
            `,

        //Вторая кнопка
        `
            <h2>Стратегия развития</h2>
                
                <p>СТРАТЕГИЯ РАЗВИТИЯ АО «КАЗПОЧТА» НА 2023 – 2033 ГОДЫ</p>
                
                <p>Миссия:<br>
                Быть надежным звеном, предоставляющим качественные почтово-логистические, финансовые, социальные и государственные услуги, способствуя экономическому росту общества и соединяя всю территорию нашей страны.</p>
                    
                <p>Видение:<br>
                Партнёр, который всегда рядом.</p> 
                    
                <p>Амбиция:<br>
                Каждый второй онлайн заказ в Казахстане обслуживается QazPost.</p> 
                    
                <p>АО "Казпочта" (далее — QazPost) разработало комплексную Стратегию развития на период 2023-2033 годов, которая знаменует собой ключевой этап в эволюции QazPost к лидерству в мировой почтовой и смежных отраслях. Основанная на стратегической диверсификации и партнерстве, Стратегия отражает приверженность QazPost принципам клиентоориентированности, операционной эффективности и адаптивности.</p> 
                    
                <p>В условиях преобразований, происходящих в цифровую эпоху, QazPost осознает необходимость динамичного подхода. Стратегия QazPost основана на использовании глобальных тенденций, развитии глубоких партнерских отношений и расширении спектра услуг, выходящих за рамки традиционных почтовых сфер. Развитие QazPost в области логистики, финансов и социальных услуг подчеркивает стремление соответствовать меняющимся требованиям рынка.</p>
                    
                <p>Руководствуясь принципом создания надежных и устойчивых партнерских отношений, QazPost ставит сотрудничество как приоритетное направление. Осознавая меняющийся ландшафт отрасли, QazPost позиционирует себя как надежного партнера, предлагая комплексные логистические решения, финансовые услуги, способствуя эффективному оказанию социальных и государственных услуг.</p>
                    
                <p>Стратегический вектор развития сотрудничества подчеркивается в ключевых областях деятельности компании:</p>
                    
                <p>· Логистика: QazPost стремится выйти за рамки традиционных услуг доставки и стать B2B-партнером для бизнеса, предоставляя комплексные логистические решения в формате 3PL и выступая в качестве E2E-оператора для международных маркетплейсов. Развитая инфраструктура, охватывающая даже самые отдаленные регионы Казахстана, выделяет QazPost как уникальную площадку для бизнеса, ищущего надежные каналы связи с конечными потребителями.</p> 
                    
                <p>· Финансы: Позиционируя себя не только как посредника в финансовых операциях, QazPost стремится стать финансовым партнером. Укрепляя позиции на рынке финансовых услуг, QazPost предоставит бизнесу возможность предлагать финансовые продукты своим клиентам по модели BaaS и цифровые платежные решения.</p>
                    
                <p>· Социальные и государственные услуги: Используя разветвленную филиальную сеть в качестве инструмента для государственных органов, QazPost стремится обеспечить эффективное предоставление услуг и социальную интеграцию граждан.</p>
                    
                <p>Стратегия предполагает проведение структурных изменений, направленных на повышение операционной эффективности, клиентоориентированности и содействие развитию партнерских отношений. Рассмотрение изменений организационной структуры отражает подход к стратегической эволюции, подчеркивая проактивную позицию QazPost по формированию будущего с учетом рыночных возможностей.</p>
                    
                <p>Путь в будущее QazPost строит на основе стратегических принципов: быть надежным партнером, лидировать в отрасли, способствовать постоянным инновациям и обеспечивать исключительную ценность для наших клиентов. Мы стремимся быть в авангарде отраслевых преобразований, постоянно оправдывая и превосходя ожидания наших клиентов.</p>
        `,

        //Третья кнопка
        `
            <h2>Международное сотрудничество</h2>
                
                <p>Приоритетным направлением международной деятельности АО «Казпочта» является членство во Всемирном Почтовом союзе (ВПС), которое способствует расширению сотрудничества с другими участниками мирового почтового сектора, улучшению качества услуг и повышению продуктивности. АО «Казпочта» является членом Ассоциации государственных почтовых операторов Европы Posteurop, Регионального содружества в области связи (РСС). Одновременно национальный оператор почты Казахстана развивает сотрудничество с иностранными почтовыми администрациями (ИПА) в двустороннем формате.
                </p>

                <p>Памятные даты в блоке международного сотрудничества:</p> <p>• 2010 год - АО «Казпочта» вступило в Ассоциацию государственных почтовых операторов Европы. </p>
                
                <p>• 2014 год - АО «Казпочта» был вручен сертификат ВПС за лучший реализованный проект «Автоматизация потоков клиентской очереди».</p>
                
                <p>• 2014 год - между АО «Казпочта» и ВПС подписано лицензионное соглашение по интеграции информационных систем программ IPS light и системы денежных переводов STEFI.</p>
                
                <p>• 2014 год - состоялся визит экспертов из Ассоциации европейских почтовых операторов PostEurop в АО «Казпочта».</p>
                
                <p>• 2014 год - в г. Сан-Марино (Республика Сан-Марино) прошла Пленарная Ассамблея PostEurop, где было объявлено о переводе АО «Казпочта» со второго класса взносов на пятый, что означает признание улучшения деятельности компании. <p></p>• 2015 год - состоялся визит делегации АО «Казпочта» в рамках ВПС в г. Москва. <p></p>• 2015 год - в г. Берне (Швейцария) состоялись очередные сессии в работе которых приняла участие делегация АО «Казпочта». <p></p>• 2015 год - АО «Казпочта» организован и проведен международный учебный семинар по работе с крупными клиентами с участием представителей из 21 государства Европы и СНГ, г. Астана <p></p>• 2015 год - в г. Астана состоялось совместное 40-е заседание Комиссии РСС.</p>
                
                <p>• 2016 год - АО «Казпочта» вошла в состав административного совета ВПС. <p></p>• 2017 год – АО «Казпочта» организован и проведен семинар ВПС и PostEurop «Операционная готовность к электронной коммерции», г. Астана. <p></p>• 2018 год - пройден аудит ВПС «Оценки операционной готовности учреждений обмена к электронной коммерции».</p>
                
                <p>• 2018 год - проведен региональный семинар Международного бюро ВПС, г. Астана.</p>
                
                <p>• 2020 год – АО «Казпочта» пройдена сертификация ВПС по управлению качеством и получен «Золотой уровень» (А –Level).</p> 
                
                <p>• 2021 год - принято участие в Абиджанском конгрессе ВПС, в рамках которого АО «Казпочта» переизбрано действительным членом Совета по почтовой эксплуатации и Административного совета ВПС.</p>
                
                <p>• 2021 год - АО «Казпочта» избрано Председателем рабочей группы по почтово - финансовым услугам РСС.</p>
                
                <p>• 2022 год - АО «Казпочта» приняло активное участие в весенних сессиях ВПС в г. Берне (Швейцария) <p></p>• 2023 год (17-19.01.2023)- - Международное бюро ВПС в тесном сотрудничестве с АО «Казпочта» организовал семинар по операционной эффективности и развитию электронной коммерции для стран Восточной Европы, Кавказа и Центральной Азии (EECCA), г. Астана.</p>
                
                <p>• 2023 год (7.02.2023)- АО «Казпочта» приняло участие в “The delivery conference 2023” по вопросам электронной коммерции, Лондон, Великобритания.</p> 
                
                <p>• 2023 год (13-17.02.2023)- подписан меморандум с почтой Египта совместно с посольством РК в Египте о совместном выпуске почтовых марок Республики Казахстан и Арабской Республики Египет, посвящённых 800-летию Султана Бейбарса, Каир, Египет.</p>
                
                <p>• 2023 год (20-22.02.2023)- выездная встреча на производственных объектах в рамках сотрудничества и обмена опытом с почтой Эстонии, Таллин, Эстония.</p> <p>• 2023 год (07-09.03.2023)- АО “Казпочта” приняло участие в конференции и учебной поездке Ready 4Trade «Использование потенциала эл. коммерции в ЦА», Дубаи, ОАЭ.</p>
                
                <p>• 2023 год (28.03.2023)- АО «Казпочта» приняло участие в саммите Лидеров логистики (Leaders in Logistics Summit), Лондон, Великобритания.</p>
                
                <p>• 2023-состоялась встреча с представителями Deutsche Post DHL для обсуждения стратегического партнерства, Бонн, Германи</p>`,

        //Четвёртая кнопка
        `<h2>Лицензии</h2>
                
        <p>Лицензия на проведение банковской операции в национальной и иностранной валюте по приему депозитов, открытие и ведение банковских счетов физических лиц (№ 4.3.11 от 10.01.2019 года, выдана Национальным Банком Республики Казахстан);</p>
                
        <p>Лицензия на занятие брокерской и дилерской деятельности с правом ведения счетов в качестве номинального держателя и трансфер-агентской деятельности на рынке ценных бумаг (№3.2.239/2 от 10 января 2019 года, выдана Национальным Банком Республики Казахстан);</p>
                
        <p>Государственная лицензия на обращение с приборами и установками, генерирующими ионизирующее излучение (№18022282 от 11.12.2018 года, выдана Комитетом атомного и энергетического надзора и контроля Министерства энергетики Республики Казахстан);</p>
                
        <p>Государственная лицензия на деятельность, связанную с оборотом наркотических средств (№21013498 от 30.03.2021 года, выдана Министерством внутренних дел Республики Казахстан);</p>
                
        <p>Государственная лицензия на деятельность, связанную с оборотом прекурсоров (№21013497 от 30.03.2021 года, выдана Министерством внутренних дел Республики Казахстан);</p>
                
        <p>Государственная лицензия на деятельность, связанную с оборотом психотропных веществ (№21013496 от 30.03.2021 года, выдана Министерством внутренних дел Республики Казахстан).</p>`,

        //Пятая кнопка
        ` <h2>Комплаенс</h2>  
                
        <p>Добро пожаловать на официальный раздел Службы комплаенс – контроля АО «Казпочта»!</p>
                
        <p>Служба комплаенс – контроля АО «Казпочта» (далее – Общество) создана в 2018 году решением Совета директоров Общества.</p> 
                
        <p>Служба комплаенс – контроля Общества, является независимым структурным подразделением, непосредственно подчиненным и подотчетным Совету директоров Общества.</p>
                
        <p>Основными задачами Службы комплаенс – контроля является внедрение программы комплаенс и осуществление контроля за организацией и функционированием системы противодействия корруции.</p>
                
        <p>Горячая Линия АО «Казпочта»!</p>
                
        <p>Акционерное общество «Казпочта» придерживается принципов добросовестности, честности прозрачности ведения бизнеса и уделяет особое внимание соблюдению данных принципов нашими сотрудниками и партнерами.</p>
                
        <p>Горячая линия по вопросам этики и коррупционных правонарушений Совета директоров АО «Казпочта» – это возможность конфиденциально сообщить нам о любых случаях коррупции, мошенничества, проявлений незаконных или недобросовестных действий, как со стороны сотрудников Компании, так и третьих лиц.</p>
                
        <p>В рамках Горячей линии рассматриваются обращения, связанные с взяточничеством и коррупцией, нарушениями в области бухгалтерского учета, раскрытием защищаемой информации, неравными условиями найма и труда, неэтичным поведением, угрозами здоровью, безопасности и окружающей среде.</p>
                
        <p>Мы гарантируем, что все сообщения, в том числе анонимные, будут объективно рассмотрены, с сохранением конфиденциальности заявителя.</p>
                
        <p>Обращения могут предоставляться всеми лицами на русском, казахском и английском языках посредством следующих каналов связи:</p>  
                
        <ul>
            <li>по телефонному номеру 8 800 080 4747. (Звонок на территории РК бесплатный); либо</li>
            <li>на электронную почту mail@sk-hotline.kz; либо</li>  
            <li>через интернет-портал http://sk-hotline.kz/; либо</li>  
            <li>через WhatsApp Мессенджер с номером +7 771 191 8816.</li>
        </ul>  
                
        <p>Горячая линия работает круглосуточно без выходных в режиме «24/7». При этом телефонные звонки принимаются Оператором с 09.00 до 18.00 с понедельника по пятницу. В остальное время (включая праздничные / выходные дни) телефонные обращения поступают на автоответчик с возможностью записи обращений. Обработка обращений, полученных в нерабочее время, осуществляется в первый рабочий день после получения обращения.</p>
                
        <p>Горячая линия доступна как для работников Компании, так и для третьих лиц, взаимодействующих с Компанией (клиентов, контрагентов и иных заинтересованных лиц). В целях обеспечения конфиденциальности и анонимности все полученные обращения принимаются и обрабатываются внешним независимым Оператором, который ежедневно передает информацию о поступивших обращениях в Службу комплаенс.</p>
                
        <p>Если вы желаете не раскрывать свои данные при подаче обращения, то они не будут регистрироваться и не будут передаваться Компании. Однако в целях наиболее эффективной и своевременной обработки Вашего обращения Вам будет предложено оставить контактную информацию. При этом, обращаясь на Горячую линию, Вы соглашаетесь на обработку Ваших персональных данных работниками внешнего независимого Оператора, и передачу полученных данных ответственным работникам Компании, которые обеспечат профессиональное и конфиденциальное рассмотрение Вашего обращения.</p>
                
        <p>Важно! Данная горячая линия не является экстренной службой, а также службой работы с потребителями. Если ситуация, о которой Вы хотите сообщить, представляет непосредственную угрозу жизни и здоровью, Вам следует незамедлительно позвонить по номеру вызова соответствующих экстренных служб.</p>
                    
        <p>По вопросам, связанным с предоставляемыми услугами просим обращаться в единый Контакт – центр АО «Казпочта» по номеру 1499 или в чат – бот на сайте https://post.kz/.</p>
                
        <p>Горячая линия по вопросам этики и коррупционных правонарушений Совета директоров АО «Казпочта» не должна рассматриваться в качестве канала для обращений, порядок осуществления которых регулируется Законом Республики Казахстан «О порядке рассмотрения обращений физических и юридических лиц».</p>`,

        //Шестая кнопка
        `<h2>Республиканская служба специальной связи</h2>
                
        <p>РЕСПУБЛИКАНСКАЯ СЛУЖБА СПЕЦИАЛЬНОЙ СВЯЗИ <br>
        - НАДЕЖНЫЙ ДЕЛОВОЙ ПАРТНЕР</p>

        <p>Гарантия сохранности и безопасности отправлений, доставка в установленные сроки. <br>
            География доставки: Республика Казахстан, страны СНГ. <br>
            Перевозки: собственный автотранспорт, в том числе бронированные автомобили, спецвагоны, авиатранспорт казахстанских и российских авиакомпаний.</p>
            
        <ul>
            <li style="list-style: none;">Лицензии, разрешения:</li>
            <li>на осуществление работ с использованием сведений закрытого характера; </li>
            <li>на перевозку наркотических средств и психотропных веществ.</li>
        </ul>
            
         <ul>
            <li style="list-style: none;">Краткая информация РССС:</li>
            <li>20 служб в областных и городских центрах РК</li>
            <li>123 отделения специальной связи на территории РК</li> 
            <li>Собственный парк специально оборудованных автомобилей</li> 
            <li>Гарантированная доставка корреспонденции и грузов по РК, в страны СНГ не ниже районного центра </li>
            <li>Все перевозимые грузы застрахованы </li>
            <li>Перевозка в бронированных автомобилях в сопровождении вооруженной охраны </li>
            <li>Индивидуальный подход при организации маршрута доставки </li>
            <li>Хранение ценных отправлений в специализированных хранилищах, оборудованных сейфовыми дверями и современной системой сигнализации при круглосуточной охране.</li>
        </ul> 
        <ul>
            <li style="list-style: none;">Виды услуг для юридических лиц по перевозке и доставке по Республике Казахстан и в страны СНГ:</li>
            <li>пакетов, посылок и метизов</li>
            <li>драгоценных металлов, ювелирных изделий, высокоценной бижутерии</li>
            <li>отправлений с оценочной стоимостью.</li>
        </ul>
        <ul>
            <li style="list-style: none;">По Республике Казахстан:</li>
            <li>фармацевтических, лекарственных препаратов, наркотических, психотропных веществ и прекурсоров</li>
            <li>гражданского, охотничьего оружия и патронов к нему</li>
            <li>опасных грузов.</li>
        </ul>
            
        <ul>
            <li style="list-style: none;">Также предоставляем дополнительные услуги:</li>
            <li>хранение отправлений в хранилище спецсвязи;</li>
            <li>пересылка ценностей и грузов по авианакладным из Республики Казахстан в Российскую Федерацию и в обратном направлении.</li>
        </ul>
            <ul>
            <li style="list-style: none;">Новые услуги:</li>
            <li>Доставка специальных отправлений до физических лиц</li>
            <li>Ускоренная доставка посылок авиатранспортом спецсвязи до 10 кг</li>
        </ul>
            
        <p>Информацию по тарифам и перечню предоставляемых услуг можно получить по адресам службы специальной связи в городах Казахстана:</p>
        <ol>
            <li>г. Алматы, ул. Бродского, 33. <br>
                Телефоны: (727) 393-17-35 (отдел продаж), 393-17-41, 393-17-42 (дежурный), <br> 
                393-17-37 (отдел приема и обработки спецотправлений). <br>
                E-mail: post_r@krsss.kazpost.kz</li> <br> <br>
            <li>г. Астана, телефоны: 8 (7172) 611-699 (вн. 1143); +7 (7172) 326-860 (дежурный)</li>
            <liг. Актобе, телефон: +7 (777) 554 54 06></li>
            <li>г. Атырау, телефоны: +7 (7122) 36-71-25, 36-29-63</li>
            <li>г. Кокшетау, телефоны: +7 (7162) 55-12-63, 25-26-22, 25-83-60</li>
            <li>г. Талдыкорган, телефоны: +7 (7282) 26-81-30, 26-80-25;</li>
            <li>г. Усть – Каменогорск, телефоны: +7 (7232) 56-96-88, 50-02-10</li>
            <li>г. Семей, телефоны: +7 (7222) 50-68-01, 50-69-45</li>
            <li>г. Тараз, телефоны: +7 (7262) 34-88-58, 45-28-57 (дежурный)</li>
            <li>г. Уральск, телефоны: +7 (7112) 51-77-61, 51-06-54</li>
            <li>г. Караганда, телефоны: +7 (7212) 43-23-05, 43-12-55, 43-69-49, 43-27-87</li>
            <li>г. Костанай, телефоны: +7 (7142) 53-71-11, 53-46-46, 56-46-44;</li>
            <li>г. Кызылорда, телефоны: +7 (7242) 23-35-11;</li>
            <li>г. Актау, телефоны: +7 (7292) 42-47-28, 42-47-30;</li>
            <li>г. Павлодар, телефоны: +7 (7182) 33-94-50, 33-94-61;</li>
            <li>г. Петропавловск, телефоны: +7 (7152) 33-35-40, 33-49-48, 33-88-02</li>
            <li>г. Шымкент, телефоны: +7 (7252) 53-02-06.</li>
            <li>г. Туркестан, телефоны: +7 (7253) 53-02-06, +7 (705) 483 93 77</li>
            <li>г. Жезказган, телефоны: +7-777-796-27-46</li>
        </ol>`,

            //Седьмая кнопка
            `<h2>Пресс-служба</h2>

            <p>Пресс-служба АО «Казпочта»</p>

            <p>8 (7172) 61 16 99, вн. 1338 <br>
            + 7 701 509 86 01 <br>
            b.bukharbai@kazpost.kz</p>`,
                
            //Восьмая кнопка
            `<h2>Контакты</h2>
                    
            <p>Центральный аппарат</p>
            <p>АО «Казпочта»</p>
            <p>010000, г. Астана, ул.Бейбитшилик, 37</p>
            <p>Контакт-центр АО "Казпочта":</p>
            <p>+7 727 259 06 05 - Бесплатно для г. Алматы, остальные регионы 7 тг/мин</p>
            <p>1499 (Круглосуточно) - Для всех абонентов 21 тг/мин</p>
            <p>Бесплатный звонок через Qpost посредством сайта или мобильного приложения post.kz. Обслуживание 24 часа в сутки 7 дней в неделю.</p>
            <p>Telegram-бот @KazPostBot</p>
            <p>1499@kazpost.kz</p>
            <p>Оставить обращение можно на сайте post.kz по адресу: https://post.kz/appeal</p>
            <p>Филиал АО «Казпочта» Республиканская служба специальной связи</p>
            <p>050034, г. Алматы, ул. Бродского, 33</p>
            <p>Приемная – 8 (727) 393-17-20, вн. 70002</p>
            <p>Отдел продаж – 8 (727) 393-17-35</p>
            <p>E-mail: post_r@krsss.kazpost.kz</p>
            <p>Филиалы</p>
            <p>Астанинский почтамт</p>
            <p>010000, г. Астана, ул.Ауэзова, 13</p>
            <p>Приемная директора:+7 7172 580296 вн.4015</p>
            <p>Справочная служба: +7 7172 580296 вн. 4160</p>
            <p>astanapost@kazpost.kz</p>
            <p>Алматинский почтамт</p>
            <p>050000, г. Алматы, ул. Богенбай батыра, 134,</p>
            <p>+7 727 259 - 88 - 99,</p>
            <p>+7 7272 61-24-05</p>
            <p>post_alm@kazpost.kz</p>
            <p>Алматинский областной филиал</p>
            <p>040000, г. Талдыкорган, проспект Назарбаева, 53</p>
            <p>+7 7282 30-69-20 (внутр. 60000)</p>
            <p>almatyof@kazpost.kz</p>
            <p>Акмолинский областной филиал</p>
            <p>020000,г. Кокшетау, ул. Абая, 108,</p>
            <p>+7 7162 55 13 06</p>
            <p></p>post3@kazpost.kz
            <p></p>Атырауский областной филиал
            <p></p>060008, г. Атырау, ул.Баймуханова, 70а,
            <p>+7 7122 36-71-00</p>
            <p>post.atyrau@kazpost.kz</p>
            <p>Актюбинский областной филиал</p>
            <p>030000, г. Актобе, пр. Абилкайыр хана,62,</p>
            <p>+7 7132 90-12-00</p>
            <p>priemnay.aktobe@kazpost.kz</p>
            <p>Восточно-Казахстанский областной филиал</p>
            <p>070000, Восточно-Казахстанская область, г. Усть-Каменогорск, ул.К.Кайсенова,57</p>
            <p>+7 7232 569 694</p>
            <p>vkof.priem@kazpost.kz</p>
            <p>priemnaya.dir@kazpost.kz</p>
            <p>Жамбылский областной филиал</p>
            <p>080000, Жамбылская область,г. Тараз, ул. Толе би 79,</p>
            <p>+7 726 45-82-10</p>
            <p>+7 726 43-37-08</p>
            <p>post@taraz.kazpost.kz</p>
            <p>zhambyl.priyomnaya@kazpost.kz</p>
            <p>Западно-Казахстанский областной филиал</p>
            <p>090000, Западно-Казахстанская область, г. Уральск, ул. К. Аманжолова 104/1,</p>
            <p>+7 7112 51-17-98</p>
            <p>+7 7112 50-04-82</p>
            <p>ural.priemnaya@kazpost.kz</p>
            <p>Карагандинский областной филиал</p>
            <p>100000, г.Караганда, пр. Бухар Жырау, 39</p>
            <p>+7 7212 41-15-12</p>
            <p>post@krg.kazpost.kz</p>
            <p>Костанайский областной филиал</p>
            <p>110000, г. Костанай, пр. Аль-Фараби, 69</p>
            <p>+7 7142 99 99 66</p>
            <p>+7 7142 53-29-18</p>
            <p>kof_post@kazpost.kz</p>
            <p>Кызылординский областной филиал</p>
            <p>120000, г. Кызылорда, ул. Муратбаева, 38</p>
            <p+7 7242 60 56 80></p>
            <p>post-kyzylorda@kazpost.kz</p>
            <p>Мангистауский областной филиал</p>
            <p>130000, Мангистауская область, город Актау, 14 мкр, Бизнес Центр «Звезда Актау» здание 61 – добавить новую информацию,</p>
            <p>+7 7292 42-47-02</p>
            <p>priemnaya_mof@kazpost.kz</p>
            <p>Павлодарский областной филиал</p>
            <p>140000, г. Павлодар, ул.Академика Сатпаева, 50</p>
            <p>>+7 7182 32-50-44</p
            <p>pavlodar.priemnaya@kazpost.kz</p>
            <p>Северо-Казахстанский областной филиал</p>
            <p>150000, Северо-Казахстанская область, г. Петропавловск, ул. Пушкина, 61,</p>
            <p>+7 7152 463232</p>
            <p>факс: 8 (7152) 46-17-74</p>
            <p>priemnaya.skof@kazpost.kz</p>
            <p>Туркестанский областной филиал</p>
            <p>160000, г. Шымкент, ул. Казыбек би, 24,</p>
            <p>+7 7252 53-48-03</p>
            <p>post@shimkent.kazpost.kz</p>
            <p>ukof.priyomnaya@kazpost.kz</p>
            <p>Филиал АО "Казпочта" - "Информационно-логистический центр "ЮГ"</p>
            <p>050017, Алматинская обл., Илийский район, Казциковский сельский округ, аул (село) Казцик, ул.Бережинский Алексей Федорович, строение 4, Корпус 2</p>
            <p>+7 727 330- 60- 10</p>
            <p>+7 727 330- 60 -15</p>
            <p>post_ilc@kazpost.kz</p>
            <p>Канцелярия: тел. +7 7172 611 699, вн.номер 1135</p>`
        ];

        // Начальная кнопка с начальным цветом
        buttons[0].style.backgroundColor = '#007bff';


        // Функция для обновления текста
        function addText(newText) {
        textContainer.innerHTML = newText;
        }

        // Функция для сброса цвета кнопок и выделения активной кнопки
        function setActiveButton(activeIndex) {
        buttons.forEach((btn, index) => {
            btn.style.backgroundColor = index === activeIndex ? '#007bff' : '#355dee';
        });
        }

        // Назначаем обработчики для всех кнопок
        buttons.forEach((btn, index) => {
        btn.addEventListener("click", function () {
            addText(texts[index]); // Обновляем текст для каждой кнопки из массива texts
            setActiveButton(index); // Меняем цвет активной кнопки
        });
        });
            
            
            
      })
      