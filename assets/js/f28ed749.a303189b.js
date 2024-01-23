"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[8715],{4273:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>h,toc:()=>g});var i=r(5893),s=r(1151);const t=r.p+"assets/images/prioritysoc-a3ca3690db871f4ab9f0dec062a1d3b9.webp",d=r.p+"assets/images/buffersoc-7de54dc8a40af3bd5a1c403da13d54cc.webp",a=r.p+"assets/images/bufferstartsoc-1ccd7ffc8e59c35b918e4b599f4eb20d.webp",l={sidebar_position:2},c="site",h={id:"reference/configuration/site",title:"site",description:"Beschreibt den Standort mit den vorhandenen und ben\xf6tigten Ger\xe4ten der Hausinstallation und ist f\xfcr das Regeln der verf\xfcgbaren Leistung zust\xe4ndig.",source:"@site/docs/reference/configuration/site.mdx",sourceDirName:"reference/configuration",slug:"/reference/configuration/site",permalink:"/docs/reference/configuration/site",draft:!1,unlisted:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/docs/reference/configuration/site.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"evcc.yaml",permalink:"/docs/reference/configuration/"},next:{title:"loadpoints",permalink:"/docs/reference/configuration/loadpoints"}},u={},g=[{value:"Erforderliche Parameter",id:"erforderliche-parameter",level:2},{value:"<code>title</code>",id:"title",level:3},{value:"<code>meters</code>",id:"meters",level:3},{value:"Optionale Parameter",id:"optionale-parameter",level:2},{value:"<code>meters.grid</code>",id:"metersgrid",level:3},{value:"<code>meters.pv</code>",id:"meterspv",level:3},{value:"<code>meters.battery</code>",id:"metersbattery",level:3},{value:"<code>meters.aux</code>",id:"metersaux",level:3},{value:"<code>prioritySoc</code>",id:"prioritysoc",level:3},{value:"<code>bufferSoc</code>",id:"buffersoc",level:3},{value:"<code>bufferStartSoc</code>",id:"bufferstartsoc",level:3},{value:"<code>residualPower</code>",id:"residualpower",level:3},{value:"<code>grid</code> <code>meter</code> vorhanden",id:"grid-meter-vorhanden",level:4},{value:"Nur <code>pv</code> <code>meter</code> vorhanden",id:"nur-pv-meter-vorhanden",level:4},{value:"<code>maxGridSupplyWhileBatteryCharging</code>",id:"maxgridsupplywhilebatterycharging",level:3}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"site",children:(0,i.jsx)(n.code,{children:"site"})}),"\n",(0,i.jsx)(n.p,{children:"Beschreibt den Standort mit den vorhandenen und ben\xf6tigten Ger\xe4ten der Hausinstallation und ist f\xfcr das Regeln der verf\xfcgbaren Leistung zust\xe4ndig."}),"\n",(0,i.jsx)(n.p,{children:"Um das Laden mit PV-\xdcberschuss zu regeln, ist ein auslesbarer Z\xe4hler direkt hinter dem Netzanschlusspunkt notwendig. Zus\xe4tzlich k\xf6nnen auch Ger\xe4te f\xfcr die PV-Leistung und Hausbatterie(n) angegeben werden. Mehrere Ger\xe4te werden dabei in der Leistung intern automatisch addiert. Bei Batteriespeichern wird der Mittelwert des Ladezustands gebildet."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"site:\n  - title: Zuhause # display name for UI\n    meters:\n      grid: mygridmeter # grid meter reference\n      pv: # (pvs = veraltet)\n        - mypv1 # first pv meter reference\n        - mypv9 # second pv meter reference\n      battery: # (batteries = veraltet)\n        - mybat5 # battery meter reference\n      aux:\n        - myaux1\n    residualPower: 100\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"erforderliche-parameter",children:"Erforderliche Parameter"}),"\n",(0,i.jsx)(n.h3,{id:"title",children:(0,i.jsx)(n.code,{children:"title"})}),"\n",(0,i.jsx)(n.p,{children:"Die angezeigte Beschreibung des Ladepunktes, wird in der UI angezeigt."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"title: Zuhause\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"meters",children:(0,i.jsx)(n.code,{children:"meters"})}),"\n",(0,i.jsxs)(n.p,{children:["Definiert welche konfigurierten ",(0,i.jsx)(n.a,{href:"meters",children:(0,i.jsx)(n.code,{children:"meter"})})," (Strommessger\xe4te) als welche Art Messpunkt verwendet werden sollen.\nHier erfolgt somit die logische Verkn\xfcpfung der Ger\xe4tedefiniton mit dem Verwendungszweck.\nEin zun\xe4chst universeller Z\xe4hler bekommt somit entsprechend seines Einbauortes in der Hausinstallation einen Zweck zugewiesen."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Es ist mindestens die Konfiguration eines ",(0,i.jsx)(n.code,{children:"grid"})," oder eines ",(0,i.jsx)(n.code,{children:"pv"})," Elementes notwendig!\nOhne mindestens einen der beiden Eintr\xe4ge kann evcc nicht verwendet werden!"]})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"site:\n  meters:\n    grid: mygridmeter # grid meter reference\n    pv: mypv1 # pv meter reference\n    battery: mybat2 # battery meter reference\n    aux: myaux1\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"optionale-parameter",children:"Optionale Parameter"}),"\n",(0,i.jsx)(n.h3,{id:"metersgrid",children:(0,i.jsx)(n.code,{children:"meters.grid"})}),"\n",(0,i.jsxs)(n.p,{children:["Definiert das ",(0,i.jsx)(n.a,{href:"meters",children:(0,i.jsx)(n.code,{children:"meter"})})," (Strommessger\xe4t), welches die Messwerte des Netzanschlusspunktes liefert."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"M\xf6gliche Werte"}),": Wert eines ",(0,i.jsx)(n.code,{children:"name"})," Parameters in der ",(0,i.jsx)(n.a,{href:"#meters",children:(0,i.jsx)(n.code,{children:"meters"})})," Konfiguration."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"grid: mygridmeter # grid meter reference\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"meterspv",children:(0,i.jsx)(n.code,{children:"meters.pv"})}),"\n",(0,i.jsxs)(n.p,{children:["Definiert die ",(0,i.jsx)(n.a,{href:"meters",children:(0,i.jsx)(n.code,{children:"meter"})})," (Strommessger\xe4te), welche die PV-Erzeugungswerte liefern.\nEs k\xf6nnen mehrere Ger\xe4te angegeben werden. Die Leistungsdaten werden automatisch addiert."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"M\xf6gliche Werte"}),": Ein Wert oder eine Liste von Werten eines ",(0,i.jsx)(n.code,{children:"name"})," Parameters in der ",(0,i.jsx)(n.a,{href:"#meters",children:(0,i.jsx)(n.code,{children:"meters"})})," Konfiguration. Wobei die Listenversion auch bei Einzelwerten genutzt werden kann."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"pv: myonlypv # single pv meter reference\n"})}),"\n",(0,i.jsx)(n.p,{children:"oder"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"pv: # (pvs = veraltet)\n  - myoldpv # first pv meter reference\n  - mynewestpv # second pv meter reference\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"metersbattery",children:(0,i.jsx)(n.code,{children:"meters.battery"})}),"\n",(0,i.jsxs)(n.p,{children:["Definiert die ",(0,i.jsx)(n.a,{href:"meters",children:(0,i.jsx)(n.code,{children:"meter"})})," (Strommessger\xe4te), welche die Messdaten des/der Batteriespeicher(s) liefern.\nEs k\xf6nnen mehrere Ger\xe4te angegeben werden. Die Leistungsdaten werden automatisch addiert und aus den Speicherf\xfcllst\xe4nden wird ein Mittelwert gebildet."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"M\xf6gliche Werte"}),": Ein Wert oder eine Liste von Werten eines ",(0,i.jsx)(n.code,{children:"name"})," Parameters in der ",(0,i.jsx)(n.a,{href:"#meters",children:(0,i.jsx)(n.code,{children:"meters"})})," Konfiguration. Wobei die Listenversion auch bei Einzelwerten genutzt werden kann."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"battery: myonlybat # single battery meter reference\n"})}),"\n",(0,i.jsx)(n.p,{children:"oder"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"battery: # (batteries = veraltet)\n  - mysmallbat # first battery meter reference\n  - myhugebat # second battery meter reference\n"})}),"\n",(0,i.jsx)(n.h3,{id:"metersaux",children:(0,i.jsx)(n.code,{children:"meters.aux"})}),"\n",(0,i.jsx)(n.p,{children:"Definiert die meter (Strommessger\xe4te), welche die Messdaten externer Ger\xe4te liefern, die \xfcber eine eigene \xdcberschussregelung verf\xfcgen, aber nicht direkt durch evcc gesteuert werden. Es k\xf6nnen mehrere Ger\xe4te angegeben werden. Die Leistungsdaten werden automatisch addiert."}),"\n",(0,i.jsx)(n.p,{children:"In evcc flie\xdft diese Leistung in die Berechnung der prinzipiell zur Verf\xfcgung stehenden \xdcberschussleistung zur Fahrzeugladung ein.\nEs wird davon ausgegangen, dass die mittels der Aux-Meter gemessenen Ger\xe4te ihren Leistungsbedarf selbstst\xe4ndig und zeitnah reduzieren bzw. vollst\xe4ndig unterbrechen, wenn die gemessene Aux-Leistung durch evcc der Fahrzeugladung zugeschlagen wird."}),"\n",(0,i.jsx)(n.p,{children:"Positiver Wert: zus\xe4tzliche verf\xfcgbare \xdcberschussleistung (steht der Fahrzeugladung zur Verf\xfcgung)"}),"\n",(0,i.jsx)(n.p,{children:"Negativer Wert: fehlende \xdcberschussleistung (steht der Fahrzeugladung nicht zur Verf\xfcgung)"}),"\n",(0,i.jsx)(n.p,{children:"Beispiele:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ein Heizstab f\xfcr die Warmwasserbereitung, welcher autark auf Basis des PV-\xdcberschuss am Netz\xfcbergang geregelt wird. Wenn die Leistungsmessung dieses Heizstabes als ",(0,i.jsx)(n.code,{children:"aux"}),"-Meter gemessen und eingerichtet wird, steht die gesamte \xdcberschussleistung (Leistung des Heizstabs plus ggf. verbleibende Netzeinspeisung) jederzeit bevorzugt der Fahrzeugladung zur Verf\xfcgung. Greift die Fahrzeugladung darauf zu, sorgt die autarke Regelung des Heizstabes selbstst\xe4ndig daf\xfcr, dass dessen Leistung entsprechend reduziert wird."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"M\xf6gliche Werte"}),": Ein Wert oder eine Liste von Werten eines ",(0,i.jsx)(n.code,{children:"name"})," Parameters in der ",(0,i.jsx)(n.a,{href:"#meters",children:(0,i.jsx)(n.code,{children:"meters"})})," Konfiguration. Wobei die Listenversion auch bei Einzelwerten genutzt werden kann."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"aux: myaux # single aux meter reference\n"})}),"\n",(0,i.jsx)(n.p,{children:"oder"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"aux:\n  - myaux1 # first aux meter reference\n  - myaux2 # second aux meter reference\n"})}),"\n",(0,i.jsx)(n.h3,{id:"prioritysoc",children:(0,i.jsx)(n.code,{children:"prioritySoc"})}),"\n",(0,i.jsx)(n.admonition,{title:"veraltet in yaml",type:"note",children:(0,i.jsx)(n.p,{children:"Dieser Wert kann und sollte \xfcber den Batterieeinstellungen-Dialog in der UI konfiguriert werden."})}),"\n",(0,i.jsx)("img",{src:t,style:{maxWidth:400}}),"\n",(0,i.jsx)(n.p,{children:"Die Ladung der Hausbatterie hat unterhalb des angegebenen Soc (%) Wertes Priorit\xe4t gegen\xfcber der Fahrzeugladung.\nSteht unterhalb dieses Wertes mehr Erzeugungsleistung zur Verf\xfcgung als der Batteriespeicher aufnimmt, kann dieser \xdcberschuss trotzdem nachrangig zur Fahrzeugladung verwendet werden.\nWenn die Hausbatterie oberhalb des Wertes geladen wird, wird die Batterieladeleistung f\xfcr das Laden des EVs als verf\xfcgbare \xdcberschussleistung betrachtet. Somit hat dann die Fahrzeugladung Priorit\xe4t bei der Verwendung der \xdcberschussleistung.\nIst deaktiviert (entspricht 0%) wenn kein Wert angegeben wird."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"prioritySoc: 50 # Hausbatterie bekommt bis zum Soc 50% Priorit\xe4t beim laden\n"})}),"\n",(0,i.jsx)(n.h3,{id:"buffersoc",children:(0,i.jsx)(n.code,{children:"bufferSoc"})}),"\n",(0,i.jsx)(n.admonition,{title:"veraltet in yaml",type:"note",children:(0,i.jsx)(n.p,{children:"Dieser Wert kann und sollte \xfcber den Batterieeinstellungen-Dialog in der UI konfiguriert werden."})}),"\n",(0,i.jsx)("img",{src:d,style:{maxWidth:400}}),"\n",(0,i.jsx)(n.p,{children:"Erlaubt das Entladen einer Hausbatterie oberhalb des angegebenen Soc (%) Wertes, wenn zu wenig Solar\xfcberschuss (unterhalb der Mindestladeleistung) zur Verf\xfcgung steht. Somit werden Schwankungen in der Erzeugung oder beim Verbrauch prim\xe4r von der Hausbatterie ausgeglichen. Reicht die Entladeleistung der Hausbatterie nicht aus, um die Mindestladeleistung des Fahrzeugs zu liefern, wird der Rest aus dem Netz bezogen."}),"\n",(0,i.jsxs)(n.p,{children:["Es wird im Modus ",(0,i.jsx)(n.code,{children:"PV"})," automatisch ein Ladevorgang gestartet, sobald genug Solar\xfcberschuss vorhanden ist."]}),"\n",(0,i.jsx)(n.p,{children:"Ist deaktiviert (entspricht >100%) wenn kein Wert angegeben wird."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"bufferSoc: 80 # Hausbatterie wird oberhalb Soc 80% als Puffer genutzt\n"})}),"\n",(0,i.jsx)(n.h3,{id:"bufferstartsoc",children:(0,i.jsx)(n.code,{children:"bufferStartSoc"})}),"\n",(0,i.jsx)(n.admonition,{title:"veraltet in yaml",type:"note",children:(0,i.jsx)(n.p,{children:"Dieser Wert kann und sollte \xfcber den Batterieeinstellungen-Dialog in der UI konfiguriert werden."})}),"\n",(0,i.jsx)("img",{src:a,style:{maxWidth:400}}),"\n",(0,i.jsxs)(n.p,{children:["Erlaubt im Modus ",(0,i.jsx)(n.code,{children:"PV"})," den Start eines Ladevorgangs oberhalb des angegebenen Soc (%) Wertes, auch wenn nicht genug Solar\xfcberschuss vorhanden ist."]}),"\n",(0,i.jsx)(n.p,{children:"Reicht die Entladeleistung der Hausbatterie nicht aus, um die Mindestladeleistung des Fahrzeugs zu liefern, wird der Rest aus dem Netz bezogen."}),"\n",(0,i.jsxs)(n.p,{children:["Kann im UI nur ge\xe4ndert werden, wenn ",(0,i.jsx)(n.code,{children:"bufferSoc"})," < 100% eingestellt ist"]}),"\n",(0,i.jsx)(n.p,{children:"Ist deaktiviert (entspricht 0%) wenn kein Wert angegeben wird."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Beispiel"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"bufferStartSoc: 90 # hat die Hausbatterie Soc 90& erreicht, startet der Ladevorgang\n"})}),"\n",(0,i.jsx)(n.h3,{id:"residualpower",children:(0,i.jsx)(n.code,{children:"residualPower"})}),"\n",(0,i.jsx)(n.p,{children:'Legt den Soll-Arbeitspunkt der \xdcberschussregelung am Netz\xfcbergang (Gridmeter) fest. Der Standardwert ist 0 (Watt).\nPositive Werte verschieben den Sollwert in Richtung Netzeinspeisung, negative Werte in Richtung Netzbezug.\nMit diesem Wert wird der durch die Steuerung einzustellende "Ruhezustand" des Regelkreises eingestellt.'}),"\n",(0,i.jsx)(n.p,{children:"Insbesondere im Zusammenspiel mit weiteren unabh\xe4ngigen \xdcberschussausregelungen wie z. B. der eines Batteriespeichers ist es obligatorisch, diesen Wert anzupassen, um ein definiertes Systemverhalten mit klaren Priorit\xe4ten zu erzielen."}),"\n",(0,i.jsx)(n.p,{children:"Soll im PV-Modus ein Netzbezugsanteil verbleiben bzw. zugelassen werden, muss hier eine negative Leistung entsprechend des Maximalanteils des Netzbezugs konfiguriert werden."}),"\n",(0,i.jsxs)(n.h4,{id:"grid-meter-vorhanden",children:[(0,i.jsx)(n.code,{children:"grid"})," ",(0,i.jsx)(n.code,{children:"meter"})," vorhanden"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Positiver Wert: Verbleibende Netzeinspeiseleistung"}),"\n",(0,i.jsx)(n.li,{children:"Negativer Wert: Verbleibende Netzbezugsleistung"}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"nur-pv-meter-vorhanden",children:["Nur ",(0,i.jsx)(n.code,{children:"pv"})," ",(0,i.jsx)(n.code,{children:"meter"})," vorhanden"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Positiver Wert: Typischer Hausverbrauch, um damit den PV-\xdcberschuss absch\xe4tzen zu k\xf6nnen"}),"\n",(0,i.jsx)(n.li,{children:"Negativer Wert: angegebene Leistung wird zur PV-Leistung addiert und erh\xf6ht die zur Verf\xfcgung stehende Ladeleistung (Achtung: Netzbezug)"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Bei Existenz eines Batteriespeichers wird dringend empfohlen hier einen kleinen Wert von 100 bis 300 (Watt) einzutragen, um damit eine Speicherladung gem\xe4\xdf der konfigurierten Priorit\xe4ten (siehe ",(0,i.jsx)(n.code,{children:"prioritySoc"}),') zu erm\xf6glichen. Andernfalls "sieht" die unabh\xe4ngige Regelung des Speichers keinen nutzbaren \xdcberschuss.\nEbenso l\xe4sst sich damit bei schnellen Erzeugungs- und Lastwechseln auch ohne Speicher ein kurzzeitiger Netzbezug besser vermeiden.']})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:'Beispiel "Batteriespeicher"'}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"residualPower: 100\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:'Beispiel "Netzbezugsanteil"'}),":"]}),"\n",(0,i.jsxs)(n.p,{children:["Die Ladung soll im PV-Modus mit mindestens 6A (einphasig) auch bereits mit nur 50% PV-Anteil beginnen (Rest Netzbezug)\nMindestladeleistung: 1 Phase _ 6A _ 230V = 1380 W, davon 50%: 690 W. Siehe auch die ",(0,i.jsx)(n.a,{href:"/docs/guides/charging/#pv-erzeugung-im-winter-nutzen",children:"Alternative mittels enable/disable um anteilig PV und Netzbezug zu erlauben"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"residualPower: -690\n"})}),"\n",(0,i.jsx)(n.h3,{id:"maxgridsupplywhilebatterycharging",children:(0,i.jsx)(n.code,{children:"maxGridSupplyWhileBatteryCharging"})}),"\n",(0,i.jsx)(n.p,{children:"Dieser Parameter ist (nur) hilfreich bei Hybrid-Wechselrichter-Systemen, bei denen die DC-Erzeugungsleistung in Verbindung mit einem direkt angebundenen Speichersystem gr\xf6\xdfer sein kann als die AC-Ausgabeleistung des Wechselrichters. Hierbei kann es w\xe4hrend der Fahrzeugladung zu Netzbezug kommen, obwohl gleichzeitig die Batterie geladen wird."}),"\n",(0,i.jsx)(n.p,{children:"Beispielszenario:\n10 kW maximale AC-Ausgabeleistung des Hybrid-WR. Aktuelle PV-Erzeugungsleistung 15 kW, dabei gehen 5 kW in die direkt angeschlossene Batterie, da der AC-Pfad des Hybrid-WR bereits mit 10 kW voll ausgelastet ist."}),"\n",(0,i.jsxs)(n.p,{children:["Normalerweise wird die momentane Ladeleistung der Hausbatterie als zus\xe4tzlich verf\xfcgbare Fahrzeugladeleistung betrachtet (falls ",(0,i.jsx)(n.code,{children:"prioritySoc"})," schon erreicht wurde). In dem obigen Beispiel k\xe4me es dann jedoch zu Netzbezug in H\xf6he der momentanen Batterieladeleistung da diese vom Wechselrichter dem Netz (und somit dem Fahrzeug) technisch nicht zur Verf\xfcgung gestellt werden kann. Der ausgelastete AC-Pfad des Hybrid-WR bildet hierbei einen f\xfcr die Standard-Regelung unerwarteten Engpass."]}),"\n",(0,i.jsx)(n.p,{children:"Mit diesem Parameter kann ein Schwellenwert f\xfcr den Netzbezug gesetzt werden, der bewirkt, dass in diesem Fall die Batterieladeleistung nicht als verf\xfcgbare Fahrzeugladeleistung einberechnet wird. Somit bleibt dann die maximale \xdcberschussladeleistung auf die maximale AC-Ausgangsleistung des/der Wechselrichter zuz\xfcgliches dieses Wertes begrenzt."}),"\n",(0,i.jsx)(n.p,{children:"Empfohlen wird ein Wert von mindestens 50 (Watt). Je nach Tr\xe4gheit der beteiligten Regelungssysteme kann er auch h\xf6her gew\xe4hlt werden m\xfcssen."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"maxGridSupplyWhileBatteryCharging: 50\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>d});var i=r(7294);const s={},t=i.createContext(s);function d(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);