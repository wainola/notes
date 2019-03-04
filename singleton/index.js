const Singleton = ((name, age) => {
    let instance;

    function initializer(name, age){
        let n = name;
        let a = age;

        return {
            getName: async function(){
                return n;
            },
            getAge: async function(){
                return a;
            }
        }
    }

    return {
        getInstance: function(name, age){
            if(!instance){
                instance = new initializer(name, age);
                return instance;
            }
            return instance;
        }
    }
})()

const s1 = Singleton.getInstance('nicolas', 31);
const s2 = Singleton.getInstance('camilo', 29)