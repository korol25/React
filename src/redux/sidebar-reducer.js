let initialState = ({
        sidebar: [
            { id: 1, name: 'Vova', src: 'https://avatarfiles.alphacoders.com/865/86573.jpg' },
            { id: 2, name: 'Oksana', src: 'https://st2.depositphotos.com/1006318/5909/v/450/depositphotos_59094623-stock-illustration-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0-%D0%BE%D0%BB%D0%B8%D1%86%D0%B5%D1%82%D0%B2%D0%BE%D1%80%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B6%D0%B5%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BF%D0%BE%D0%BB%D0%B0.jpg' },
            { id: 3, name: 'Sergey', src: ' https://st2.depositphotos.com/1006318/5909/v/450/depositphotos_59094701-stock-illustration-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%BC%D0%B5%D0%BD%D0%B0.jpg' }
        ]
});

const sidebarReducer = (state = initialState,action) => {

    return state;
}
export default sidebarReducer;