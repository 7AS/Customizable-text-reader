# Customizable text reader [EN] #
### (Version française ci-dessous) ###

## Context
This project was developed for the course Publication numérique taught by Isaac Pante (SLI, Lettres, UNIL).

## Overview
This project is a text reader, entirely written in HTML/CSS and Javascript/jQuery, which has the particularity of allowing great flexibility in the formatting of the text to be read. It is possible to customize a large number of elements (such as font type, text size, alignments, spacing, etc.) to both facilitate reading and make it pleasant for anyone, but also to allow people with vision difficulties to have a simple and intuitive interface to use in which they can format texts according to their preferences. It is possible to import text into the program directly from a `*.txt` file or to paste text directly into the program. The formatting of the text is done according to the user's preferences, although a default formatting is necessary. For a better comfort, there is a live preview available and it updates itself as soon as a setting is changed. The program comes with 3 default themes (day, night, high contrast). However, it is possible to change the color of the text and the background on which it is written to arbitrary colors defined by the user. The program works only through the user's web browser and does not require the installation of any library plugins.

## Targetted audience
This project is open to everyone. However, special attention has been paid to people with disabilities or sight problems. The project has been developed with the idea that it can be useful to these people and help them to read texts more easily. For example, by offering a user-defined color choice, a person suffering from color blindness can easily select colors that suit them. Similarly, the high contrast theme can help people with color blindness, as well as people who may have difficulty detecting contrast on computer screens.

## Main features
 - Light and intuitive interface
 - No third-party software or plugins to install
 - Virtually usable on all modern platforms
 - Lots of freedom to format text (font type and size, line and word spacing, text alignment, colours, etc.)
 - Ability to preview text formatting while adjusting settings
 - Three themes are included as standard (day, night, high contrast)
 - In addition to the proposed themes, it is possible to directly customize the background color and the text color
 - If some features are missing, it would be relatively easy to implement them (or to adjust the existing ones)
 - Ability to open `*.txt` files from the machine and/or paste raw text directly into the program
 - Ability to format text in bold and italic according to the Markdown code
 - Display of the progress while reading the text
 - Responsive/dynamic formatting for most devices on the market

