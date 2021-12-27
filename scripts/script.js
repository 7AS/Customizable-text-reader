$(document).ready(function () {
    /* Constantes */
    const TAILLE_X = screen.width;
    const TAILLE_Y = screen.height;

    /* Traductions */
    const TRADUCTION_FR = {
        'titrePage' : 'Lecteur de textes personnalisable',
        'texte' : 'Bienvenue !',
        'boutonSuivant': 'Suivant',
        'boutonPasser': 'Passer le tutoriel',
        'texteTutoriel' : [
            ["Ce guide vous aidera à prendre en main ce programme. Si vous ne souhaitez pas le suivre et expérimenter le programme par vous-même, vous pouvez cliquer sur \"Passer le tutoriel\". Sinon, cliquez sur \"Suivant\". Dans tous les cas, vous pourrez accéder à ce tutoriel à chaque fois que vous démarrez le programme si vous le souhaitez." , ''],
            ["Ce programme vous permet de lire les textes de votre choix en les formattant d'une manière qui vous convient.", ''],
            ["Apprenons tout d'abord à utiliser le Menu, car c'est lui qui permet d'effectuer la pupart des actions au sein du programme. Une fois que le tutoriel sera terminé, il apparaîtra en bas à gauche de l'écran comme sur l'image ci-dessus. Pour l'ouvrir, il vous suffira de cliquer sur \"Menu\".", "menu_fr.png"],
            ["Vous verrez s'afficher un écran similaire à celui ci-dessus.", "menu_ouvert_fr.png"],
            ["Apprenons ensuite à ajouter du texte !", ''],
            ["Pour ce faire, deux possibilités s'offrent à vous. La première vous permet d'ouvrir un fichier texte (format *.txt) depuis votre ordinateur/téléphone/tablette. La deuxième vous permet de coller directement dans le programme le texte brut que vous souhaitez lire. Passons ces différentes options en revue.", ''],
            ["Pour ouvrir un fichier depuis votre ordinateur/téléphone/tablette, cliquez sur l'onglet \"① Ouvrir un fichier\".", "ouvrir_fichier_01_fr.png"],
            ["Là, vous pouvez cliquer sur \"Parcourir\" pour naviguer dans les fichiers stockés sur votre appareil. Sélectionnez ensuite un fichier au format *.txt puis ouvrez-le.", "ouvrir_fichier_02_fr.png"],
            ["Une fois ceci fait, le contenu du fichier apparaîtra dans l'onglet \"② Ajouter du texte\". Il ne vous reste plus qu'à cliquer sur \"Ajouter le texte à la page\" pour pouvoir le lire !", "ajouter_texte_01_fr.png"],
            ["Si vous souhaitez coller du texte depuis votre presse-papier, rendez-vous directement dans l'onglet \"② Ajouter du texte\". C'est dans le champ visible à l'écran qu'il vous faudra coller votre texte manuellement. Une fois cela fait, appuyez à nouveau sur \"Ajouter le texte à la page\" pour pouvoir le lire !", "ajouter_texte_02_fr.png"],
            ["Si vous n'avez pas de texte sous la main, naviguez dans le dossier ebooks inclus dans le projet, ouvrez le fichier \"alice.txt\" et suivez les étapes précédentes pour l'ajouter à la page et le lire. Le texte proposé est \"Les Aventures d'Alice au pays des merveilles\" par Lewis Carroll. Le texte a été récupéré tel quel du site <a href='https://www.gutenberg.org/'>https://www.gutenberg.org/</a>.<br><br>Vous êtes fortement encouragés à aller visiter ce site et y récupérer d'autres ebooks puis les lire avec ce programme !", ''],
            ["Voyons maintenant comment vous pouvez formatter le texte pour un meilleur confort !", ''],
            ["Rendez-vous dans l'onglet \"③ Réglages\".", "reglages_fr.png"],
            ["Comme vous pouvez le constater, maintes options s'offrent à vous !<br>Sur la partie droite de la page, vous avez accès aux différentes options. On notera par exemple la possibilité de changer la langue de l'interface, le thème, la taille de la police d'écriture, l'espacement entre les lignes etc.", "reglages_droite_fr.png"],
            ["La partie gauche de la page est une prévisualisation qui se met à jour sitôt que vous ajustez un réglage.", "reglages_gauche_fr.png"],
            ["Une fois que vous avez trouvé les réglages idéaux, cliquez sur \"④ Fermer le menu\" pour revenir à l'écran principal et lire votre texte. N'hésitez surtout pas à revenir à l'onglet \"③ Réglages\" autant de fois qu'il vous faut pour ajuster les réglages aussi finement que nécessaire pour vous offrir la meilleure expérience possible !", ''],
            ["Finalement, examinons l'interface qui vous premet de lire votre texte.", ''],
            ["Il est constitué du corps principal où est écrit le texte, et de quelques boutons.<br>Vous connaissez déjà l'utilité du bouton \"Menu\".", "ecran_principal_fr.png"],
            ["Les boutons \"Avancer\" et \"Reculer\" vous premettent de progresser dans votre texte.<br>Notez que la progression s'affiche en bas à droite de l'écran.", "ecran_principal_boutons_fr.png"],
            ["Si vous utilisez un écran vertical (typiquement un téléphone), les boutons \"Avancer\" et \"Reculer\" se trouvent à droite de l'écran pour plus de confort et leur texte a été remplacé par  \"+\" (pour avancer) et \"-\" (pour reculer).", "version_telephone.png"],
            ["Voilà qui conclut le tutoriel.<br><br>Bonne lecture !", '']
        ],
        'boutonMenu' : 'Menu',
        'boutonReculer' : 'Reculer',
        'boutonAvancer' : 'Avancer',
        'nOuvrir' : 'Ouvrir un fichier',
        'nAjouter' : 'Ajouter du texte',
        'nReglages' : 'Réglages',
        'nFermer' : 'Fermer le menu',
        'informationDemarrage' : 'Cliquez sur "Menu" en bas de l\'écran pour commencer.',
        'informationOngletsTexte' : "Cliquez sur un des onglets en haut de l'écran pour obtenir plus d'informations.",
        'oOuvrirTexte' : "En cliquant sur le bouton ci-dessous, vous pouvez charger le contenu d'un livre directement depuis un fichier texte (*.txt) sauvegardé dans votre ordinateur/téléphone/tablette. Si vous n'avez pas de livre sous la mains, naviguez dans le dossier \"ebooks\" du projet et sélectionnez \"alice.txt\". Vous pourrez lire \"Les Aventures d'Alice au pays des merveilles\" (Lewis Carroll) qui a été récupéré tel quel du site du Projet Gutenberg.",
        'oAjouterTexte' :"Vous pouvez ajouter votre propre texte en le collant dans le champ ci-dessous. Ensuite, appuyez sur \"Ajouter le texte à la page\" pour le lire. Si vous avez besoin de modifier la mise en forme du texte, vous pouvez ouvrir à nouveau le Menu et aller dans l'onglet \"③ Réglages\"",
        'boutonAjouterTexte' : 'Ajouter le texte à la page',
        'previsualisationTexte' : 'Prévisualisation',
        'reglagesLangue' : 'Langue',
        'reglagesTexte' : 'Réglages',
        'reglagesTheme' : 'Thème',
        'reglagesThemeJour' : 'Jour',
        'reglagesThemeNuit' : 'Nuit',
        'reglagesThemeHC' : 'Haut contraste',
        'reglagesPolice' : "Police d'écriture",
        'reglagesTailleTexte': 'Taille du texte',
        'reglagesTailleTexteTresPetit' : 'Très petit',
        'reglagesTailleTextePetit' : 'Petit',
        'reglagesTailleTexteNormal' : 'Normal',
        'reglagesTailleTexteGrand' : 'Grand',
        'reglagesTailleTexteTresGrand' : 'Très grand',
        'reglagesTailleTexteGeant' : 'Géant',
        'reglagesEspacementLignesTexte' : 'Espacement entre les lignes',
        'reglagesEspacementMotsTexte' : 'Espacement entre les mots',
        'reglagesAlignementTexte' : 'Alignement du texte',
        'alignementGauche' : 'Aligné à gauche',
        'alignementCentre' : 'Centré',
        'alignementJustifie' : 'Justifié',
        'reglagesCouleursTexte' : 'Couleurs',
        'couleurDuTexte' : 'Couleur du texte',
        'couleurArrierePlan' : "Couleur d'arrière-plan"
    };

    const TRADUCTION_EN = {
        'titrePage' : 'Customizable text reader',
        'texte' : 'Welcome!',
        'boutonSuivant': 'Next',
        'boutonPasser': 'Skip tutorial',
        'boutonMenu' : 'Menu',
        'texteTutoriel' : [
            ["This guide will help you get started with the program. If you don't want to follow it and experience the program on your own, you can click on \"Skip tutorial\". Otherwise, click on \"Next\". In any case, you can access this tutorial every time you start the program if you wish." , ''],
            ["This program allows you to read the texts of your choice by formatting them in a way that suits you.", ''],
            ["Let's first learn how to use the Menu, because it is the one that allows you to perform most of the actions within the program. Once the tutorial is finished, it will appear at the bottom left of the screen as in the image above. To open it, simply click on \"Menu\".", "menu_en.png"],
            ["You will see a screen similar to the one above.", "menu_ouvert_en.png"],
            ["Next, let's learn how to add some text!", ''],
            ["There are two ways to do this. The first one allows you to open a text file (*.txt format) from your computer/phone/tablet. The second allows you to paste the raw text you want to read directly into the program. Let's go through these different options.", ''],
            ["To open a file from your computer/phone/tablet, click on the tab \"① Open file.\"", "ouvrir_fichier_01_en.png"],
            ["There, you can click on \"Browse\" to browse the files stored on your device. Then select a file in *.txt format and open it.", "ouvrir_fichier_02_en.png"],
            ["Once this is done, the content of the file will appear in the \"② Add Text\" tab. All you have to do now is to click on \"Add text to page\" to read it!", "ajouter_texte_01_en.png"],
            ["If you want to paste text from your clipboard, go directly to the \"② Add Text\" tab. You will have to paste your text manually in the field shown on the above image. Once this is done, press again on \"Add text to page\" to read it !", "ajouter_texte_02_en.png"],
            ["If you don't have any text right now, navigate to the ebooks folder included in the project, open the file \"alice.txt\" and follow the previous steps to add it to the page and read it. The proposed text is \"Alice in Wonderland\" (in french!) by Lewis Carroll. The text was retrieved as is from the website <a href='https://www.gutenberg.org/'>https://www.gutenberg.org/</a>.<br><br>You are strongly encouraged to visit this website and retrieve other ebooks and import them within this program!", ''],
            ["Now let's see how you can format the text for better convenience!", ''],
            ["Go to the \"③ Settings\" tab.", "reglages_en.png"],
            ["As you can see, there are many options available to you.<br>On the right side of the page, you have access to different options. For example, you can change the interface language, the theme, the font size, the spacing between lines etc.", "reglages_droite_en.png"],
            ["The left side of the page is a preview that will update as soon as you adjust a setting!", "reglages_gauche_en.png"],
            ["Once you have found the ideal settings, click on \"④ Close Menu\" to return to the main screen and read your text. Feel free to come back to the \"③ Settings\" tab as many times as you need to adjust the settings as finely as necessary to give you the best experience possible!", ''],
            ["Finally, let's look at the interface that allows you to read your text.", ''],
            ["It consists of the main body where the text is written, and some buttons.<br>You already know the purpose of the \"Menu\" button.", "ecran_principal_en.png"],
            ["The \"Forward\" and \"Backward\" buttons allow you to progress through your text.<br>Furthermore, your progression is displayed at the bottom right of the screen.", "ecran_principal_boutons_en.png"],            
            ["If you are on a vertical screen (typically a smartphone), the \"Forward\" and \"Backward\" buttons are on the right side of the screen for more comfort and their text has been replaced by \"+\" (to go forward) and \"-\" (to go backward).", "version_telephone.png"],
            ["That concludes the tutorial.<br><br>Happy reading!", '']
        ],
        'boutonReculer' : 'Backward',
        'boutonAvancer' : 'Forward',
        'nOuvrir' : 'Open file',
        'nAjouter' : 'Add text',
        'nReglages' : 'Settings',
        'nFermer' : 'Close menu',
        'informationDemarrage' : 'Click on "Menu" at the bottom left corner to start.',
        'informationOngletsTexte' : 'Click on the tabs at the top of the screen to get more information.',
        'oOuvrirTexte' : "By clicking on the button below, you can load the content of a book directly from a text file (*.txt) saved in your computer/phone/tablet. If you don't have a book, navigate to the \"ebooks\" folder in the project and select \"alice.txt\". You will be able to read \"Alice in Wonderland\" (in french !) (Lewis Carroll) which has been retrieved as is from the Project Gutenberg's website.",
        'oAjouterTexte' :'You can add your own text by pasting it into the field below. Then press \"Add text to page\" to read it. If you need to change the text formatting, you can open the Menu again and go to the tab \"③ Settings\"',
        'boutonAjouterTexte' : 'Add text to page',
        'previsualisationTexte' : 'Preview',
        'reglagesLangue' : 'Language',
        'reglagesTexte' : 'Settings',
        'reglagesTheme' : 'Theme',
        'reglagesThemeJour' : 'Day',
        'reglagesThemeNuit' : 'Night',
        'reglagesThemeHC' : 'High contrast',
        'reglagesPolice' : 'Font',
        'reglagesTailleTexte': 'Text size',
        'reglagesTailleTexteTresPetit' : 'Very small',
        'reglagesTailleTextePetit' : 'Small',
        'reglagesTailleTexteNormal' : 'Normal',
        'reglagesTailleTexteGrand' : 'Large',
        'reglagesTailleTexteTresGrand' : 'Very large',
        'reglagesTailleTexteGeant' : 'Huge',
        'reglagesEspacementLignesTexte' : 'Line spacing',
        'reglagesEspacementMotsTexte' : 'Word spacing',
        'reglagesAlignementTexte' : 'Text alignment',
        'alignementGauche' : 'Left',
        'alignementCentre' : 'Center',
        'alignementJustifie' : 'Justify',
        'reglagesCouleursTexte' : 'Colors',
        'couleurDuTexte' : 'Text color',
        'couleurArrierePlan' : 'Background color'
    };

    /* Autres variables */
    let scrollQte, taillePageY, positionActuelleY, texteUtilisateur;
    let conteneurLivre = $( '#conteneurLivre' );
    let informationDemarrage = $( '#informationDemarrage' );

    /* Elements des onglets */
    let navigationOuvrir = $( '#menu #navigation #nOuvrir' );
    let navigationAjouter = $( '#menu #navigation #nAjouter' );
    let navigationReglages = $( '#menu #navigation #nReglages' );
    let navigationFermer = $( '#menu #navigation #nFermer' );
    let ongletOuvrir =  $( '#menu #onglets #oOuvrir' );
    let ongletAjouter =  $( '#menu #onglets #oAjouter' );
    let ongletReglages = $( '#menu #onglets #oReglages' );
    let ongletInformation = $( '#menu #onglets #informationOnglets' );
    let boutonTester = $( '#menu #onglets #boutonTester' );
    let boutonAjouter = $( '#menu #onglets #oAjouter #zoneInteractive #boutonAjouterTexte');

    /* Elements du footer */
    let boutonMenu = $( '#boutonMenu' );
    let menu = $( '#menu' );
    let navigation = $( '.navigation' );

    /* Affichage du menu */
    boutonMenu.on('click', function () {
        menu.toggle();
    })

    /* Fermeture du menu */
    navigationFermer.on('click', function () {
        menu.toggle();
    })

    /* Fermer tous les onglets */
    function fermerOnglets () {
        ongletOuvrir.hide();
        ongletAjouter.hide();
        ongletReglages.hide();
    }

    /* Reinitialiser les onglets a leur status par defaut */
    function reinitialiserOnglets () {
        ongletInformation.remove();
        fermerOnglets();
        ongletOuvrir.removeClass( 'ongletActif' );
        ongletAjouter.removeClass( 'ongletActif' );
        ongletReglages.removeClass( 'ongletActif' );
    }

    /* Affichage de la démo */
    navigationOuvrir.on( 'click', function () {
        reinitialiserOnglets();
        ongletOuvrir.show();
        ongletOuvrir.addClass( 'ongletActif' );
    })

    /* Affichage de l'onglet 'ajouter' */
    navigationAjouter.on( 'click', function () {
        reinitialiserOnglets();
        ongletAjouter.show();
        ongletOuvrir.addClass( 'ongletActif' );
    })

    /* Affichage de l'onglet 'reglages' */
    navigationReglages.on( 'click', function () {
        reinitialiserOnglets();
        ongletReglages.show();
        ongletOuvrir.addClass( 'ongletActif' );
    })
    
    /* Scroll */
    navigation.on( 'click', function () {
        scrollQte = $( this ).attr( 'valeur' ) * TAILLE_Y;
        window.scrollBy( { top: scrollQte, behavior: 'smooth'} );
    })
   
    /* Mise a jour automatique de la progression lorsque l'utilisateur progresse dans la page */
    $ ( window ).scroll( function () {
        $( '#progression' ).text = window.pageYOffset;
    })

    /* Reglages par defaut */
    let reglages = {
        'langue' : 'fr',
        'font-family' : 'Arial',
        'font-size' : '1.25em',
        'line-height' : 2,
        'word-spacing' : '0.25em',
        'text-align' : 'left',
        'background-color' : '#cccccc',
        'color' : '#000000',
        'theme' : 'jour'
    };

    /* Charger les preferences si elles existent */
    function chargerPreferences () {
        let clefs = Object.keys(reglages);

        for( let i = 0 ; i < clefs.length ; i++ ) {
            if( localStorage.getItem( clefs[i]) ) {
                reglages[clefs[i]] = localStorage.getItem( clefs[i] );
            }
        }
    }

    /* Sauvegarder les preferences lorsqu'elles sont modifiees */
    function sauvegarderPreferences () {
        let clefs = Object.keys(reglages);

        for( let i = 0 ; i < clefs.length ; i++ ) {
            localStorage.setItem(clefs[i], reglages[clefs[i]]);
        }
    }

    /*  Definir le theme de la page en se basant sur les preferences de l'utilisateur
        Cette fonction ne s'execute que la premiere fois ou si l'utilisateur a efface ses preferences.
        Normalement la page utilise le theme definit par l'utilisateur dans les preferences.
    */
    function definirTheme () {
        let themeSombre = window.matchMedia( '(prefers-color-scheme: dark)' ).matches;
        if ( themeSombre ) {
            reglages['theme'] = 'nuit';
            reglages['color'] = '#cccccc'; 
            reglages['background-color'] = '#373737';
        }
        
        else {
            reglages['theme'] = 'jour';
            reglages['color'] = '#000000'; 
            reglages['background-color'] = '#cccccc';
        }
    }

    /* Mettre a jour le CSS de la page selon les reglages */
    function miseAJourInterface(){
        /* CSS de base */
        for( propriete in reglages ) {
            $( 'main' ).css( propriete, reglages[propriete] );
            $( '#pagePrevisualisation' ).css( propriete, reglages[propriete] );
        }

        /* Changement du theme */
        switch ( reglages['theme'] ) {
            case 'jour':
                $( ':root' ).css( '--couleurA', '#ffffff' );
                $( ':root' ).css( '--couleurB', '#808080' );
                $( ':root' ).css( '--couleurC', '#cccccc' );
                break;

            case 'nuit':
                $( ':root' ).css( '--couleurA', '#cccccc' );
                $( ':root' ).css( '--couleurB', '#373737' );
                $( ':root').css( '--couleurC', '#464646' );
                break;

            case 'hc':
                $( ':root' ).css( '--couleurA', '#ffffff' );
                $( ':root' ).css( '--couleurB', '#000000' );
                $( ':root' ).css( '--couleurC', '#000000' );
                break;

            default:
                $( ':root' ).css( '--couleurA', '#ffffff' );
                $( ':root' ).css( '--couleurB', '#808080' );
                $( ':root' ).css( '--couleurC', '#cccccc' );
                break;
        }

        /* Mise a jour de la langue */        
        switch ( reglages['langue'] ) {
            case 'fr':
                chargerTraductions ( TRADUCTION_FR ) ;
                break;

            case 'en':
                chargerTraductions ( TRADUCTION_EN ) ;
                break;

            default:
                chargerTraductions ( TRADUCTION_EN ) ;
                break;
        }

        /*  Mise a jour de la hauteur de <main>
            Ceci est necessaire car miseAJourInterface() peut influencer
            la hauteur de <main> (par la taille du texte)
        */
        tailleConteneurLivre();

        /* Sauvegarde des preferences */
        sauvegarderPreferences();
    }

    /* Langue (tutoriel) */
    $( '#selectionLangue div' ).on( 'click', function () {
        reglages['langue'] = $( this ).attr( 'valeur' );
        miseAJourInterface();
        $( '#selectionLangue').hide();
    })

    /* Langue */
    $( '#langue .reglageChoix div' ).on( 'click', function () {
        reglages['langue'] = $( this ).attr( 'valeur' );
        miseAJourInterface();
    })

    /* Theme */
    $( '#theme .reglageChoix div' ).on( 'click', function () {
        reglages['theme'] = $( this ).attr( 'valeur' );

        /* Modification des schema de couleurs pour la lecture (=/= interface) */
        switch ( reglages['theme'] ) {
            case 'jour':
                reglages['color'] = '#000000'; 
                reglages['background-color'] = '#cccccc'; 
                break;

            case 'nuit':
                reglages['color'] = '#cccccc'; 
                reglages['background-color'] = '#373737'; 
                break;

            case 'hc':
                reglages['color'] = '#ffffff'; 
                reglages['background-color'] = '#222222'; 
                break;

            default:
                break;
        }

        miseAJourInterface();
    })

    /* Police d'ecriture */
    $( '#police .reglageChoix div' ).on( 'click', function () {
        reglages['font-family'] = $( this ).attr( 'valeur' );
        miseAJourInterface();
    })

    /* Taille du texte */
    $( '#taille .reglageChoix div' ).on( 'click', function () {
        reglages['font-size'] = ( $( this ).attr( 'valeur' ) + 'em' );
        miseAJourInterface();
    })

    /* Espacement entre les lignes */
    $( '#lineHeight' ).on( 'change', function () {
        /* On divise par 4 pour avoir un pas de 0.25 ce qui donne des valeurs finales allant de 1 a 5. */
        reglages['line-height'] = ( $( this ).val() / 4 );
        miseAJourInterface();
    })

    /* Espacement entre les mots */
    $( '#wordSpacing' ).on( 'change', function () {
        /* On divise par 4 pour avoir un pas de 0.25 ce qui donne des valeurs finales allant de 0.25 a 2em. */
        reglages['word-spacing'] = ( $( this ).val() / 4 + 'em' );
        miseAJourInterface();
    })

    /* Alignement du texte */
    $( '#alignement .reglageChoix div' ).on( 'click', function () {
        reglages['text-align'] = $( this ).attr( 'valeur' );
        miseAJourInterface();
    })

    /* Couleur du texte */
    $( '#couleurTexte' ).on( 'change', function () {
        reglages['color'] = $( this ).val();
        miseAJourInterface();
    })

    /* Couleur de l'arriere-plan */
    $( '#couleurFond' ).on( 'change', function () {
        reglages['background-color'] = $( this ).val();
        $( 'body' ).css( 'background-color', $( this ).val() ); /* S'applique aussi a <body> */
        miseAJourInterface();
    })

    /* Calcul de la hauteur de #conteneurLivre */
    function tailleConteneurLivre () {
        taillePageY = parseInt( $( '#conteneurLivre' ).css( 'height' ) );
    }

    /* Affichage de la progression */
    function miseAJourProgression () {
        positionY = Math.ceil( ( parseInt( window.pageYOffset ) / taillePageY ) * 100 ); /* Calcul du pourcentage */
        positionY = positionY <= 100 ? positionY : 100; /* On ramene la valeur a 100 si elle depasse */
        $( '#progression' ).text( positionY );
    }

    /* Traitement du texte entre */
    function traitementTexte () {
        /* Remplacement des < et > */
        texteUtilisateur = texteUtilisateur.replaceAll( '<', '&lt;' );
        texteUtilisateur = texteUtilisateur.replaceAll( '>', '&gt;' );

        /* Simple mise en forme de texte de type Markdown (gras, italique) */
        texteUtilisateur = texteUtilisateur.replaceAll( /_([^_]+)_/g, "<span class='italique'>$1</span>" ); /* Italique : _ */
        texteUtilisateur = texteUtilisateur.replaceAll( /\*{3}([^\*]]{1,})\*{3}/g, "<span class='gras'>$1</span>" ); /* Gras/Emphase : *** */
        texteUtilisateur = texteUtilisateur.replaceAll( /\*{2}([^\*]{1,})\*{2}/g, "<span class='gras'>$1</span>" ); /* Gras/Emphase : ** */
        texteUtilisateur = texteUtilisateur.replaceAll( /\*([^\*]{1,})\*/g, "<span class='italique'>$1</span>" ); /* Italique : * */

        /* Remplacement de 2+ retour a la ligne par un 2 <br> et une tabulation */
        texteUtilisateur = texteUtilisateur.replaceAll( /(\r\n|\r|\n){2,}/g, "<br><br><span class='tabulation'></span>" );

        /* Remplacement de 1 retour a la ligne par un espace */
        texteUtilisateur = texteUtilisateur.replaceAll( /(\r\n|\r|\n)/g, ' ' );

        /* Ajout d'une tabulation au debut du premier paragraphe */
        texteUtilisateur = "<span class='tabulation'></span>" + texteUtilisateur;
    }

    /* Procedure de mise en forme du texte */
    function procedureMiseEnForme () {
        texteUtilisateur = $( 'textarea' ).val();
        traitementTexte();
        informationDemarrage.hide();
        conteneurLivre.html( texteUtilisateur );
        tailleConteneurLivre();
        miseAJourProgression();
        menu.hide();
    }

    /* Charger le texte du fichier que l'utilisateur a choisi */
    $( '#livreUtilisateur' ).on( 'change', function() {
        let fichier = this.files[0];
        let lecteur = new FileReader();

        lecteur.addEventListener( 'load', function ( e ) {
            /* Sauvegarde du texte dans <textarea> */
            $( '#zoneInteractive textarea' ).val( e.target.result );
        });

        lecteur.readAsText( fichier );

        /* On montre l'onglet */
        reinitialiserOnglets();
        ongletAjouter.show();
        ongletOuvrir.addClass( 'ongletActif' );
    })

    /* Ajout du texte dans #conteneurLivre apres l'avoir formatte */
    boutonAjouter.on( 'click', procedureMiseEnForme );

    /* Mise a jour constante de la progression quand l'utilisateur avance */
    $( window ).on( 'scroll', function ( ) {
        miseAJourProgression();
    })

    /* Charger les traductions */
    function chargerTraductions ( traductions=TRADUCTION_FR ) {
        let clefs = Object.keys(traductions);

        for( let i = 0 ; i < clefs.length ; i++ ) {
            $( '#' + clefs[i]).text(traductions[clefs[i]]);
        }
    }

    chargerTraductions ();

    /* Tutoriel */
    let messageNo = 0;
    let messageMax = TRADUCTION_FR['texteTutoriel'].length; /* Même longueur pour les autres langues */

    function messageSuivant () {
        let contenu;

        switch ( reglages['langue'] ) {
            case 'fr':
                contenu = TRADUCTION_FR['texteTutoriel'][messageNo];
                break;

            case 'en':
                contenu = TRADUCTION_EN['texteTutoriel'][messageNo];
                break;

            default:
                contenu = TRADUCTION_EN['texteTutoriel'][messageNo];
                break;
        }

        if(contenu){
            $( '#tutoriel #instructions #texte' ).html( contenu[0] );
            if( contenu[1] ){
                $( '#tutoriel #instructions #image' ).html( "<img src='images/" + contenu[1] + "' alt=''/>" );
            }
            else{
                $( '#tutoriel #instructions #image' ).html('');
            }
        }

        else{
            $( '#tutoriel' ).hide();
        }

        messageNo++;
    }

    $( '#boutonPasser').on('click', function(){
        $( '#tutoriel').hide();
    })

    $( '#boutonSuivant').on('click', function(){
        messageSuivant();
    })

    /* Fermeture du menu et des onglets au chargement de la page */
    menu.hide();
    fermerOnglets();

    /* Definition du theme */
    definirTheme();

    /* Charger les preferences */
    chargerPreferences();

    /* Application du CSS par defaut */
    miseAJourInterface();

    /* Calculer la hauteur du livre */
    tailleConteneurLivre();
})
