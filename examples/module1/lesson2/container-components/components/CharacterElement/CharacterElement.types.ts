export type Character = {
    id: number;
    name: string;
    gender: string;
    image: string;
    created: string;
}

export type CharacterElementProps = {
    character: Character
}