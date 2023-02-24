"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[3808],{421:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>o,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));t(5657);const a={sidebar_position:2},s="site",l={unversionedId:"reference/configuration/site",id:"reference/configuration/site",title:"site",description:"Beschreibt den Standort mit den vorhandenen und ben\xf6tigten Ger\xe4ten der Hausinstallation und ist f\xfcr das Regeln der verf\xfcgbaren Leistung zust\xe4ndig.",source:"@site/docs/reference/configuration/site.md",sourceDirName:"reference/configuration",slug:"/reference/configuration/site",permalink:"/docs/reference/configuration/site",draft:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/docs/reference/configuration/site.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"evcc.yaml",permalink:"/docs/reference/configuration/"},next:{title:"loadpoints",permalink:"/docs/reference/configuration/loadpoints"}},d={},u=[{value:"Erforderliche Parameter",id:"erforderliche-parameter",level:2},{value:"<code>title</code>",id:"title",level:3},{value:"<code>meters</code>",id:"meters",level:3},{value:"Optionale Parameter",id:"optionale-parameter",level:2},{value:"<code>meters.grid</code>",id:"metersgrid",level:3},{value:"<code>meters.pv</code>",id:"meterspv",level:3},{value:"<code>meters.battery</code>",id:"metersbattery",level:3},{value:"<code>meters.aux</code>",id:"metersaux",level:3},{value:"<code>bufferSoc</code>",id:"buffersoc",level:3},{value:"<code>prioritySoc</code>",id:"prioritysoc",level:3},{value:"<code>residualPower</code>",id:"residualpower",level:3},{value:"<code>grid</code> <code>meter</code> vorhanden",id:"grid-meter-vorhanden",level:4},{value:"Nur <code>pv</code> <code>meter</code> vorhanden",id:"nur-pv-meter-vorhanden",level:4},{value:"<code>maxGridSupplyWhileBatteryCharging</code>",id:"maxgridsupplywhilebatterycharging",level:3}],m={toc:u},g="wrapper";function o(e){let{components:n,...t}=e;return(0,i.kt)(g,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"site"},(0,i.kt)("inlineCode",{parentName:"h1"},"site")),(0,i.kt)("p",null,"Beschreibt den Standort mit den vorhandenen und ben\xf6tigten Ger\xe4ten der Hausinstallation und ist f\xfcr das Regeln der verf\xfcgbaren Leistung zust\xe4ndig."),(0,i.kt)("p",null,"Um das Laden mit PV-\xdcberschuss zu regeln, ist ein auslesbarer Z\xe4hler direkt hinter dem Netzanschlusspunkt notwendig. Zus\xe4tzlich k\xf6nnen auch Ger\xe4te f\xfcr die PV-Leistung und Hausbatterie(n) angegeben werden. Mehrere Ger\xe4te werden dabei in der Leistung intern automatisch addiert bzw. wird bei Batteriespeichern der Mittelwert des Ladezustands gebildet."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"site:\n  - title: Zuhause # display name for UI\n    meters:\n      grid: mygridmeter # grid meter reference\n      pv: # (pvs = veraltet)\n        - mypv1 # first pv meter reference\n        - mypv9 # second pv meter reference\n      battery: # (batteries = veraltet)\n        - mybat5 # battery meter reference\n      aux:\n        - myaux1\n    residualPower: 100\n    bufferSoc: 80\n    prioritySoc: 66\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"erforderliche-parameter"},"Erforderliche Parameter"),(0,i.kt)("h3",{id:"title"},(0,i.kt)("inlineCode",{parentName:"h3"},"title")),(0,i.kt)("p",null,"Die angezeigte Beschreibung des Ladepunktes, wird in der UI angezeigt."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"title: Zuhause\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"meters"},(0,i.kt)("inlineCode",{parentName:"h3"},"meters")),(0,i.kt)("p",null,"Definiert welche konfigurierten ",(0,i.kt)("a",{parentName:"p",href:"meters"},(0,i.kt)("inlineCode",{parentName:"a"},"meter"))," (Strommessger\xe4te) als welche Art Messpunkt verwendet werden sollen.\nHier erfolgt somit die logische Verkn\xfcpfung der Ger\xe4tedefiniton mit dem Verwendungsweck.\nEin zun\xe4chst universeller Z\xe4hler bekommt somit entsprechend seines Einbauortes in der Hausinstallation einen Zweck zugewiesen."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Es ist mindestens die Konfiguration eines ",(0,i.kt)("inlineCode",{parentName:"p"},"grid")," oder mindestens eines ",(0,i.kt)("inlineCode",{parentName:"p"},"pv")," Elementes notwendig!\nOhne mindestens einen der beiden Eintr\xe4ge kann evcc nicht verwendet werden!")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"site:\n  meters:\n    grid: mygridmeter # grid meter reference\n    pv: mypv1 # pv meter reference\n    battery: mybat2 # battery meter reference\n    aux: myaux1\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"optionale-parameter"},"Optionale Parameter"),(0,i.kt)("h3",{id:"metersgrid"},(0,i.kt)("inlineCode",{parentName:"h3"},"meters.grid")),(0,i.kt)("p",null,"Definiert das ",(0,i.kt)("a",{parentName:"p",href:"meters"},(0,i.kt)("inlineCode",{parentName:"a"},"meter"))," (Strommessger\xe4t), welches die Messwerte des Netzanschlusspunktes liefert."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"M\xf6gliche Werte"),": Wert eines ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," Parameters in der ",(0,i.kt)("a",{parentName:"p",href:"#meters"},(0,i.kt)("inlineCode",{parentName:"a"},"meters"))," Konfiguration."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"grid: mygridmeter # grid meter reference\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"meterspv"},(0,i.kt)("inlineCode",{parentName:"h3"},"meters.pv")),(0,i.kt)("p",null,"Definiert die ",(0,i.kt)("a",{parentName:"p",href:"meters"},(0,i.kt)("inlineCode",{parentName:"a"},"meter"))," (Strommessger\xe4te), welches die PV-Erzeugungswerte liefern.\nEs k\xf6nnen mehrere Ger\xe4te angegeben werden. Die Leistungsdaten werden automatisch addiert."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"M\xf6gliche Werte"),": Ein Wert oder eine Liste von Werten eines ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," Parameters in der ",(0,i.kt)("a",{parentName:"p",href:"#meters"},(0,i.kt)("inlineCode",{parentName:"a"},"meters"))," Konfiguration. Wobei die Listenversion auch bei Einzelwerten genutzt werden kann."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"pv: myonlypv # singele pv meter reference\n")),(0,i.kt)("p",null,"oder"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"pv: # (pvs = veraltet)\n  - myoldpv # first pv meter reference\n  - mynewestpv # second pv meter reference\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"metersbattery"},(0,i.kt)("inlineCode",{parentName:"h3"},"meters.battery")),(0,i.kt)("p",null,"Definiert die ",(0,i.kt)("a",{parentName:"p",href:"meters"},(0,i.kt)("inlineCode",{parentName:"a"},"meter"))," (Strommessger\xe4te), welche die Messdaten des/der Batteriespeicher(s) liefern.\nEs k\xf6nnen mehrere Ger\xe4te angegeben werden. Die Leistungsdaten werden automatisch addiert und aus den Speicherf\xfcllst\xe4nden wird ein Mittelwert gebildet."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"M\xf6gliche Werte"),": Ein Wert oder eine Liste von Werten eines ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," Parameters in der ",(0,i.kt)("a",{parentName:"p",href:"#meters"},(0,i.kt)("inlineCode",{parentName:"a"},"meters"))," Konfiguration. Wobei die Listenversion auch bei Einzelwerten genutzt werden kann."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"battery: myonlybat # single battery meter reference\n")),(0,i.kt)("p",null,"oder"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"battery: # (batteries = veraltet)\n  - mysmallbat # first battery meter reference\n  - myhugebat # second battery meter reference\n")),(0,i.kt)("h3",{id:"metersaux"},(0,i.kt)("inlineCode",{parentName:"h3"},"meters.aux")),(0,i.kt)("p",null,"Definiert die meter (Strommessger\xe4te), welche die Messdaten externer Ger\xe4te liefern, die \xfcber eine eigene \xdcberschussregelung verf\xfcgen aber nicht direkt durch evcc gesteuert werden. Es k\xf6nnen mehrere Ger\xe4te angegeben werden. Die Leistungsdaten werden automatisch addiert."),(0,i.kt)("p",null,"In evcc flie\xdft diese Leistung in die Berechnung der prinzipiell zur Verf\xfcgung stehenden \xdcberschussleistung zur Fahrzeugladung ein.\nEs wird davon ausgegangen, dass die hier mittels der Aux-Meter gemessenen Ger\xe4te ihren Leistungsbedarf selbstst\xe4ndig und zeitnah reduzieren bzw. vollst\xe4ndig unterbrechen wenn die gemessene Aux-Leistung durch evcc der Fahrzeugladung zugeschlagen wird."),(0,i.kt)("p",null,"Positiver Wert: zus\xe4tzliche verf\xfcgbare \xdcberschussleistung (steht der Fahrzeugladung zur Verf\xfcgung)"),(0,i.kt)("p",null,"Negativer Wert: fehlende \xdcberschussleistung (steht der Fahrzeugladung nicht zur Verf\xfcgung)"),(0,i.kt)("p",null,"Beispiele:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ein Heizstab f\xfcr die Warmwasserbereitung welcher autark auf Basis des PV-\xdcberschuss am Netz\xfcbergang geregelt wird. Wenn die Leistungsmessung dieses Heizstabes als ",(0,i.kt)("inlineCode",{parentName:"li"},"aux"),"-Meter gemessen und eingerichtet wird, steht die gesamte \xdcberschussleistung (Leistung des Heizstabs plus ggf. verbleibende Netzeinspeisung) jederzeit bevorzugt der Fahrzeugladung zur Verf\xfcgung. Greift die Fahrzeugladung darauf zu, sorgt die autarke Regelung des Heizstabes selbstst\xe4ndig daf\xfcr, dass dessen Leistung entsprechend reduziert wird.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"M\xf6gliche Werte"),": Ein Wert oder eine Liste von Werten eines ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," Parameters in der ",(0,i.kt)("a",{parentName:"p",href:"#meters"},(0,i.kt)("inlineCode",{parentName:"a"},"meters"))," Konfiguration. Wobei die Listenversion auch bei Einzelwerten genutzt werden kann."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"aux: myaux # single aux meter reference\n")),(0,i.kt)("p",null,"oder"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"aux:\n  - myaux1 # first aux meter reference\n  - myaux2 # second aux meter reference\n")),(0,i.kt)("h3",{id:"buffersoc"},(0,i.kt)("inlineCode",{parentName:"h3"},"bufferSoc")),(0,i.kt)("p",null,"Ignoriere das Entladen einer Hausbatterie oberhalb dem angegebenen Soc (%) Wert.\nDie Ladung wird im PV-Modus bei zu wenig \xdcberschuss (unterhalb der Mindestladeleistung) nicht unterbrochen, wenn sich die Hausbatterie(n) oberhalb dieses Ladezustandes befindet. Somit werden Schwankungen in der Erzeugung oder beim Verbrauch prim\xe4r von der Hausbatterie ausgeglichen, wenn diese entsprechend geladen ist. Reicht die Entladeleistung der Hausbatterie nicht aus um die Mindestladeleistung des Fahrzeugs zu liefern, wird der Rest aus dem Netz bezogen."),(0,i.kt)("p",null,"Es wird im Modus ",(0,i.kt)("inlineCode",{parentName:"p"},"PV")," nicht (mehr) automatisch gestartet, wenn der Soc der Hausbatterie gr\xf6\xdfer als der eingestellte ",(0,i.kt)("inlineCode",{parentName:"p"},"bufferSoc")," ist."),(0,i.kt)("p",null,"Ist deaktiviert (entspricht >100%) wenn kein Wert angegeben wird."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"bufferSoc")," muss einen gr\xf6\xdferen Wert als ",(0,i.kt)("inlineCode",{parentName:"p"},"prioritySoc")," haben.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"bufferSoc: 80 # Hausbatterie wird oberhalb Soc 80% als Puffer genutzt\n")),(0,i.kt)("h3",{id:"prioritysoc"},(0,i.kt)("inlineCode",{parentName:"h3"},"prioritySoc")),(0,i.kt)("p",null,"Die Ladung der Hausbatterie hat unterhalb des angegebenen Soc (%) Wertes Priorit\xe4t gegen\xfcber der Fahrzeugladung.\nSteht unterhalb dieses Wertes mehr Erzeugungsleistung zur Verf\xfcgung als der Batteriespeicher aufnimmt, kann dieser \xdcberschuss trotzdem nachrangig zur Fahrzeugladung verwendet werden.\nWenn die Hausbatterie oberhalb des Wertes geladen wird, wird die Batterieladeleistung f\xfcr das Laden des EVs als verf\xfcgbare \xdcberschussleistung betrachtet. Somit hat dann die Fahrzeugladung Priorit\xe4t bei der Verwendung der \xdcberschussleistung.\nIst deaktiviert (entspricht 0%) wenn kein Wert angegeben wird."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"prioritySoc")," muss einen kleineren Wert als ",(0,i.kt)("inlineCode",{parentName:"p"},"bufferSoc")," haben.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"prioritySoc: 50 # Hausbatterie bekommt bis zum Soc 50% Priorit\xe4t beim laden\n")),(0,i.kt)("h3",{id:"residualpower"},(0,i.kt)("inlineCode",{parentName:"h3"},"residualPower")),(0,i.kt)("p",null,'Legt den Soll-Arbeitspunkt der \xdcberschussregelung am Netz\xfcbergang (Gridmeter) fest. Der Standardwert ist 0 W.\nNegative Werte verschieben den Sollwert in Richtung Netzeinspeisung, positive Werte in Richtung Netzbezug.\nLetztendlich wird mit diesem Wert der durch die Steuerung einzustellende "Ruhezustand" des Regelkreises eingestellt.'),(0,i.kt)("p",null,"Insbesondere im Zusammenspiel mit weiteren unabh\xe4ngigen \xdcberschussausregelungen wie z. B. der eines Batteriespeichers ist es obligatorisch diesen Wert anzupassen um ein definiertes Systemverhalten mit klaren Priorit\xe4ten zu erzielen."),(0,i.kt)("p",null,"Soll im PV-Modus ein Netzbezugsanteil verbleiben bzw. zugelassen werden muss hier eine negative Leistung entsprechend des Maximalanteils des Netzbezugs konfiguriert werden."),(0,i.kt)("h4",{id:"grid-meter-vorhanden"},(0,i.kt)("inlineCode",{parentName:"h4"},"grid")," ",(0,i.kt)("inlineCode",{parentName:"h4"},"meter")," vorhanden"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Positiver Wert: Verbleibende Netzeinspeiseleistung"),(0,i.kt)("li",{parentName:"ul"},"Negativer Wert: Verbleibende Netzbezugsleistung")),(0,i.kt)("h4",{id:"nur-pv-meter-vorhanden"},"Nur ",(0,i.kt)("inlineCode",{parentName:"h4"},"pv")," ",(0,i.kt)("inlineCode",{parentName:"h4"},"meter")," vorhanden"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Positiver Wert: Typischer Hausverbrauch, um damit den PV-\xdcberschuss absch\xe4tzen zu k\xf6nnen."),(0,i.kt)("li",{parentName:"ul"},"Negativer Wert: (ung\xfcltig)")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Bei Existenz eines Batteriespeichers wird dringend empfohlen hier einen kleinen Wert von 100 bis 300 W einzutragen, um damit eine Speicherladung gem\xe4\xdf der konfigurierten Priorit\xe4ten (siehe ",(0,i.kt)("inlineCode",{parentName:"p"},"prioritySoc"),') zu erm\xf6glichen. Andernfalls "sieht" die unabh\xe4ngige Regelung des Speichers keinen nutzbaren \xdcberschuss.\nEbenso l\xe4sst sich damit bei schnellen Erzeugungs- und Lastwechseln auch ohne Speicher ein kurzzeitiger Netzbezug besser vermeiden.')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},'Beispiel "Batteriespeicher"'),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"residualPower: 100\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},'Beispiel "Netzbezugsanteil"'),":"),(0,i.kt)("p",null,"Die Ladung soll im PV-Modus mit mindestens 6A (einphasig) auch bereits mit nur 50% PV-Anteil beginnen (Rest Netzbezug)\nMindestladeleistung: 1 Phase ",(0,i.kt)("em",{parentName:"p"}," 6A ")," 230V = 1380 W, davon 50%: 690 W"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"residualPower: -690\n")),(0,i.kt)("h3",{id:"maxgridsupplywhilebatterycharging"},(0,i.kt)("inlineCode",{parentName:"h3"},"maxGridSupplyWhileBatteryCharging")),(0,i.kt)("p",null,"Dieser Parameter ist (nur) hilfreich bei Hybrid-Wechselrichter-Systemen, bei denen die DC-Erzeugungsleistung in Verbindung mit einem direkt angebundenen Speichersystem gr\xf6\xdfer sein kann als die AC-Ausgabeleistung des Wechselrichters. Hierbei kann es w\xe4hrend der Fahrzeugladung zu Netzbezug kommen, obwohl gleichzeitig die Batterie geladen wird."),(0,i.kt)("p",null,"Beispielszenario:\n10 kW maximale AC-Ausgabeleistung des Hybrid-WR. Aktuelle PV-Erzeugungsleistung 15 kW, dabei gehen 5 kW in die direkt angeschlossene Batterie, da der AC-Pfad des Hybrid-WR bereits mit 10 kW voll ausgelastet ist."),(0,i.kt)("p",null,"Normalerweise wird die momentane Ladeleistung der Hausbatterie als zus\xe4tzlich verf\xfcgbare Fahrzeugladeleistung betrachtet (falls ",(0,i.kt)("inlineCode",{parentName:"p"},"prioritySoc")," schon erreicht wurde). In dem obigen Beispiel k\xe4me es dann jedoch zu Netzbezug in H\xf6he der momentanen Batterieladeleistung da diese vom Wechselrichter dem Netz (und somit dem Fahrzeug) technisch nicht zur Verf\xfcgung gestellt werden kann. Der ausgelastete AC-Pfad des Hybrid-WR bildet hierbei einen f\xfcr die Standard-Regelung unerwarteten Engpass."),(0,i.kt)("p",null,"Mit diesem Parameter kann ein Schwellenwert f\xfcr den Netzbezug gesetzt werden, der bewirkt, dass in diesem Fall die Batterieladeleistung nicht als verf\xfcgbare Fahrzeugladeleistung einberechnet wird. Somit bleibt dann die maximale \xdcberschussladeleistung auf die maximale AC-Ausgangsleistung des/der Wechselrichter zuz\xfcgliches dieses Wertes begrenzt."),(0,i.kt)("p",null,"Empfohlen wird ein Wert von mindestens 50 (Watt). Je nach Tr\xe4gheit der beteiligten Regelungssysteme kann er auch h\xf6her gew\xe4hlt werden m\xfcssen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"maxGridSupplyWhileBatteryCharging: 50\n")))}o.isMDXComponent=!0}}]);