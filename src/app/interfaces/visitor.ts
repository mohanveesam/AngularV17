export interface VisitorSkill {
  skillName: string;
  experience: number;
}

export interface Visitor {
  id: number;
  name: string;
  aadhaarNumber: string;
  phoneNumber: string;
  purpose: string;
  skills: VisitorSkill[];
}