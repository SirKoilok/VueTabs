// store/index.js
 
import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        navigation: [
            {
                title: "Projects",
                open: false,
                subnav: [
                    {
                        title: "vue.js",
                        open: false,
                        subnav: [
                            { 
                                title: "we",
                                open: false,
                                subnav: [
                                    {title: "go"}
                                ]
                            }
                        ]

                    }
                ]
            },
            {
                title: "excuse-moi",
                open: false,
                subnav: [
                    { title: "Number one"}
                ]
            }
        ],
        todosarray: [
            {
              id: "One",
              title: "Todo Item One",
              completed: false
            },
            {
              id: "Two",
              title: "Todo Two",
              completed: false
            },
            {
              id: "Three",
              title: "Todo Three",
              completed: false
            }
        ],
        tab: {
            name: 'Two'
        },
        pagetitle: 'Tabs in vuex'
    },
    mutations: {
        CHANGE_TAB: (state, newName) => {
            state.tab.name = newName
        },
        ADD_TODO: (state, todoname) => {
            state.todosarray.push({
                title: todoname,
                completed: false,
                id: todoname
            })
        },
        TOGGLE_COMPLETE: (state, todoid) => {
            var objToUpdate = state.todosarray.findIndex((obj => obj.id == todoid));
            state.todosarray[objToUpdate].completed = !state.todosarray[objToUpdate].completed;
        },
        DELETE_TODO: (state,todeleteid) => {
            state.todosarray = state.todosarray.filter(obj => obj.id !== todeleteid)
        }
    },
    getters: {
        navigation: state => {
            return state.navigation;
        },
        todosarray: state => {
            return state.todosarray;
        }
    }
});