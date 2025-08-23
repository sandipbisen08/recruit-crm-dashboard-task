export interface Candidate {
    id: string;
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    lastUpdated: string;
    currentOrganization: string;
    summary: string;
    skills: string[];
    employmentStatus: string;
    availableFrom: string;
    dob: string;
    currentSalary: number;
    relevantExperience: string;
    noticePeriod: string;
    salaryExpectation: number;
    fullAddress: string;
    status: string;
    resume: string;
    salaryType: string;
    totalExperience: string;
    languageSkills: string;
}

export const mockCandidate: Candidate = {
    id: 'ID-231',
    name: 'William Sample',
    title: 'Senior Product Manager',
    location: 'United States, Dallas',
    email: 'williamsample@gmail.com',
    phone: '+91 9021232326',
    lastUpdated: 'Jul 14, 2023, 4:04 pm',
    currentOrganization: 'World Bank Group',
    summary: 'Current Organization',
    skills: ['HTML', 'CSS', 'Javascript'],
    employmentStatus: 'Employed',
    availableFrom: 'Jul, 14, 2023',
    dob: '15 June 1993',
    currentSalary: 6000,
    relevantExperience: '7 Years',
    noticePeriod: '90 Days',
    salaryExpectation: 9000,
    fullAddress: '9400 Ashton Rd, Philadelphia...',
    status: 'Submitted to Client',
    resume: 'Resume',
    salaryType: 'Annual',
    totalExperience: '5 Years',
    languageSkills: 'English (Elementary proficiency)',
};
