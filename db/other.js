const db = {
    utilisateurs: [
        {
            id: 1,
            nom: "Doe",
            prenom: "John",
            image: "image1.jpg",
            email: "john.doe@example.com",
            password: "$2a$10$G7XSr2UvfcaTleW4EMv7RuA98bj92gRTSE1u11zqpCBIGCm8cYLNO",
            role: "tailleur"
        },
        {
            id: 2,
            nom: "Smith",
            prenom: "Jane",
            image: "image2.jpg",
            email: "jane.smith@example.com",
            password: "$2a$10$G7XSr2UvfcaTleW4EMv7RuA98bj92gRTSE1u11zqpCBIGCm8cYLNO",
            role: "user"
        },
        {
            id: 3,
            nom: "Brown",
            prenom: "Bob",
            image: "image3.jpg",
            email: "bob.brown@example.com",
            password: "$2a$10$G7XSr2UvfcaTleW4EMv7RuA98bj92gRTSE1u11zqpCBIGCm8cYLNO",
            role: "user"
        },
    ],
    posts: [
        {
            id: 1,
            image: "post_image1.jpg",
            description: "A beautiful fabric post",
            nbrVue: 100,
            nbrPartage: 10,
            etat: "ACTIVER",
            utilisateurId: 1
        },
        {
            id: 2,
            image: "post_image2.jpg",
            description: "An amazing fabric design",
            nbrVue: 150,
            nbrPartage: 20,
            etat: "ACTIVER",
            utilisateurId: 1
        },
        {
            id: 3,
            image: "post_image3.jpg",
            description: "A stunning fabric piece",
            nbrVue: 200,
            nbrPartage: 30,
            etat: "DESACTIVER",
            utilisateurId: 1
        },
    ],
    tissus: [
        {
            id: 1,
            libelle: "Cotton"
        },
        {
            id: 2,
            libelle: "Silk"
        },
        {
            id: 3,
            libelle: "Wool"
        },
    ],
    notes: [
        {
            id: 1,
            note: 5,
            utilisateurId: 1,
            utilisateurNoteId: 2
        },
        {
            id: 2,
            note: 4,
            utilisateurId: 1,
            utilisateurNoteId: 3
        },
        {
            id: 3,
            note: 3,
            utilisateurId: 1,
            utilisateurNoteId: 1
        },
    ],
    reactions: [
        {
            id: 1,
            type: "LIKE",
            utilisateurId: 1,
            postId: 1
        },
        {
            id: 2,
            type: "DISLIKE",
            utilisateurId: 2,
            postId: 2
        },
        {
            id: 3,
            type: "LIKE",
            utilisateurId: 3,
            postId: 3
        },
    ],
    commentaires: [
        {
            id: 1,
            texte: "Nice post!",
            utilisateurId: 1,
            postId: 1
        },
        {
            id: 2,
            texte: "Amazing design!",
            utilisateurId: 2,
            postId: 1
        },
        {
            id: 3,
            texte: "Love this fabric!",
            utilisateurId: 3,
            postId: 1
        },
    ],
    favoris: [
        {
            id: 1,
            date: "2024-07-31",
            utilisateurId: 2,
            postId: 1
        },
        {
            id: 2,
            date: "2024-08-01",
            utilisateurId: 2,
            postId: 2
        },
        {
            id: 3,
            date: "2024-08-02",
            utilisateurId: 3,
            postId: 3
        },
    ],
    liaisons: [
        {
            id: 1,
            type: "FOLLOW",
            utilisateurId: 2,
            utilisateurSuiviId: 1
        },
        {
            id: 2,
            type: "FOLLOW",
            utilisateurId: 1,
            utilisateurSuiviId: 2
        },
        {
            id: 3,
            type: "FOLLOW",
            utilisateurId: 3,
            utilisateurSuiviId: 1
        },
    ],
    signaus: [
        {
            id: 1,
            motif: "Spam",
            utilisateurId: 2,
            utilisateurSignaleId: 1
        },
    ],
    tissuposts: [
        {
            id: 1,
            prix: 20,
            tissuId: 1,
            postId: 1
        },
        {
            id: 2,
            prix: 30,
            tissuId: 2,
            postId: 1
        },
        {
            id: 3,
            prix: 40,
            tissuId: 3,
            postId: 3
        },
    ]
};

export default db;