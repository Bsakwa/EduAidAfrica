import React from 'react'
import img_mast_1 from '../../../assets/master/img_1.png'
import img_mast_2 from '../../../assets/master/img_2.jpg'
import img_mast_4 from '../../../assets/master/img_4.png' 
import img_phd_1 from '../../../assets/phd/img_1.png'
import img_phd_2 from '../../../assets/phd/img_2.png'
import img_phd_3 from '../../../assets/phd/img_3.jpg'
import img_phd_4 from '../../../assets/phd/img_4.jpg'
import img_phd_5 from '../../../assets/phd/img_5.png'
import img_und_6 from '../../../assets/under/img_6.jpg'
import img_und_7 from '../../../assets/under/img_7.jpg'
import img_und_8 from '../../../assets/under/img_8.png'
import img_und_9 from '../../../assets/under/img_9.png'
import img_und_10 from '../../../assets/under/img_10.png'
const Scholarship_data = [
  {
    'id': '1',
    "schlorship_img": img_mast_1,
    "scholarship_type":  " master",
    "scholarship_school":  "Imperial College Business School",
    "scholarship_deadline": "March 24, 2024",
    "scholarship_title":" Imperial College Business School",
    "scholarship_country": "United Kingdom",
    "Aplly now":"https://www.imperial.ac.uk/business-school/masters/funding-scholarships#africa-regional-scholarship",
},
{
    'id': '2',
    "schlorship_img": img_mast_2,
    "scholarship_type":  " master",
    "scholarship_school": "IBM Research Africa",
    "scholarship_deadline": "October 27, 2023",
    "scholarship_title":"IBM Research Africa",
    "scholarship_country": "---------",
    "Aplly now":"https://research.ibm.com/university/awards/masters_fellowship.html",
},
{
    'id': '4',
    "schlorship_img": img_mast_4,
    "scholarship_type":  " master",
    "scholarship_school":  "----------",
    "scholarship_deadline": "September 29, 2023",
    "scholarship_title":"Doug Banks Renewable Energy Vision (DBREV)",
    "scholarship_country": "------------",
    "Aplly now":"https://form.jotform.com/231972364014554",
},
      {
            'id': '1',
            "schlorship_img": img_phd_1,
            "scholarship_type":  " Phd",
            "scholarship_school":  "-------",
            "scholarship_deadline": "October 31, 2023",
            "scholarship_title":"ETH Zurich",
            "scholarship_country": "-----------",
            "Aplly now":"https://eth4d.ethz.ch/funding-opportunities/ETH4D-exchange-grants/ETH4D-doctoral-mentorship-programme.html",
      },
      {
            'id': '2',
            "schlorship_img": img_phd_2,
            "scholarship_type":  " Phd",
            "scholarship_school":  "-----------",
            "scholarship_deadline": "September 30, 2023",
            "scholarship_title":"nited Nation University (UNU-WIDER) Visiting PhD Fellowship Program 2023",
            "scholarship_country": "-----------",
            "Aplly now":"https://www2.wider.unu.edu/content/visiting-phd-fellowship-programme-september-010923",
      },
      {
            'id': '3',
            "schlorship_img": img_phd_3,
            "scholarship_type":  " Phd",
            "scholarship_school":  "-------",
            "scholarship_deadline": "October 17, 2023",
            "scholarship_title":"Canon Collins",
            "scholarship_country": "United Kingdom",
            "Aplly now":"https://cscuk.fcdo.gov.uk/scholarships/commonwealth-phd-scholarships-for-least-developed-countries-and-fragile-states/",
      },
      {
            'id': '4',
            "schlorship_img": img_phd_4,
            "scholarship_type":  " Phd",
            "scholarship_school":  "------",
            "scholarship_deadline": "October 17, 2023",
            "scholarship_title":"Commonwealth Scholarships",
            "scholarship_country": "----------",
            "Aplly now":"https://cscuk.fcdo.gov.uk/scholarships/commonwealth-phd-scholarships-for-least-developed-countries-and-fragile-states/",
      },
      {
            'id': '5',
            "schlorship_img": img_phd_5,
            "scholarship_type":  " Phd",
            "scholarship_school":  "University of Benin, Nigeria, University of Cape",
            "scholarship_deadline": "August 31, 2023",
            "scholarship_title":"African Economic Research Consortium (AERC)",
            "scholarship_country": "Not Specifies",
            "Aplly now":"https://training.aercafrica.org/admissionnew",
      },
      {
        'id': '6',
        "scholarship_title":"(IUCEA) Inter-University Council for East Africa (IUCEA) East Africa Community",
        "schlorship_img": img_und_6,
        "scholarship_type":  "undergraduate",
        "scholarship_school":  "----------",
        "Application_deadline": "October 1, 2023",
        "scholarship_country": "Not Specified",
        "Aplly now":"https://www.iucea.org/7930-2/#",
  },
  {
        'id': '7',
        "scholarship_title":"MasterCard Foundation",
        "schlorship_img": img_und_7,
        "scholarship_type":  "undergraduate",
        "scholarship_school":  "University of the Western Cape",
        "Application_deadline": "October 13, 2023",
        "scholarship_country": "South Africa",
        "Aplly now":"https://form.jotform.com/232501034557044",
  },
  {
        'id': '8',
        "scholarship_title":"Jim Ovia Foundation Scholarship for Undergraduate Students 2023",
        "schlorship_img": img_und_8,
        "scholarship_type":  "undergraduate",
        "scholarship_school":  "Not specified",
        "Application_deadline": "October 17, 2023",
        "scholarship_country": "Nigeria",
        "Aplly now":"https://www.jimoviafoundation.org/user/login?destination=eform/submit/2023-jim-ovia-scholarship-app",
  },
  {
        'id': '9',
        "scholarship_title":"Julius Berger Nigeria Scholarship Scheme for Young Female Nigerians 2023",
        "schlorship_img": img_und_9,
        "scholarship_type":  "undergraduate",
        "scholarship_school":  "Not Specified",
        "Application_deadline": "October 9, 2023",
        "scholarship_country": "Nigeria",
        "Aplly now":"https://candidate.scholastica.ng/candidate/login?ReturnUrl=%2fschemes%2fapply%2f5168",
  },
  {
        'id': '10',
        "scholarship_title":"Deakin University",
        "schlorship_img": img_und_10,
        "scholarship_type":  "undergraduate",
        "scholarship_school":  "Deakin University",
        "Application_deadline": "Not Specified",
        "scholarship_country": "Australia",
        "Aplly now":"https://www.deakin.edu.au/study/fees-and-scholarships/scholarships/find-a-scholarship/deakin-stem-scholarship",
  },


]
const Scholars = () => {
  return (
    <div className="container mx-auto py-8">
    <div className="header my-8 flex flex-col gap-6">
      <h1 className="text-blue-300 flex justify-center my-6 font-extrabold text-4xl font-quicksand">chack out some of our latest Scholarships</h1>

      {/* <div className="flex justifly-between items-center w-full h-full">
        <NavLink className='rounded-full flex item-center' to={path}>{anchorText}</NavLink>
        <NavLink className='rounded-full flex item-center' to={path}>{anchorText}</NavLink>
        <NavLink className='rounded-full flex item-center'  to={path}>{anchorText}</NavLink>
      </div> */}

    </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Scholarship_data.map((scholarship) => (
          <div key={scholarship.id} className="bg-white p-4 shadow-lg rounded-lg">
            <img src={scholarship.schlorship_img} alt="Scholarship" className="w-full object-contain h-auto mb-2" />
            <h2 className="text-xl font-semibold">{scholarship.scholarship_type}</h2>
            <p className="text-gray-600">School: {scholarship.scholarship_school}</p>
            <p className="text-gray-600">Deadline: {scholarship.scholarship_deadline || scholarship.Application_deadline}</p>
            <a
              href={scholarship['Apply now']}
              className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scholars