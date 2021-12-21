

    console.log("before function calling")
    async   function  hello(){
            console.log("inside hello function calling")
            const response=await fetch("https://api.github.com/users");
            console.log(response)
            const user=await response.json();
            // console.log(user); 

            return user
        }

        console.log("bfore calling hello function bcoz  async await")
        let a =hello();
        console.log("after function calling")
        console.log(a)
        a.then((data)=>console.log(data))

        // for print data
        // a.then((data)=>{
        //     for(x in data){
        //         var a1=` login: ${data[x].login} <h6> node id: ${data[x].node_id}<h6/><br>`;
        //         document.write(a1)
        //     }
        // })

        console.log("this is last line of js excetuted")


    //  var x=["Ayaan","kazi","parbhani","maharashtra","India"];

    //  let newArray=x.map((cValue)=>{
    //      return cValue
    //  })
    //  console.log(newArray[0])
    //  document.write(newArray[0])



    