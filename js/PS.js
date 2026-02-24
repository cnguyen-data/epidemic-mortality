$(document).ready(function () {

    const rawData = `HIV/AIDS pandemic	1981	2026	44,100,000	Worldwide	HIV/AIDS	All Continents	Virus	Pandemic
Seventh cholera pandemic	1961	2026	9,300,000	Worldwide	Cholera (El Tor strain)	All Continents	Bacterial	Pandemic
influenza pandemic ('Spanish flu')	1918	1920	50,000,000	Worldwide	Influenza A virus subtype H1N1	All Continents	Virus	Pandemic
COVID-19 pandemic	2019	2026	7,110,996	Worldwide	COVID-19	All Continents	Virus	Pandemic
Russia typhus epidemic	1918	1922	3,000,000	Russia	Typhus	Europe and Asia	Bacterial	Pandemic
influenza pandemic ('Asian flu')	1957	1958	1,100,000	Worldwide	Influenza A virus subtype H2N2	Africa, Antarctica, Asia, Australia/Oceania, Europe, North America, and South America	Virus	Pandemic
Hong Kong flu	1968	1970	1,000,000	Worldwide	Influenza A virus subtype H3N2	Africa, Antarctica, Asia, Australia/Oceania, Europe, North America, and South America	Virus	Pandemic
Russian flu	1977	1979	700,000	Worldwide	Influenza A virus subtype H1N1	The location Worldwide refers to the entire Earth, which encompasses all seven continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia/Oceania.	Virus	Pandemic
Encephalitis lethargica epidemic	1919	1930	500,000	Worldwide	Encephalitis lethargica	The location Worldwide refers to all seven continents: Africa, Antarctica, Asia, Australia, Europe, North America, and South America.	Unknown	Epidemic
Uganda African trypanosomiasis epidemic	1900	1920	300,000	Uganda	African trypanosomiasis	Africa	Protozoa	Epidemic
swine flu pandemic	2009	2010	284,000	Worldwide	Influenza A virus subtype H1N1	Based on the provided spreadsheet context, the location is Worldwide, which encompasses all continents: Africa, Antarctica, Asia, Australia/Oceania, Europe, North America, and South America.	Virus	pandemic
Malaria outbreak in Ceylon	1906	1936	80,000	Ceylon	Malaria	Asia	Something else (Protozoa)	Epidemic
Manchurian plague (part of the third plague pandemic)	1910	1911	60,000	China	Pneumonic plague	Asia	Bacterial	Epidemic
Ethiopia yellow fever epidemic	1960	1962	30,000	Ethiopia	Yellow fever	Africa	Virus	Epidemic
smallpox epidemic in India	1974	1974	15,000	India	Smallpox	Asia	Virus	Epidemic
Southern Africa cholera outbreak	2022	2024	11,400	Southern Africa	Cholera	Africa	Bacterial	Epidemic
Western African Ebola virus epidemic	2013	2016	11,323	Worldwide, primarily concentrated in Guinea, Liberia, Sierra Leone	Ebola	Africa	Virus	Epidemic
Egypt cholera epidemic	1947	1947	10,277	Egypt	Cholera	Africa and Asia	Bacterial	Epidemic
Haiti cholera outbreak	2010	2019	10,075	Haiti	Cholera (strain serogroup O1, serotype Ogawa)	North America	Bacterial	Epidemic
West Africa meningitis epidemic	1996	1996	10,000	West Africa	Meningitis	Africa	Viral and bacterial	Epidemic
American dengue epidemic	2024	2024	9,875	Latin America and the Caribbean	Dengue fever	Americas	Virus	Epidemic
Sudanese cholera epidemic	2024	2026	9,224	Sudan, South Sudan, and Chad	Cholera	Africa	Bacterial	Epidemic
United States polio epidemic	1948	1952	9,000	United States	Poliomyelitis	North America	Virus	Epidemic
Bangladesh cholera epidemic	1991	1991	8,410	Bangladesh	Cholera	Asia	Bacterial	Epidemic
Latin America cholera epidemic	1991	1993	8,000	Peru, Chile, Bolivia, Ecuador, Colombia, Mexico, El Salvador, Guatemala	Cholera	South America and North America	Bacterial	Epidemic
United States polio epidemic	1916	1916	7,130	United States	Poliomyelitis	North America	Virus	Epidemic
measles outbreak in the Democratic Republic of the Congo	2019	2020	7,018	Democratic Republic of the Congo	Measles	Africa	Virus	Epidemic
Oju yellow fever epidemic	1986	1986	5,600	Oju, Nigeria	Yellow fever	Africa	Virus	Epidemic
Democratic Republic of the Congo measles outbreak	2010	2014	4,500	Democratic Republic of the Congo	Measles	Africa	Virus	Epidemic
India black fungus epidemic	2021	2022	4,332	India	Black fungus (COVID-19 condition)	Asia	Fungal	Epidemic
Zimbabwean cholera outbreak	2008	2009	4,293	Zimbabwe	Cholera	Africa	Bacterial	Epidemic
Yemen cholera outbreak	2016	2023	4,004	Yemen	Cholera	Asia	Bacterial	Epidemic
dengue fever epidemic	2019	2020	3,931	Asia-Pacific, Latin America	Dengue fever	The Asia-Pacific region is primarily located in Asia and Oceania, while Latin America is located in North America and South America.	Virus	Epidemic
China hand, foot, and mouth disease epidemic	2008	2017	3,322	China	Hand, foot, and mouth disease	Asia	Virus	Epidemic
Papua New Guinea kuru epidemic	1901	2009	3,000	Papua New Guinea	Kuru	Oceania	Prion	Epidemic
Kivu Ebola epidemic	2018	2020	2,280	Democratic Republic of the Congo and Uganda	Ebola	Africa	Virus	Epidemic
Indian swine flu outbreak	2015	2015	2,035	India	Influenza A virus subtype H1N1	Asia	Virus	Epidemic
Sudan yellow fever epidemic	1940	1940	1,627	Sudan	Yellow fever	Africa	Virus	Epidemic
Gorakhpur hospital deaths	2017	2017	1,317	India	Japanese encephalitis	Asia	Virus	Epidemic
Luanda cholera epidemic	2006	2006	1,200	Luanda, Angola	Cholera	Africa	Bacterial	Epidemic
Nigeria Lassa fever epidemic	2017	2023	1103	Nigeria	Lassa fever	Africa	Virus	Epidemic
West African meningitis outbreak	2009	2010	1,100	West Africa	Meningitis	Africa	Something Else	Epidemic
London flu	1972	1973	1,027	United States	Influenza A virus subtype H3N2	North America	Virus	Epidemic
Philippines dengue epidemic	2006	2006	1,000	Philippines	Dengue fever	Asia	Virus	Epidemic
MERS outbreak	2012	2026	941	Worldwide	Middle East respiratory syndrome / MERS-CoV	All Continents	Virus	pandemic
mpox epidemic	2023	2026	812	Worldwide, primarily Africa	Mpox	Africa	Virus	Epidemic
SARS outbreak	2002	2004	774	Worldwide	Severe acute respiratory syndrome / SARS	Global	Virus	pandemic
Zambian cholera outbreak (part of the Southern Africa cholera outbreak)	2023	2024	685	Zambia	Cholera	Africa	Bacterial	Epidemic
Ethiopia cholera epidemic	2007	2007	684	Ethiopia	Cholera	Africa	Bacterial	Epidemic
Indonesia dengue epidemic	2004	2004	658	Indonesia	Dengue fever	Asia and Oceania	Virus	Epidemic
Avian influenza epidemic	2013	2019	616	China	Influenza A virus subtype H7N9	Asia	Virus	Epidemic
Montreal typhoid fever epidemic	1927	1927	538	Montreal, Canada	Typhoid fever	North America	Bacterial	Epidemic
Minnesota smallpox epidemic	1924	1925	500	Minnesota, United States	Smallpox	North America	Virus	Epidemic
Angola and Democratic Republic of the Congo yellow fever outbreak	2016	2016	498	Angola and Democratic Republic of the Congo	Yellow fever	Africa	Virus	Epidemic
Asia and Egypt avian influenza epidemic	2003	2019	455	China, Southeast Asia and Egypt	Influenza A virus subtype H5N1	Asia and Africa	Virus	Epidemic
dengue outbreak in Sri Lanka	2017	2017	440	Sri Lanka	Dengue fever	Asia	Virus	Epidemic
measles outbreak in the Philippines	2019	2019	415	Philippines	Measles	Asia	Virus	Epidemic
Cambodia dengue epidemic	2008	2008	407	Cambodia	Dengue fever	Asia	Viral	Epidemic
Nigeria cholera epidemic	2001	2001	400	Nigeria	Cholera	Africa	Bacterial	Epidemic
East Africa Rift Valley fever outbreak	2006	2007	394	East Africa	Rift Valley fever	Africa	Virus	Epidemic
dengue outbreak in Pakistan	2011	2011	350	Pakistan	Dengue fever	Asia	Virus	Epidemic
Nigeria yellow fever epidemic	2020	2020	296	Nigeria	Yellow fever	Africa	Virus	Epidemic
Madagascar plague outbreaks	2014	2017	292	Madagascar	Bubonic plague	Africa	Bacterial	Epidemic
mpox outbreak	2022	2023	280	Worldwide	Mpox	All Continents	Virus	Epidemic
Angola Marburg virus outbreak	2004	2005	227	Angola	Marburg virus	Africa	Virus	Epidemic
Mweka Ebola epidemic	2007	2007	187	Democratic Republic of the Congo	Ebola	Africa	Virus	Epidemic
Puerto Rico, Dominican Republic, and Mexico dengue fever epidemic	2007	2007	183	Puerto Rico, Dominican Republic, Mexico	Dengue fever	North America	Virus	Epidemic
chikungunya outbreak	2013	2015	183	Americas	Chikungunya	North America and South America	Virus	Epidemic
United Kingdom BSE outbreak	1996	2001	178	United Kingdom	Variant Creutzfeldt–Jakob disease / vCJD	Europe	Prion	Epidemic
Philippines dengue epidemic	2008	2008	172	Philippines	Dengue fever	Asia	Virus	Epidemic
yellow fever outbreak in Darfur, Sudan	2012	2012	171	Darfur, Sudan	Yellow fever	Africa	Virus	Epidemic
Vietnam hand, foot, and mouth disease epidemic	2011	2011	170	Vietnam	Hand, foot, and mouth disease	Asia	Virus	Epidemic
Mali yellow fever epidemic	1987	1987	145	Mali	Yellow fever	Africa	Virus	Epidemic
Kwango province malaria outbreak	2024	2024	143	Democratic Republic of the Congo	Malaria	Africa	Something else (Parasitic)	Epidemic
Vietnam measles outbreak	2013	2014	142	Vietnam	Measles	Asia	Virus	Epidemic
South Africa cholera epidemic	2001	2001	139	South Africa	Cholera	Africa	Bacterial	Epidemic
Democratic Republic of the Congo Marburg virus outbreak	1998	2000	128	Democratic Republic of the Congo	Marburg virus	Africa	Virus	Epidemic
Chad cholera epidemic	2008	2008	123	Chad	Cholera	Africa	Bacterial	Epidemic
San Francisco plague (part of the third plague pandemic)	1900	1904	119	San Francisco, United States	Bubonic plague	North America	Bacterial	Epidemic
India cholera epidemic	2008	2008	115	India	Cholera	Asia	Bacterial	Epidemic
Sverdlovsk anthrax leak	1979	1979	105	Russia	Anthrax	Europe and Asia	Bacterial	Epidemic
Malaysia Nipah virus outbreak	1998	1999	105	Malaysia	Nipah virus infection	Asia	Virus	Epidemic
Sydney bubonic plague epidemic (part of the third plague pandemic)	1900	1900	103	Australia	Bubonic plague	Australia	Bacterial	Epidemic
psittacosis pandemic	1929	1930	100	Worldwide	Psittacosis	All Continents	Bacterial	Epidemic
Netherlands Q-fever epidemic	2007	2018	95	Netherlands	Q-fever	Europe	Bacterial	Epidemic
Samoa measles outbreak	2019	2019	83	Samoa	Measles	Oceania	Virus	Epidemic
Uganda Ebola outbreak	2022	2023	77	Uganda	Sudan ebolavirus	Africa	Virus	Epidemic
dengue outbreak in Peshawar	2017	2017	69	Peshawar, Pakistan	Dengue fever	Asia	Virus	Epidemic
Brazil dengue epidemic	2008	2008	67	Brazil	Dengue fever	South America	Virus	Epidemic
Ituri Province plague epidemic	2006	2006	61	Ituri Province, Democratic Republic of the Congo	Bubonic plague	Africa	Bacterial	Epidemic
plague in India	1994	1994	56	India	Bubonic plague and Pneumonic plague	Asia	Bacterial	Epidemic
Democratic Republic of the Congo Ebola outbreak	2020	2020	55	Democratic Republic of the Congo	Ebola	Africa	Virus	Epidemic
Zika virus epidemic	2015	2016	53	Worldwide	Zika virus	Not applicable (Worldwide covers all continents)	Virus	Epidemic
dengue outbreak in India	2006	2006	50	India	Dengue fever	Asia	Virus	Epidemic
dengue outbreak in Pakistan	2006	2006	50	Pakistan	Dengue fever	Asia	Virus	Epidemic
Gujarat hepatitis outbreak	2009	2009	49	India	Hepatitis B	Asia	Virus	Epidemic
Croydon typhoid outbreak	1937	1937	43	Croydon, United Kingdom	Typhoid fever	Europe	Bacterial	Epidemic
South Poland Legionellosis outbreak	2023	2023	41	Poland	Legionnaires' disease	Europe	Bacterial	Epidemic
Central America dengue epidemic	2000	2000	40	Central America	Dengue fever	North America	Virus	Epidemic
Uganda Ebola outbreak	2007	2007	37	Uganda	Ebola	Africa	Virus	Epidemic
Odisha hepatitis outbreak	2014	2015	36	India	Primarily Hepatitis E, but also Hepatitis A	Asia	Virus	Epidemic
Yugoslav smallpox outbreak	1972	1972	35	Yugoslavia	Smallpox	Europe	Virus	Epidemic
dengue outbreak in Singapore	2020	2020	32	Singapore	Dengue fever	Asia	Virus	Epidemic
Shanghai hepatitis A epidemic	1988	1988	31	Shanghai, China	Hepatitis A	Asia	Virus	Epidemic
Los Angeles pneumonic plague outbreak	1924	1924	30	Los Angeles, United States	Pneumonic plague	North America	Bacterial	Epidemic
dengue outbreak in Singapore	2005	2005	27	Singapore	Dengue fever	Asia	Virus	Epidemic
Italy cholera epidemic	1973	1973	24	Italy	Cholera (El Tor strain)	Europe	Bacterial	Epidemic
Madagascar plague outbreak	2008	2008	18	Madagascar	Bubonic plague	Africa	Bacterial	Epidemic
Bolivian dengue fever epidemic	2009	2009	18	Bolivia	Dengue fever	South America	Virus	Epidemic
Hepatitis of unknown origin in children	2021	2022	18	Worldwide	Hepatitis by Adenovirus variant AF41 (Unconfirmed)	All Continents	Virus	Epidemic
India malaria outbreak	2006	2006	17	India	Malaria	Asia	Something else (Protozoan)	Epidemic
Nipah virus outbreak in Kerala	2018	2018	17	India	Nipah virus infection	Asia	Virus	Epidemic
Duwaimeh smallpox epidemic	1921	1922	16	Duwaimeh, Mandatory Palestine	Smallpox	Asia	Virus	Epidemic
Kuala Koh measles outbreak	2019	2019	15	Kuala Koh, Malaysia	Measles	Asia	Virus	Epidemic
Bangsamoro measles outbreak	2023	2024	14	Bangsamoro, Philippines	Measles	Asia	Virus	Epidemic
Flint water crisis	2014	2015	12	Flint, Michigan, United States	Legionnaires' disease	North America	Bacterial	Epidemic
Iraq cholera outbreak	2007	2007	10	Iraq	Cholera	Asia	Bacterial	Epidemic
dengue outbreak in Singapore	2013	2013	8	Singapore	Dengue fever	Asia	Virus	Epidemic
Wrocław smallpox epidemic	1963	1963	7	Wroc?aw, Poland	Smallpox	Europe	Virus	Epidemic
Sudan Ebola outbreak	2004	2004	7	Sudan	Ebola	Africa	Virus	Epidemic
Staphorst polio epidemic	1971	1971	5	Staphorst, Netherlands	Poliomyelitis	Europe	Virus	Epidemic
Fremantle plague epidemic (part of the third plague pandemic)	1903	1903	4	Fremantle, Western Australia	Bubonic plague	Oceania	Bacterial	Epidemic
New Zealand measles outbreak	2019	2020	2	New Zealand	Measles	Zealandia	Virus	Epidemic
Oropouche virus disease outbreak	2023	2024	2	Brazil	Oropouche fever	South America	Virus	Epidemic
Queensland dengue outbreak	2009	2009	1	Queensland, Australia	Dengue fever	Australia	Virus	Epidemic`;

    const data = rawData.trim().split('\n').map(line => {
        let parts = line.split('\t');
        let name = parts[0];
        let start = parseInt(parts[1], 10);
        let end = parseInt(parts[2], 10);
        let deaths = parseFloat((parts[3] || "0").replace(/,/g, ''));
        let deaths_M = deaths / 1000000.0;
        let causeRaw = parts[7] ? parts[7].toLowerCase() : "";
        let cause = "Unknown";
        if (causeRaw.includes("virus") || causeRaw.includes("viral")) cause = "Viral";
        else if (causeRaw.includes("bacteri")) cause = "Bacterial";
        else if (causeRaw.includes("parasit") || causeRaw.includes("protozoa")) cause = "Parasitic";
        else if (causeRaw.includes("fungal")) cause = "Fungal";
        else if (causeRaw.includes("prion")) cause = "Prion";

        // Grab type from last column
        let typeRaw = parts[8] ? parts[8].toLowerCase().trim() : "";
        let type = typeRaw.includes("pandemic") ? "Pandemic" : "Epidemic";

        let continent = parts[6] ? parts[6].trim() : "Unknown";

        return {
            name: name,
            start: start,
            end: end,
            deaths_M: deaths_M,
            cause: cause,
            type: type,
            continent: continent
        };
    });

    data.forEach((d, i) => { d.id = "id_" + i; });

    data.forEach(d => {
        let dur = d.end - d.start;
        d.duration = Math.max(dur, 0.5);

        let deaths = d.deaths_M * 1000000;
        if (deaths < 1000) {
            d.radius = 3;
        } else if (deaths < 10000) {
            d.radius = 6;
        } else if (deaths < 100000) {
            d.radius = 10;
        } else if (deaths < 1000000) { // 100k to 1m
            d.radius = 15;
        } else if (deaths < 10000000) { // 1m to 10m
            d.radius = 22;
        } else if (deaths < 20000000) { // 10m to 20m
            d.radius = 31;
        } else if (deaths < 50000000) { // 20m to 50m
            d.radius = 42;
        } else if (deaths < 100000000) { // 50m to 100m
            d.radius = 55;
        } else { // Above 100m
            d.radius = 70;
        }
    });

    data.sort((a, b) => b.deaths_M - a.deaths_M);

    const colors = {
        "Bacterial": "#d359a2ff",
        "Viral": "#9bc931ff",
        "Parasitic": "#e4b63f",
        "Fungal": "#c5342c",
        "Prion": "#7a31baff",
        "Unknown": "#E07818"
    };

    function hexToRgb(hex) {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    function getFlowerColors(hex) {
        let rgb = hexToRgb(hex);
        return {
            base: hex,
            light: `rgba(${Math.min(rgb.r * 1.4, 255)}, ${Math.min(rgb.g * 1.4, 255)}, ${Math.min(rgb.b * 1.4, 255)}, 0.18)`,
            hexLight: `rgb(${Math.min(rgb.r * 1.4, 255)}, ${Math.min(rgb.g * 1.4, 255)}, ${Math.min(rgb.b * 1.4, 255)})`,
            dark: `rgba(${rgb.r * 0.55}, ${rgb.g * 0.55}, ${rgb.b * 0.55}, 0.90)`,
            hexDark: `rgb(${rgb.r * 0.55}, ${rgb.g * 0.55}, ${rgb.b * 0.55})`
        };
    }

    const margin = { top: 150, right: 180, bottom: 50, left: 50 },
        width = 1280 - margin.left - margin.right,
        height = 750 - margin.top - margin.bottom;

    let activeFilters = {
        cause: ["Bacterial", "Viral", "Parasitic", "Fungal", "Prion", "Unknown"],
        type: ["Pandemic", "Epidemic"],
        continent: ["Africa", "Asia", "Europe", "North America", "South America", "Oceania", "Worldwide", "All Continents"]
    };

    const svg = d3.select("#graph")
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Scales
    const x = d3.scale.linear().range([0, width]);
    // Use log base 2 scale
    const y = d3.scale.log().base(2).range([height, 0]);

    x.domain([1895, 2045]);
    y.domain([0.45, 130]);

    // Axes
    const xAxis = d3.svg.axis().scale(x).orient("bottom").tickFormat(d3.format("d")).ticks(12);
    const yAxis = d3.svg.axis().scale(y).orient("left").tickValues([1, 2, 4, 8, 16, 32, 64]).tickFormat(d3.format("d"));

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .append("text")
        .attr("class", "label")
        .attr("x", width / 2)
        .attr("y", 40)
        .style("text-anchor", "middle");

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("class", "label")
        .attr("transform", "rotate(-90)")
        .attr("y", -40)
        .attr("x", -height / 2)
        .attr("dy", ".71em")
        .style("text-anchor", "middle")
        .text("Duration (years)");

    // Draw data
    function draw(dataSet) {
        svg.selectAll(".stem").remove();
        svg.selectAll(".poppy-group").remove();

        const gStems = svg.append("g").attr("class", "stems");
        const gPoppies = svg.append("g").attr("class", "poppies");

        // Sort so larger poppy is under smaller ones
        let sortedData = [...dataSet].sort((a, b) => b.radius - a.radius);

        // Lines
        sortedData.forEach(d => {
            let x0 = x(d.start);
            let y0 = height; // y(1) could be 0, but stem starts from axis... wait, duration 0 means height
            // Using y(0.45) as axis base
            let yBase = y(0.45);

            let x1 = x(d.end);
            // Wait, log(duration) for flower y pos. y scale is log base 2.
            let y1 = y(d.duration);

            let dx = x1 - x0;
            let dy = y1 - yBase;

            let cp1x = x0 + dx * 0.10;
            let cp1y = yBase + dy * 0.50;

            let cp2x = x1 + dx * 0.02;
            let cp2y = yBase + dy * 0.75;

            let pathD = `M ${x0} ${yBase} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x1} ${y1}`;

            let stemThickness = d.type === 'Pandemic' ? '4.5px' : '1.5px';
            let stemColor = d.type === 'Pandemic' ? '#ff0000' : '#4d4a48ff';

            let path = gStems.append("path")
                .attr("class", "stem stem-" + d.id)
                .attr("data-thickness", stemThickness)
                .attr("data-type", d.type)
                .attr("d", pathD)
                .style("fill", "none")
                .style("stroke", stemColor)
                .style("stroke-width", stemThickness)
                .style("opacity", 0.6)
                .style("stroke-linecap", "round");

            let totalLength = path.node().getTotalLength();

            path.attr("stroke-dasharray", totalLength + " " + totalLength)
                .attr("stroke-dashoffset", totalLength)
                .transition()
                .duration(1500)
                .ease("linear")
                .attr("stroke-dashoffset", 0);
        });

        // Poppies
        // R code:
        // mk(r=r_mm*2.6, fill=col_light, a=0.18)
        // 5 petals: r=r_mm*1.10, fill=col_hex, a=0.80, offset cos(a)*r_mm*.52, sin(a)*r_mm*.52
        // mk(r=r_mm*1.25, fill=col_dark, a=0.90)
        // mk(r=r_mm*0.60, fill="#080808", a=0.92)
        // 8 dots: r=r_mm*.18, fill="white", a=0.90, offset cos(a)*r_mm*.35, sin(a)*r_mm*.35
        // mk(r=r_mm*.16, fill="white", a=0.95)

        let groups = gPoppies.selectAll(".poppy-group")
            .data([...dataSet].sort((a, b) => b.deaths_M - a.deaths_M))
            .enter()
            .append("g")
            .attr("class", d => "poppy-group poppy-" + d.id)
            .attr("transform", d => `translate(${x(d.end)}, ${y(d.duration)}) scale(0)`)
            .style("cursor", "pointer")
            .on("mouseover", function (d) {
                // Dim others
                d3.selectAll('.stem').style('opacity', 0.1).style('stroke', '#4d4a48ff');
                d3.selectAll('.poppy-group').style('opacity', 0.1);

                // Highlight this
                d3.select('.stem-' + d.id).style('opacity', 1).style('stroke-width', '6px').style('stroke', colors[d.cause]);
                d3.select(this).style('opacity', 1);

                // Show tooltip next to point
                let mousePos = d3.mouse(d3.select('body').node());
                $(".graph-overlay").css({
                    left: (mousePos[0] + 15) + "px",
                    top: (mousePos[1] - 15) + "px",
                    display: "block"
                });

                $(".graph-overlay-header").css("background-color", colors[d.cause]);
                $(".name-title").text(d.name);
                $(".duration .content").text(d.duration === 0.5 ? "< 1 year" : Math.round((d.end - d.start)) + " years" + " (" + d.start + "-" + d.end + ")");
                $(".fatalities .content").text((d.deaths_M * 1000000).toLocaleString());
                $(".cause-row .content").text(d.cause);
            })
            .on("mouseout", function () {
                d3.selectAll('.stem').style('opacity', 0.6).style('stroke-width', function () {
                    return d3.select(this).attr('data-thickness');
                }).style('stroke', function () {
                    return d3.select(this).attr('data-type') === 'Pandemic' ? '#ff0000' : '#4d4a48ff';
                });
                d3.selectAll('.poppy-group').style('opacity', 1);
                $(".graph-overlay").hide();
            });

        groups.each(function (d) {
            let g = d3.select(this);
            let r = d.radius;
            let fc = getFlowerColors(colors[d.cause]);

            // Background aura
            g.append("circle")
                .attr("cx", 0).attr("cy", 0)
                .attr("r", r * 2.6)
                .style("fill", fc.hexLight)
                .style("opacity", 0.18);

            // 5 petals
            for (let i = 1; i <= 5; i++) {
                let a = 2 * Math.PI * (i - 1) / 5 - Math.PI / 2;
                g.append("circle")
                    .attr("cx", Math.cos(a) * r * 0.52).attr("cy", Math.sin(a) * r * 0.52)
                    .attr("r", r * 1.10)
                    .style("fill", fc.base)
                    .style("opacity", 0.80);
            }

            // Dark center
            g.append("circle")
                .attr("cx", 0).attr("cy", 0)
                .attr("r", r * 1.25)
                .style("fill", fc.hexDark)
                .style("opacity", 0.90);

            // Black core
            g.append("circle")
                .attr("cx", 0).attr("cy", 0)
                .attr("r", r * 0.60)
                .style("fill", "#080808")
                .style("opacity", 0.92);

            // 8 white dots
            for (let i = 1; i <= 8; i++) {
                let a = 2 * Math.PI * (i - 1) / 8;
                g.append("circle")
                    .attr("cx", Math.cos(a) * r * 0.35).attr("cy", Math.sin(a) * r * 0.35)
                    .attr("r", r * 0.18)
                    .style("fill", "white")
                    .style("opacity", 0.90);
            }

            // White pin
            g.append("circle")
                .attr("cx", 0).attr("cy", 0)
                .attr("r", r * 0.16)
                .style("fill", "white")
                .style("opacity", 0.95);
        });

        // Bloom animation
        groups.transition()
            .delay((d) => 1500 + (Math.random() * 1000))
            .duration(1200)
            .ease("elastic")
            .attr("transform", d => `translate(${x(d.end)}, ${y(d.duration)}) scale(1)`);
    }

    draw(data);

    // Filters
    $(".btn-filter").on("click", function (e) {
        e.preventDefault();
        const group = $(this).data("filter-group");
        const val = $(this).data("value");

        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            activeFilters[group] = activeFilters[group].filter(r => r !== val);
            $(this).css("opacity", 0.5);
        } else {
            $(this).addClass("active");
            activeFilters[group].push(val);
            $(this).css("opacity", 1);
        }

        const filteredData = data.filter(d => {
            let causeMatch = activeFilters.cause.includes(d.cause);
            let typeMatch = activeFilters.type.includes(d.type);

            // Check continent match
            let continentMatch = activeFilters.continent.some(c => d.continent.includes(c));
            if (activeFilters.continent.includes("Worldwide") || activeFilters.continent.includes("All Continents")) {
                if (d.continent.includes("Worldwide") || d.continent.includes("All Continents") || d.continent.includes("Global")) {
                    continentMatch = true;
                }
            }

            return causeMatch && typeMatch && continentMatch;
        });
        draw(filteredData);
    });

    $(".btn-close").on("click", function (e) {
        e.preventDefault();
        $(".graph-overlay").hide();
    });

});
