{
    const languages = new Set();

    languages.add('JavaScript');
    languages.add('Objective-C');
    languages.add('Swift');
    languages.add('Swift');

    console.log(languages.size);

    for (const language of languages) {
        console.log(language);
    }
}

{
    const language1 = { name: 'JavaScript' };

    const languages = new WeakSet();

    languages.add(language1);

    console.log(languages.has(language1));
    console.log(languages.delete(language1));
    console.log(languages.has(language1));
}
