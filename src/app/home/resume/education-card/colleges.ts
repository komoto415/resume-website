export class College {
    name: string;
    timeline: string;
    shorthand: string;
    degrees: string[];
    gpa: string;
    minors: string[];
    classes: ClassMeta[];
}

class ClassMeta {
    name: string;
    ref: string;
}