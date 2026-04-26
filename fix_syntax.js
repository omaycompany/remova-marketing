const fs = require('fs');

function fixAlternatives() {
    let content = fs.readFileSync('content/alternatives.ts', 'utf8');
    content = content.replace(/    \}\n    \},\n    \{/g, '    },\n    {');
    fs.writeFileSync('content/alternatives.ts', content);
}

function fixComparisons() {
    let content = fs.readFileSync('content/comparisons.ts', 'utf8');
    content = content.replace(/    \},\n    \},\n    \{/g, '    },\n    {');
    fs.writeFileSync('content/comparisons.ts', content);
}

function fixUseCases() {
    let content = fs.readFileSync('content/use-cases.ts', 'utf8');
    content = content.replace(/    \},\n    \},\n    \{/g, '    },\n    {');
    fs.writeFileSync('content/use-cases.ts', content);
}

function fixGlossary() {
    let content = fs.readFileSync('content/glossary.ts', 'utf8');
    // My previous sed replaced "    )," with "    ," globally. Let's fix it by replacing "    ," with "    )," where it's at the end of a t() call.
    // The pattern is:
    //         ]
    //     ,
    // Or just restore "    ," to "    ),"
    content = content.replace(/    ,/g, '    ),');
    // But wait, the original syntax error in glossary was:
    //     )
    //
    //     ),
    //     t(
    // So let's fix that specifically.
    content = content.replace(/    \),\n\n    \),\n    t\(/g, '    ),\n    t(');
    content = content.replace(/    \),\n    \),\n    t\(/g, '    ),\n    t(');
    fs.writeFileSync('content/glossary.ts', content);
}

fixAlternatives();
fixComparisons();
fixUseCases();
fixGlossary();
console.log("Done");
