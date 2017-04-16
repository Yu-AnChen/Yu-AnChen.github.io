const dataRaw = [
    {
        category: 'research',
        summary: 'A dedicated, goal-oriented biomedical engineer with a background in nanomaterial engineering and molecular biology. Expertise in DNA-templated silver nanoclusters probe design, synthesis and application. Extensive experience in gene cloning, transcript expression analysis, recombinant protein expression, purification, and characterization through mutational analysis and functional assays. Excellent problem solving, communication, and multi-tasking skills.',
        jobs: [
            {
                duration: ['Feb 2014', 'Present'],
                title: 'Visiting Scholar, University of Texas at Austin, Dr. Tim Yeh’s lab',
                projects: [
                    {
                        projectName: 'Detection of N6-methyladenine with methyladenine-specific NanoCluster Beacon (maNCB)',
                        projectNameShort: 'M6A Project',
                        projectDescription: "N6-methyladenine is recently identified as an epigenetic modification in mammalian genomes. Unlike 5-methylcytosine, there is no simple way for m6A detection. By using NanoCluster Beacon, a type of silver cluster probe, I established robust and hybridization-based method for detecting m6A content at given position.",
                        projectPublication: 'Y.-A. Chen, J.M. Obliosca, Y.-L. Liu, C. Liu, M.L. Gwozdz, and H.-C. Yeh, "NanoCluster Beacons enable detection of a single N6-methyladenine," Journal of the American Chemical Society 137(33): 10476-10479, 2015.',
                        projectPublicationLink: 'http://pubs.acs.org/doi/abs/10.1021/jacs.5b06038',
                        projectImg: 'M6A_project.jpg',
                        details: [
                            'Explored different designs of the probe and developed data visualization method',
                            'Utilized fraction analysis to examine the capability of maNCB in heterogeneous conditions',
                            'Conducted background research, utilized BLAST tools and SerialCloner for target DNA sequence designs',
                            'Processed and analyzed data with Igor Pro, Graphpad Prism, SciPy and matplotlib packages of Python'
                        ]
                    },
                    {
                        projectName: 'Detection of rolling-circle amplification products using Nanocluster Beacon (NCB)',
                        projectNameShort: 'RCP Project',
                        projectDescription: 'Rolling Circle Amplification is a versatile tool for DNA replication. I conducted the RCA on solid surface and aquired product signal using NanoCluster Beacon under epifluorescence microscope',
                        projectPublication: 'S. Juul*, J.M. Obliosca* (equal contribution), C. Liu, Y.-L. Liu, Y.-A. Chen, D.M. Imphean, B. R. Knudsen, Y.-P. Ho, K.W. Leong, and H.-C. Yeh, "NanoCluster Beacons as reporter probes in rolling circle enhanced enzyme activity detection," Nanoscale 7, 8332-8337, 2015.',
                        projectPublicationLink: 'http://pubs.rsc.org/en/content/articlelanding/2015/nr/c5nr01705j',
                        projectImg: 'RCP_project.jpg',
                        details: [
                            'Conjugated primers onto solid phase, carried out the rolling-circle amplification, and acquired the fluorescent signal with the probe (NCBs and Rohdamine) under epifluorescence microscope.',
                        ]
                    },
                    {
                        projectName: 'Exploring the capability of NanoCluster Beacons for multicolor labeling in human cell line',
                        projectNameShort: 'NCB Optimization Project',
                        projectDescription: 'NanoCluster Beacons are a special design of DNA-templated silver nanocluster the fluoresce upon hybridization with target DNA. I utilized NCB as fluorescent tag to label fixed cell.',
                        projectPublication: 'J.M. Obliosca, M.C. Babin, C. Liu, Y.-L. Liu, Y.-A. Chen, R.A. Batson, M. Ganguly, J.T. Petty, and H.-C. Yeh, "A complementary palette of NanoCluster Beacons," ACS Nano 8(10): 10150-10160, 2014.',
                        projectPublicationLink: 'http://pubs.acs.org/doi/abs/10.1021/nn505338e',
                        projectImg: 'NCB_optimization_project.jpg',
                        details: [
                            'Analyzed excitation and emission properties of multicolor NanoCluster Beacons under epifluorescence microscope',
                            'Fixed and labeled human cells with antibody-streptavidin-biotinylated-DNA complex',
                            'The results indicated that NanoCluster Beacon may required further purification for cell labeling applications'
                        ]
                    },
                    {
                        projectName: 'Generated stable cell lines expressing fluorescent membrane proteins for demonstration of deep tracking ability of TSUNAMI microscope',
                        projectDescription:'TSUNAMI microscope is a super-resolution 3D single-molecule tracking microscipe. I designed and prepared cancer cell spheroid for demonstration of deep imaging and tracking.',
                        projectImg: 'TSUNAMI_microscope_project.jpg',
                        projectNameShort: 'TSUNAMI Microscope Project',
                        details: [
                            'Researched, designed, ordered, and prepared DNA constructs for expressing cell component targeting proteins',
                            'Cultured human cell line and transfected cells to label them with fluorescent tag',
                            'Prepared spheroid for 3D deep imaging and tracking'
                        ]
                    },
                ]
            },
            {
                duration: ['Sep 2009', 'May 2012'],
                title: 'Graduate Research Assistant, National Taiwan University, Dr. Hsu-Liang Hsieh’s Lab',
                projects: [
                    {
                        projectName: 'Functional studies of the effects of FIN219 and COI1 interaction on far-red light and jasmonic acid signaling in Arabidopsis',
                        projectNameShort: 'Light and hormone signaling crosstalk in Arabidopsis',
                        projectDescription: 'Light and stress hormone signaling modulate physiological responses in plants. I used traditional genetic approaches to elucidate the regulatory relationships between two genes in Arabidopsis.',
                        projectImg: 'Light_and_hormone_signaling_crosstalk_in_Arabidopsis1.jpg',
                        details: [
                            'Investigated regulatory relationships between two critical proteins in the crosstalk of light and hormone signaling pathway',
                            'Reviewed and corrected procedures of generating proper controls for in vivo fluorescent experiments',
                            'Improved yeast transformation technique and reduced 50% to 75% of operating time',
                            'Enhanced RNA extraction efficiency by adopting and verifying new methods',
                            'Applied statistic methods to analyze results in detail and improved data interpretation',
                            'Designed a low cost and high accuracy procedure for single nucleotide polymorphism detection at the individual level',
                            'Developed an in-medium application of herbicide and simplified the resistance-ratio calculation',
                        ]
                    },
                    {
                        projectName: 'Lab management',
                        projectDescription: '',
                        projectImg: 'lab_management.jpg',
                        details: [
                            'Managed database of primers and constructs (more than 1000 records)',
                            'Designed forms for documenting seed stocks to handle over 100 containers for each student',
                            'Trained new lab members',
                            'Evaluated and tested centrifuge, and involved in decision making for purchasing'
                        ]
                    }
                ]
            },
            {
                duration: ['Jan 2009', 'Jun 2009'],
                title: 'Undergraduate Research Assistant, National Taiwan University, Dr. Hsu-Liang Hsieh’s Lab',
                projects: [
                    {
                        projectName: 'Functional studies of GH3-10 in PHYA mediated signaling under far-red light',
                        projectImg: 'Light_and_hormone_signaling_crosstalk_in_Arabidopsis2.jpg',
                        details: [
                            'Phenotypic analysis of mutants in response to far-red light',
                            'Generated double mutant plants',
                            'Prepared chemicals and stock solutions for experiments',
                        ]
                    }
                ]
            },
        ]
    },
    {
        category: 'code',
        jobs: [
            {
                duration: ['Dec 2015', 'Present'], 
                title: 'Freelance Web Developer',
                skills: ['Javascript', 'MongoDB', 'Express', 'Angular', 'NodeJS', 'Version control', 'Heroku'],
                projects: [
                    {
                        projectName: 'Beastie - Pet Shop Management System',
                        projectNameShort: '',
                        projectDescription: 'I worked with talented developer to build the system focused on pet shop grooming service management. The customers can fill out service forms and check-in on a tablet, while the shop owner is able to simultaneously receive customer information, monitor service status, and make reservations',
                        projectImg: 'beastie.jpg',
                        details: [],
                    },
                    {
                        projectName: 'FLOW THROUGH - Abstract Submission',
                        projectNameShort: '',
                        projectDescription: 'The system intelligently handles affiliation superscripts and provides auto backup and instant preview as you write. For the admin, you can sort, set as selected, and output formatted documents.',
                        projectImg: 'flow_through.jpg',
                        details: [],
                        demoLink: 'http://flow-through.herokuapp.com/'
                    },
                    {
                        projectName: 'Virtual Reality Lab Website',
                        projectNameShort: '',
                        projectDescription: 'I designed and built the website for a laboratory at University of Texas at Austin. Since video contents are shortcuts for grasping the focus of their research, I utilized HTML5 features as well as CSS animations for showcase.',
                        projectImg: 'vr_lab_website.jpg',
                        details: [],
                        demoLink: 'http://www.cs.utexas.edu/~dana/vrlab/'
                    },
                    // {
                    //     projectName: 'Schola - School Management System',
                    //     projectNameShort: '',
                    //     projectDescription: '',
                    //     details: []
                    // }
                ],
            },
            {
                duration: ['Feb 2014', 'Dec 2015'], 
                title: 'TTBA Web Admin', 
                skills: ['HTML', 'CSS', 'Google Sites', 'Google Analytics', 'Email Campaign', 'Facebook Campaign'],
                projects: [
                    {
                        projectName: 'TTBA Official Site',
                        projectNameShort: '',
                        projectDescription: 'Texas Taiwanese Biotechnology Association is an organization aiming to accelerate conversations in the community. I built its website and utilized email campaigns and Facebook campaigns to increase its visibility.',
                        projectImg: 'ttba_official_site.jpg',
                        details: [],
                        demoLink: 'http://www.ttbatw.org/'
                    },
                    {
                        projectName: 'TTBA Event Sites',
                        projectNameShort: '',
                        projectDescription: "I designed and developed TTBA's annual events websites, with a focus on clear message delivery and visual appealingness.",
                        projectImg: 'ttba_event_sites.jpg',
                        details: [],
                        demoLink: 'http://sets2015.ttbatw.org/'
                    },
                ],
            },
            
            // {
            //     duration: [], 
            //     title: '', 
            //     projects: [
            //         {
            //             projectName: '',
            //             projectNameShort: '',
            //             projectDescription: '',
            //             details: []
            //         }
            //     ],
            // },
        ]
    }
];
const dataArr = dataRaw.reduce((prev: any, curr: any) => {
    prev[curr.category] = curr;
    return prev;
}, {});
export { dataArr };
