export type CharacterType = {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    type: string;
    image: string;
    origin: {
        name: string;
    }
};

export type ProfileType = {
    data: CharacterType;
}

export type ListType = {
  data: {
    info: {
      count?: number;
      pages?: number;
      next: string | null;
      prev: string | null;
    };
    results: Array<CharacterType>;
  };
};

export type ProfileFieldsType = Array<{ label: string, value: string }>;