## Requirements
 - Have basic computer skills; in particular know how to use a web browser and how to open files from a folder 
 - Use a Unix or Windows operating system (the others have not been tested yet)
 - Have a modern web browser capable of interpreting HTML5, CSS3 and Javascript (ideally ES5 and higher)
 - Have a digital version of a book in `*.txt` format, for example retrieved from the [project gutenberg website](https://www.gutenberg.org/), or know how to retrieve, copy and paste text from the internet

## Installation
In order to make the project as easy to use as possible, the program does not require any formal installation or additional downloads. In order to use the reader, you only need to download the zip archive and unzip it to the desired location. Once this is done, open the file "index.html" (which is in the unzipped folder) in an internet browser supporting Javascript. Once this is done, you should see a language selection screen and be able to start using the program.

## How to use ?
The use of this program is done through the Internet browser.

Generally speaking, the use of the program can be broken down into 7 main steps:

 1. Start the program by opening the file "index.html" in a compatible internet browser
 2. Select the language and optionally follow the tutorial
 3. Open the Menu at the bottom left of the screen
 4. Open a text file (tab 1) or insert text directly into the program by pasting it (tab 2)
 5. Format the text according to your preferences (tab 3)
 6. Close the menu (tab 4)
 7. Read the text

The program is meant to be intuitive! So it is highly encouraged to test it by yourself in order to get used to the interface.

However, if you need more details on how to formally use the program, a tutorial with screenshots is provided at each start of the program to help you.

## Limits
Although in most cases the program is meant to be light, easy to use and accessible to a wide audience, one may encounter some limitations.

 - **Interface** : The interface is only available in two languages (French and English) (even though it is relatively easy to add new ones)

 - **Performance** : On a hardware with limited computing power, it is possible that when reading a large text, the following problems occur

     - A long initial formatting time (sometimes several seconds) after pressing the "Add text to page" button

     - A variable latency between the moment you click on a setting and the result. Particularly noticeable on very long texts and if the user is not at the beginning of the text

     - In extreme cases, it is possible that the browser seems unresponsive or stops working

 - **Ergonomy**: The program does not remember the added texts or where users stopped their reading

 - **Formats** : The program can only read plain text files (`*.txt`) or accept directly pasted text (tab 2)

## Suggestions for improvement
This project is intended to be a starting point. Therefore, there are many ways to improve it. The author is open to any kind of suggestions for improvement of the project, especially regarding accessibility. Also, due to the nature of the project, it is open to modifications according to the license below.

Although special attention has been paid to compatibility, it is difficult to be sure that the program will work correctly in all circumstances, on all platforms and on all devices. Therefore, the author strongly encourages anyone to test the program and, if necessary, report compatibility issues.

Finally, any suggestions for improving the readability of the interface or the ease of use are greatly appreciated.

Also, the author would be very interested in hearing about forks of this project!

## Bugs
No bugs are known at the moment, except some compatibility issues (e.g. old browsers) and a variable execution time depending on the size of the text (see the "Limitations" section above).

## Credits
 - The *Alice au pays des merveilles* book was retrieved from the [project gutenberg website](https://www.gutenberg.org/) and is made available under their [license](https://www.gutenberg.org/policy/license.html).
 - The jQuery code is distributed under their [license](https://jquery.org/license/).

## License
This project is distributed under the [Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) ](https://creativecommons.org/licenses/by-nc/4.0/deed.en) terms.
For any remark or question, contact directly the author.

![CC-BY-NC 4.0](images/cc-by-nc.png)

---

# Lecteur de textes personnalisable - FR #

### (English version above) ###

## Contexte
Ce projet a été développé dans le cadre du cours Publication numérique dispensé par Isaac Pante (SLI, Lettres, UNIL).

## Description générale du projet
Ce projet est un lecteur de texte, entièrement écrit en HTML/CSS et Javascript/jQuery, qui a pour particularité de permettre une grande flexibilité dans la mise en forme du texte à lire. Il est possible de personnaliser un grand nombre d'éléments (comme le type de police, la taille du texte, les alignements, les espacements etc.) pour à la fois faciliter la lecture et la rendre agréable à toute personne, mais aussi pour permettre aux personnes présentant des difficultés de vision d'avoir un interface simple et intuitif à utiliser dans lesquels elles peuvent formatter des textes selon leur préférences. Il est possible d'importer du texte dans le programme directement depuis un fichier `*.txt` ou de coller du texte directement dans le programme. Le formattage du texte se fait selon les préférences de l'utilisateur, bien qu'un formattage par défaut soit nécessaire. Pour un meilleur confort, il une prévisualisation en direct est disponible et se met à jour dès qu'un réglage est changé. Le programme vient avec 3 thèmes par défaut (jour, nuit, haut contraste). Il est néanmoins possible de changer la couleur du texte et du fond sur lequel il est écrit vers des couleurs arbitraires définies par l'utilisateur. Le programme ne fonctionne par l'intermédiaire du navigateur internet de l'utilisateur et ne nécessite l'installation d'aucun plugin bibliothèque.

## Public cible
Ce projet s'adresse à tout le monde. Une attention particulière a cependant été portée aux personnes présentant un handicap ou un problèmes de vue. Le projet a donc aussi été développé dans l'optique qu'il puisse être utile à ces personnes et les aider à lire des texte plus facilement. Par exemple, en proposant un choix de couleur défini par l'utilisateur, une personne souffrant de daltonisme peut facilement sélectionner des couleurs qui lui conviennent. De même, le thème à haut contraste peut aider ces dernières, tout comme les personnes qui auraient plus de difficulté à déceler les contrastes sur les écrans d'ordinateurs.

## Fonctionnalités principales
 - Interface légère et intuitive
 - Pas d'installation de logiciels tiers ou plugins
 - Virtuellement utilisable sur toutes les plateformes modernes
 - Beaucoup de liberté pour formatter le texte (type et taille de la police, espacement des lignes et des mots, alignement du texte, couleurs, etc.)
 - Capacité à prévisualiser le formattage du texte en même temps qu'on ajuste les réglages
 - Trois thèmes sont inclus de base (jour, nuit, haut contraste)
 - En plus des thèmes proposés, il est possible de personnaliser directement la couleur de fond et la couleur du texte
 - Si des fonctionnalités sont manquantes, il serait relativement aisé d'en rajouter (ou de compléter celles existantes)
 - Capacité d'ouvrir des fichiers `*.txt` depuis la machine et/ou coller directement du texte brut dans le programme
 - Capacité à mettre en forme sommairement les textes en gras et italique selon le code Markdown
 - Affichage de la progression dans la lecture du texte
 - Mise en forme responsive/dynamique pour la plupart des appareils du marché

## Prérequis
 - Avoir des connaissances élémentaire en informatique ; en particulier savoir utiliser un navigateur internet et savoir comment y ouvrir des fichiers depuis un dossier 
 - Utiliser un système d'exploitation Unix ou Windows (les autre n'ont pas été testés)
 - Posséder un navigateur internet moderne capable d'interpréter le HTML5, le CSS3 et le Javascript (idéalement ES5 et suivants)
 - Posséder une version digital d'un livre au format `*.txt`, par exemple récupéré du sur le [site du projet gutenberg](https://www.gutenberg.org/), ou savoir récupérer, copier et coller du texte depuis internet

## Installation
Dans l'optique de rendre le projet aussi simple d'utilisation que possible, le programme se passe de toute installation formelle ou téléchargements annexes. Pour pouvoir utiliser le lecteur, il suffit de télécharger l'archive zip et de la décompresser à l'endroit voulu. Une fois ceci fait, il convient d'ouvrir le fichier "index.html" (qui se trouve dans le dossier décompressé) dans un navigateur internet supportant le Javascript. Une fois ceci fait, vous devriez voir s'afficher un écran de sélection de la langue et devriez pouvoir commencer à utiliser le programme.

## Comment utiliser le programme ?
L'utilisation de ce programme se fait au travers du navigateur internet.

De manière générale, on peut décomposer l'utilisation du programme en grandes 7 étapes :

 1. Démarrer le programme en ouvrant le fichier "index.html" dans un navigateur internet compatible
 2. Sélectionner la langue et éventuellement suivre le didacticiel proposé
 3. Ouvrir le Menu en bas à gauche de l'écran
 4. Ouvrir un fichier texte (onglet 1) ou insérer direct du texte dans le programme en le collant (onglet 2)
 5. Formatter le texte selon les préférences, via l'onglet 3
 6. Fermer le menu, via l'onglet 4
 7. Lecture du texte

Le programme se veut être intuitif ! Ainsi il est vivement encouragé de le tester par soi-même afin de se familiariser avec l'interface.

Si vous avez néanmoins besoin de plus de détails sur la manière d'utiliser formellement le programme, un didacticiel est mis à disposition à chaque démarrage du programme avec des captures d'écran pour vous guider.

## Limites
Bien que dans la plupart des cas le programme se veut rester léger, facile d'utilisation et accessible à un grand publique, il faut quand même noter quelques limites.

 - **Interface** : À l'heure actuelle, l'interface se présente en deux langues uniquement (français et anglais) (bien qu'il soit relativement aisé d'en ajouter d'autres)

 - **Performances** : Sur un matériel doté d'une puissance de calcul limitée, il est possible qu'en lisant un texte de grande taille les problèmes suivant surviennent

     - Un temps de mise en forme initiale conséquent (parfois plusieurs secondes) après avoir appuyé sur le bouton "Ajouter le texte à la page"

     - Un délai de latence variable entre entre le moment où on clique sur un réglage et le résultat. Particulièrement visible sur les très longs texte et si l'utilisateur ne se trouve pas au début du texte

     - Dans les cas extrèmes, il est possible que le navigateur cesse de fonctionner, même si cela n'a pas (encore ?) été remarqué en pratique

 - **Ergonomie** : Le programme ne garde pas en mémoire les texte ajoutés ni l'endroit où s'est arrêté l'utilisateur dans sa lecture

 - **Formats** : À l'heure actuelle, le programme ne peut lire que des fichiers au format texte brut (`*.txt`) ou accepter directement du texte collé dans l'onglet 2

## Propositions d'améliorations
Ce projet se veut être un point de départ. Par suite, il existe probablement encore beaucoup de manière de l'améliorer. L'auteur reste donc ouvert à tous type de propositions d'améliorations du projet, en particularité concernant l'accessibilité. De même, de par la nature du projet, il est ouvert aux modifications selon la license ci-dessous.

Bien qu'une attention toute particulière a été fournie à la compatibilité, il est difficile d'être sûr que le programme fonctionne correctement en toutes circonstances, sur toutes les plateformes et sur tous les appareils. Ainsi, l'auteur encourage vivement toute personne à tester le programme et, le cas échéant, rapporter un problème de compatibilité.

Finalement, toute proposition d'amélioration de la lisibilité de l'interface ou de la facilité d'utilisation est grandement appréciée.

De même, l'auteur serait très intéressé d'avoir connaissance des différentes améliorations qu'auraient pu apporter un fork de ce projet ! Il encourage ainsi vivement à lui faire parvenir tout projet dérivé.

## Bugs
Aucun bug n'est connu à l'heure actuelle, hormis certains problèmes de compatibilité (par exemple les vieux navigateurs) ainsi qu'une durée d'exécution variable selon la taille du texte (voir la section "Limites" ci-dessus)

## Crédits
 - Le livre *Alice au pays des merveilles* a été récupéré du [site du projet gutenberg](https://www.gutenberg.org/) et est mis a disposition selon les modalités de leur [license](https://www.gutenberg.org/policy/license.html).
 - Le code jQuery est distribué selon les modalités de leur [license](https://jquery.org/license/).

## License
Ce projet est distribué sous la license Creative Commons [Attribution - Pas d’Utilisation Commerciale 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/).
Pour toute question ou remarque, contactez directement l'auteur.

![CC-BY-NC 4.0](images/cc-by-nc.png)
