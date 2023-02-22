import { Skill } from "./skill.model";

export class Developper {

    public lastName: string = 'Dupont';
    public firstName: string = 'Jean';
    public age: number = 12;
    public gender: string = 'Monsieur';
    public bio: string = 'Bonjour, je suis dev junior et voici mes compétences ci-dessous';
    public skills: Skill[] = [
        new Skill('JS', 'js', 'js.com'),
        new Skill('React', 'react', 'react.com'),
    ];


}