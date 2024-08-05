export interface TestPart {
  id: number;
  name: string;
  timeLimit: number;
}

export interface Test {
  id: number;
  initials: string;
  parts: TestPart[];
}

export interface EvaluationTest {
  id: number;
  name: string;
  initials: string;
  description: string;
  isActive: boolean;
}
export interface Observation {
  title: string,
  description: string
}

export interface EvaluationPost {
  description: string,
  institution: string,
  date: Date,
  userId: number,
  gradeIds: number[],
  tests: Test[],
  reason: string
}

export interface Evaluation extends EvaluationPost {
  id: number;
  statusId: number
  secretToken: string,
  statusName?: string
}

export interface Part {
  id: number;
  name: string;
  description: string;
  exampleDescription: string;
  timeLimit: number;
  testId: number;
}


// Reporte para un grupo y test determinado
export interface GradeTestReport {
  testId: number,
  name: string,
  initials: string,
  description: string,
  referencias: string,
  startDate: string,
  finishDate: string,
  coments: string,
}


// Reporte de un grupo para una evaluación.
export interface GradeReport {
  testId: number,
  userName: string,
  evaluationId: number,
  evaluationDescription: string,
  evaluationInsitution: string,
  evaluationDate: string,
  evaluationMotivo: string,
  gradeId: number,
  gradeName: string,
  gradeComments: string,
  statusName: string,
  tests: GradeTestReport[]
}

// Reporte para un StudentEvaluation y test determinado
export interface StudentTestReport {
  name: string,
  initials: string,
  description: string,
  referencias: string,
  startDate: string,
  finishDate: string,
  coments: string,
}

// Reporte para un StudentEvaluation
export interface StudentReport {
  evaluationId: number,
  evaluationDescription: string,
  evaluationInstitution: string,
  evaluationDate: string,
  evaluationMotive: string,
  gradeId: number,
  gradeName: string,
  gradeComments: string,
  statusName: string,
  tests: StudentTestReport[]
}

export interface StudentEvaluation {
  id: number;
  name: string;
  lastName: string;
  birthDate: Date;
  statusId: number;
  gradeId: number;
  evaluationId: number;
}

export interface Question {
  id: number;
  isExample: boolean;
  description: string;
  number: number;
  partId: number;
}

export interface StudentEvaluation {
  id: number;
  name: string;
  lastName: string;
  birthDate: Date;
  statusId: number;
  gradeId: number;
  evaluationId: number;
}

export interface Question {
  id: number;
  isExample: boolean;
  description: string;
  number: number;
  partId: number;
}