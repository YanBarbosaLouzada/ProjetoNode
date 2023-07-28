const admin = require('firebase-admin');

module.exports = class UserController{
    static async findByUser(req,res){
        try {
          console.log("Método GET");
        admin.firestore()
            .collection('Usuarios')
            .get()
            .then(snapshot =>{
                const usuarios =snapshot.docs.map(doc=>({
                    ...doc.data(),
                    uid:doc.id
                }))
                res.status(200).json(usuarios);
            })
        } catch (error) {
          console.error('Erro ao obter usuários:', error);
          res.status(500).json({ error: 'Erro ao obter usuários' });
        }
    };

    static async createUser(req, res) {
        try {
          console.log("Método POST");
      
          const novoUsuario = req.body; // Dados do novo usuário vindos do corpo da requisição
      
          // Adicione uma referência à coleção 'Usuarios' no Firestore
          const usuariosRef = admin.firestore().collection('Usuarios');
      
          // Adicione o novo usuário à coleção 'Usuarios' no Firebase Firestore
          const novoUsuarioRef = await usuariosRef.add(novoUsuario);
      
          // Responda com os dados do novo usuário e o ID gerado pelo Firestore
          res.status(201).json({ id: novoUsuarioRef.id, ...novoUsuario });
        } catch (error) {
          console.error('Erro ao adicionar novo usuário:', error);
          res.status(500).json({ error: 'Erro ao adicionar novo usuário' });
        }
    }
    static async updateUser(req, res) {
        try {
            console.log("Método PUT");

            const idUsuario = req.params.id; // ID do usuário a ser atualizado
            const dadosAtualizados = req.body; // Novos dados do usuário vindos do corpo da requisição

            // Verifique se o ID do usuário é válido antes de prosseguir
            if (!idUsuario) {
            return res.status(400).json({ error: 'ID do usuário não fornecido' });
            }
            // Verifique se o usuário existe antes de prosseguir com a atualização
            const usuarioRef = admin.firestore().collection('Usuarios').doc(idUsuario);
            const snapshot = await usuarioRef.get();

            if (!snapshot.exists) {
              return res.status(404).json({ error: 'Usuário não encontrado' });
            }

            // Verifique quais campos foram modificados e atualize apenas os campos alterados
            const usuarioAntigo = snapshot.data();
            const camposAtualizados = {};

            Object.keys(dadosAtualizados).forEach((campo) => {
              if (dadosAtualizados[campo] !== usuarioAntigo[campo]) {
                camposAtualizados[campo] = dadosAtualizados[campo];
              }
            });

            // Se não houver campos atualizados, retorne uma resposta informando que nenhum campo foi alterado
            if (Object.keys(camposAtualizados).length === 0) {
              return res.status(200).json({ message: 'Nenhum campo foi alterado' });
            }

            // Atualize o documento do usuário na coleção 'Usuarios' no Firebase Firestore
      
            await usuarioRef.set(dadosAtualizados, { merge: true });

            // Responda com os dados atualizados do usuário
            res.json({ id: idUsuario, ...dadosAtualizados });
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
            res.status(500).json({ error: 'Erro ao atualizar usuário' });
        }
    }
    static async deleteUser(req, res) {
        try {
          console.log("Método DELETE");
      
          const idUsuario = req.params.id; // ID do usuário a ser excluído
      
          // Verifique se o ID do usuário é válido antes de prosseguir
          if (!idUsuario) {
            return res.status(400).json({ error: 'ID do usuário não fornecido' });
            }
            const usuarioval = admin.firestore().collection('Usuarios').doc(idUsuario);
            const snapshot = await usuarioval.get();

            if (!snapshot.exists) {
              return res.status(404).json({ error: 'Usuário não encontrado' });
            }
      
          // Exclua o documento do usuário da coleção 'Usuarios' no Firebase Firestore
          const usuarioRef = admin.firestore().collection('Usuarios').doc(idUsuario);
          await usuarioRef.delete();
      
          // Responda com uma mensagem de sucesso
          res.json({ message: 'Usuário excluído com sucesso' });
        } catch (error) {
          console.error('Erro ao excluir usuário:', error);
          res.status(500).json({ error: 'Erro ao excluir usuário' });
        }
      }
      
    
    
}