const languages = ['JavaScript', 'HTML', 'CSS'];

{
    const [a, b, c] = languages;

    console.log(a, b, c);
}

{
    const [a, , c] = languages;

    console.log(a, c);
}

{
    const [first, ...remaining] = languages;

    console.log(first, remaining);
}

for (const language of languages) {
    console.log(language);
}

const moreLanguages = [
    {
        name: 'Java',
        version: 8
    },
    {
        name: 'Python',
        version: 3
    },
    {
        name: 'Ruby',
        version: 2
    }
];

console.log(moreLanguages.find(language => language.version > 1));
