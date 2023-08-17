const admin = require('firebase-admin');


module.exports = class UsuarioController {

    static async findByUser(req, res) {
        try {
            const userRef = admin.firestore().collection('TESTE');
            const snapshot = await userRef.get();
            const usuarios = snapshot.docs.map(doc => ({
                ...doc.data(),
                uid: doc.id
            }));
            res.status(200).json(usuarios);
        } catch (error) {
            console.error('Erro ao obter usuários:', error);
            res.status(500).json({ error: 'Erro ao obter usuários' });
        }
    }

    static async createUser(req, res) {
        try {
            const userJson = {
                nome: req.body.nome,
                idade: req.body.idade,
                sexo: req.body.sexo
            };
            const usersDb = admin.firestore().collection('TESTE')
            const response = await usersDb.add(userJson);
            res.send(response);
        } catch (error) {
            res.send(error)
        }

    }

    static async updateUser(req, res) {
        try {
            const uid = req.params.id
            const userJson = {
                nome: req.body.nome,
                idade: req.body.idade,
                sexo: req.body.sexo
            };
            const usersDb = admin.firestore().collection('TESTE').doc(uid)
            const response = await usersDb.set(userJson, { merge: true });
            res.json(response);
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
            res.status(500).json({ error: 'Erro ao atualizar usuário' });
        }

    }

    static async deleteUser(req, res) {
        try {
            const uid = req.params.id
            const userDb = admin.firestore().collection('TESTE').doc(uid)
            const response = await userDb.delete();
            res.json(response);
        } catch (error) {
            console.error('Erro ao deletar usuário:', error);
            res.status(500).json({ error: 'Erro ao deletar usuário' });
        }
    }


    static async loginUser(req, res) {
        const nome = req.body.nome;
        const idade = req.body.idade;

        try {
            const userQuerySnapshot = await admin.firestore().collection('TESTE').where('nome', '==', nome).get();
            const userDoc = userQuerySnapshot.docs[0];
            const user = userDoc.data();

            if (userQuerySnapshot.empty) {
                res.send({ msg: "Usuário não registrado!" });
                return;
            }
            if (user.idade !== idade) {
                res.send({ msg: "Idade incorreta" });
                return;
            }

            const uid = userDoc.id;
            const customToken = await admin.auth().createCustomToken(uid);
            
            res.send({ msg: "Usuário logado", customToken });

        } catch (error) {
            console.error(error);
            res.send({ msg: "Erro ao fazer login" });
        }
    }

}