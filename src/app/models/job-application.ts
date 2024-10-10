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
      graduationYear: string;
      gpa: string;
    };
    experience: {
      yearsExperience: string;
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
  