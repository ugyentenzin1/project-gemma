export interface Projects {
    name: string,
    age: string,
    dateOfBirth: Date;
}


export interface StoreState {
    projectCreation: Projects[];
}

export interface BasicDetails {
    name: string,
    dateOfBirth: Date,
    studentId: string,
    citizenId: string,
    dzongkhag: string,
    gewog: string,
    village: string
}

export interface DemographicDetails {
    schoolName: string,
    grade: string,
    house: string,
    subject: string,
    noOfSubjectTakenByStudents: string,
    previousSchool: string
}   

export interface ParentsDetails {
    name: string,
    dateOfBirth: string,
    martialStatus: string,
    citizenId: string,
    contactNumber: string,
    dzongkhag: string,
    gewog: string,
    village: string,
}


export interface Student {
    basicDetails: BasicDetails;
    demoGraphincDetails: DemographicDetails;
    parentsDetails:ParentsDetails;
}