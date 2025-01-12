export interface JobApplication {
    id?: number;
    personalInfo: {
      name: string;
      email: string;
      phone: string;
    };
    education: {
      degree: string;
      university: string;
      major: string;
      graduation_year: string;
      gpa: string;
    };
    experience: {
      years_experience: string;
      jobTitle: string;
      company: string;
      salary: string;
    };
    jobDetails:{
      jobTitle: string;
      company: string;
      salary: string;
    }
  }
