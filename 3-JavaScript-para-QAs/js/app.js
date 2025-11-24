const LIST = [
    {
        id: 1,
        nome: 'Mestre Yoda',
        avatar: 'imagens/yoda.png',
    },

    {
        id: 2,
        nome: 'Luke Skywalker',
        avatar: 'imagens/luke.png',
    },

    {
        id: 3,
        nome: 'Princesa Leia',
        avatar: 'imagens/leia.png',
    },

    {
        id: 4,
        nome: 'Han solo',
        avatar: 'imagens/hansolo.png',
    },

    {
        id: 5,
        nome: 'Dearth Vader',
        avatar: 'imagens/vader.png',
    },

    {
        id: 6,
        nome: 'Chewbacca',
        avatar: 'imagens/chewbacca.png',
    },

    {
        id: 7,
        nome: 'R2D2',
        avatar: 'imagens/r2d2.png',
    },


    {
        id: 8,
        nome: 'C3pO',
        avatar: 'imagens/c3po.png',
    }


]

const app = new Vue({
    el: '#app',
    data: {
        title: 'Star Wars Lego',
        userName: 'Fabrício!',
        originalCharacters: LIST, // Lista completa (fonte de verdade)
        characters: LIST,        // Lista exibida na tela (será filtrada)
        searchName: ''           // Variável vinculada ao campo de busca
    },
    methods: {
        like(userName) {
            alert(`o personagem ${userName} recebeu um like!`);
        },

        remove(id) {
            // Cria uma NOVA lista que exclui o item com o ID fornecido
            const result = this.originalCharacters.filter((item) => {
                return item.id !== id;
            });

            // 1. Atualiza a lista original (Torna a exclusão permanente)
            this.originalCharacters = result;

            // 2. Atualiza a lista exibida na tela (Reflete a mudança imediatamente)
            this.characters = result; 
            
            // Opcional: Limpa o campo de busca
            this.searchName = '';
        },

        search() {
            // 1. VALIDAÇÃO DE CAMPO OBRIGATÓRIO
            if (this.searchName.trim() === '') {
                // Se o campo estiver vazio, exibe o alerta obrigatório
                alert('O preenchimento é obrigatório!');

                // Reseta a lista exibida para a original (caso estivesse filtrada)
                this.characters = this.originalCharacters;
                return; // Para a função aqui
            }

            // 2. FILTRAGEM (Só executa se o campo NÃO estiver vazio)
            const result = this.originalCharacters.filter((item) => {
                // Filtra pela lista original, usando busca flexível (minúsculas)
                const searchLower = this.searchName.toLowerCase();
                const itemNomeLower = item.nome.toLowerCase();
                return itemNomeLower.includes(searchLower);
            });

            // 3. VERIFICAÇÃO DE RESULTADO
            if (result.length === 0) {
                alert('Nenhum registro encontrado.');
            }

            // 4. ATUALIZA A LISTA NA TELA
            this.characters = result;
        }
    }
});