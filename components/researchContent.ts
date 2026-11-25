export type Publication = {
  title: string
  citation: string
  description: string
  pubmedUrl: string
}

export type ResearchArea = {
  number: string
  slug: string
  title: string
  summary: string
  focus: string
  paragraphs: string[]
  publications: Publication[]
}

export const researchAreas: Record<string, ResearchArea> = {
  'critical-care-nutrition': {
    number: '01',
    slug: 'critical-care-nutrition',
    title: 'Critical care nutrition & the gut microbiome',
    summary:
      'We study how nutrition shapes microbial resilience before, during, and after the physiologic stress of critical illness and surgery.',
    focus:
      'Nutrition is not simply supportive care—it is an opportunity to influence the microbial community that helps determine recovery.',
    paragraphs: [
      'Dietary composition rapidly changes the structure and function of the gut microbiome. Our work examines how fiber, fat, and microbiota-accessible carbohydrates affect microbial stability, antibiotic resistance, metabolite production, and host tolerance to treatment.',
      'These studies support a microbiome-directed approach to critical care nutrition: identify the nutritional conditions that preserve beneficial microbial functions and reduce the emergence of pathogens during surgery and critical illness.',
    ],
    publications: [
      {
        title:
          'Microbiota-accessible carbohydrates enhance gut microbiota stability and antibiotic resilience through production of quorum sensing molecule AI-2',
        citation: 'Keskey et al. Gut Microbes Reports. 2026;3(1):2646055.',
        description:
          'Fermentable fiber increased microbial resilience to antibiotics through short-chain fatty acid production and AI-2 quorum-sensing activity, reducing antibiotic-associated illness in mice.',
        pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/41918985/',
      },
      {
        title:
          'Dietary impact on the gut resistome: western diet independently increases the prevalence of antibiotic resistance genes within the gut microbiota',
        citation: 'Keskey et al. Microbiology Spectrum. 2025;13(9):e0276624.',
        description:
          'A Western diet increased antibiotic resistance genes and resistant organisms within the gut microbiota even without prior antibiotic exposure.',
        pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/40719501/',
      },
      {
        title:
          'Defining Microbiome Readiness for Surgery: Dietary Prehabilitation and Stool Biomarkers as Predictive Tools to Improve Outcome',
        citation: 'Keskey et al. Annals of Surgery. 2022;276(5):e361-e369.',
        description:
          'Short-term low-fat, high-fiber dietary prehabilitation restored key microbiome functions and identified stool biomarkers associated with improved postoperative survival.',
        pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/33156068/',
      },
      {
        title:
          'Low-fat/high-fibre diet prehabilitation improves anastomotic healing via the microbiome: an experimental model',
        citation: 'Hyoju et al. British Journal of Surgery. 2020;107(6):743-755.',
        description:
          'Preoperative dietary change reduced Enterococcus expansion and improved anastomotic healing in a microbiome-dependent experimental model.',
        pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/31879948/',
      },
    ],
  },
  'host-stress': {
    number: '02',
    slug: 'host-stress',
    title: 'Microbiota response to host stress',
    summary:
      'We investigate how surgery, trauma, antibiotics, fasting, and critical illness reorganize the gut microbiota and alter the trajectory of recovery.',
    focus:
      'The microbiota senses a changing host environment and responds in ways that can support recovery or amplify disease.',
    paragraphs: [
      'Major physiologic stress changes the intestinal environment within hours. Nutrient availability, inflammatory signals, antibiotics, and tissue injury can disrupt the spatial organization and function of the microbiota.',
      'Our work defines this dynamic host-microbe response and asks why some microbial communities remain resilient while others shift toward pathogen-dominated states associated with sepsis and postoperative complications.',
    ],
    publications: [
      {
        title:
          'Friend or foe: the gut microbiota as a modulator of disease trajectory in trauma, surgery, and critical illness',
        citation: 'Cao et al. Gut Microbes. 2025;17(1):2552346.',
        description:
          'This review presents the host, microbiome, and pathogen “interactome” as a determinant of recovery or complications after major physiologic stress.',
        pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/40878531/',
      },
      {
        title:
          'Spatial Compartmentalization of the Microbiome between the Lumen and Crypts Is Lost in the Murine Cecum following the Process of Surgery, Including Overnight Fasting and Exposure to Antibiotics',
        citation: 'Zaborin et al. mSystems. 2020;5(3).',
        description:
          'Surgical preparation and injury disrupted the normal separation of lumen- and crypt-associated microbial communities and altered their functional organization.',
        pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/32518197/',
      },
      {
        title:
          'Mice Fed an Obesogenic Western Diet, Administered Antibiotics, and Subjected to a Sterile Surgical Procedure Develop Lethal Septicemia with Multidrug-Resistant Pathobionts',
        citation: 'Hyoju et al. mBio. 2019;10(4).',
        description:
          'Western diet, antibiotics, and otherwise recoverable surgical stress combined to drive microbiome collapse and dissemination of multidrug-resistant pathobionts.',
        pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/31363025/',
      },
      {
        title: 'Sepsis and the Microbiome: A Vicious Cycle',
        citation: 'Miller, Keskey, and Alverdy. Journal of Infectious Diseases. 2021;223:S264-S269.',
        description:
          'This review describes how sepsis and its treatment disrupt the microbiome, which can further alter immunity and organ function.',
        pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/33330900/',
      },
    ],
  },
  'metabolites-immunity-pathogen-virulence': {
    number: '03',
    slug: 'metabolites-immunity-pathogen-virulence',
    title: 'Metabolites, immunity & pathogen virulence',
    summary:
      'We define how microbiota-derived metabolites regulate immune function and how pathogens counter or exploit those signals during infection.',
    focus:
      'Disease outcome emerges from a molecular conversation among the microbiota, the immune system, and invading pathogens.',
    paragraphs: [
      'The gut microbiota produces metabolites that circulate beyond the intestine and reprogram immune-cell behavior. We study protective signals—including tryptophan-derived indoles and short-chain fatty acids—that improve pathogen clearance and regulate inflammation.',
      'We also investigate how pathogens change virulence in response to the host environment and directly interfere with microbiota-dependent immune signaling. These mechanisms offer new therapeutic targets that do not rely solely on antibiotics.',
    ],
    publications: [
      {
        title:
          'Enterobactin inhibits microbiota-dependent activation of AhR to promote bacterial sepsis in mice',
        citation: 'Keskey et al. Nature Microbiology. 2025;10(2):388-404.',
        description:
          'Gut microbiota-derived tryptophan metabolites activated macrophage AhR signaling and improved sepsis survival, while pathogen-secreted enterobactin blocked this protective pathway.',
        pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/39779878/',
      },
      {
        title:
          'Fecal microbiota transplant rescues mice from human pathogen mediated sepsis by restoring systemic immunity',
        citation: 'Kim et al. Nature Communications. 2020;11(1):2354.',
        description:
          'Fecal microbiota transplantation restored systemic immune programs and pathogen clearance in an otherwise lethal model of sepsis.',
        pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/32393794/',
      },
      {
        title: 'A Novel Nonantibiotic Gut-directed Strategy to Prevent Surgical Site Infections',
        citation: 'Hyoju et al. Annals of Surgery. 2022;276(3):472-481.',
        description:
          'A gut-directed phosphate-rich polymer suppressed pathogen virulence and reduced surgical site infections without relying on additional antibiotics.',
        pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/35749750/',
      },
      {
        title:
          'Enterococcus faecalis Is Associated with Anastomotic Leak in Patients Undergoing Colorectal Surgery',
        citation: 'Anderson et al. Surgical Infections. 2021;22(10):1047-1051.',
        description:
          'Clinical culture data linked Enterococcus faecalis and other collagenase-producing organisms with anastomotic leak after colorectal surgery.',
        pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/34255574/',
      },
    ],
  },
  'clinical-data-outcomes': {
    number: '04',
    slug: 'clinical-data-outcomes',
    title: 'Clinical data & surgical outcomes',
    summary:
      'We leverage large clinical datasets to understand outcomes in critical care, trauma, and emergency general surgery.',
    focus:
      'Large, diverse clinical datasets allow us to identify meaningful patterns in injury, treatment, complications, and recovery.',
    paragraphs: [
      'Our clinical outcomes research uses multicenter cohorts, national trauma registries, and institutional data to evaluate current practice and identify patients at risk for adverse outcomes.',
      'We develop and validate practical prediction tools, study variation in treatment and outcomes, and examine infectious and operative complications across critical care, trauma, and emergency general surgery.',
    ],
    publications: [
      {
        title:
          'Novel Trauma Composite Score is superior to Injury Severity Score in predicting mortality across all ages',
        citation: 'Keskey et al. Journal of Trauma and Acute Care Surgery. 2021;91(4):621-626.',
        description:
          'National Trauma Data Bank records were used to develop an age-aware composite injury score that more accurately predicted mortality than traditional injury severity measures.',
        pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/34225345/',
      },
      {
        title:
          'Patient age must be incorporated into future paediatric injury severity scoring systems',
        citation: 'Keskey et al. Lancet Child & Adolescent Health. 2021;5(10):e39.',
        description:
          'This commentary emphasizes the need to incorporate age-dependent physiology into the design and evaluation of pediatric injury severity scoring systems.',
        pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/34399088/',
      },
      {
        title:
          'Is Previous Postoperative Infection an Independent Risk Factor for Postoperative Infection after Second Unrelated Abdominal Operation?',
        citation: 'Feldt et al. Journal of the American College of Surgeons. 2022;235(2):285-292.',
        description:
          'A clinical cohort of patients undergoing two unrelated abdominal operations examined whether prior postoperative infection independently predicts infection after a subsequent operation.',
        pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/35839404/',
      },
      {
        title:
          'Time to reconsider the use of Shock Index, Pediatric Adjusted in young children? Mounting evidence suggests that alternative shock indices can more accurately triage injured children',
        citation: 'Georgette et al. Journal of Trauma and Acute Care Surgery. 2024;96(3):e22-e24.',
        description:
          'This letter synthesizes evidence that alternative age-sensitive shock indices may improve early triage and risk identification in young injured children.',
        pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/37611048/',
      },
      {
        title:
          'Thoracic Branch Endoprosthesis as Safe Alternative Therapy for Blunt Traumatic Aortic Injury Requiring Zone 2 Coverage',
        citation: 'Meltzer et al. Annals of Vascular Surgery. 2026;130:340-346.',
        description:
          'National trauma data were used to compare branched endovascular repair with open arch debranching for blunt traumatic aortic injuries requiring zone 2 coverage.',
        pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/42105977/',
      },
    ],
  },
}

export const researchAreaList = Object.values(researchAreas)
