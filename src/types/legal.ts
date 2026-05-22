export interface LegalSubsection {
  title: string;
  content: string;
}

export interface LegalSection {
  id: string;
  title: string;
  content?: string;
  subsections?: LegalSubsection[];
}
