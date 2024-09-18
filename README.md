# O'quiz

Réalisation d'un projet d'application de quizs (tous placés en base de données avec Postgresql) lors d'un exercice en groupe de fin de leçon de ma formation avec l'école O'Clock :

Obligation de devoir s'inscrire et se connecter pour jouer, ce qui oblige une début de sécurisation pour l'ajout de _users_ dans la base de données.

## Home page

La `page d'accueil` affiche **dynamiquement** les `quiz` avec leur description, triés par ordre alphabétique, ainsi que le nom/prénom de leurs `auteurs` et les `thèmes` associés au quiz.
Tout est dynamique, et les liens cliqués envoient vers la bonne page.

## Page d'un quiz

Une page d'un quiz permet de visualiser un `quiz`, avec :

- ses `thèmes`
- ses `questions`
  - la `difficulté` de chaque question
  - et les `réponses possibles` à chaque question

## Page des thèmes/catégories

Un autre page permet de lister les `thèmes`, et sous chaque thème, un lien vers les `quiz` qui comportent ces thèmes.
