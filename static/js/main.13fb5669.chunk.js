(this.webpackJsonpmayla_co=this.webpackJsonpmayla_co||[]).push([[0],{57:function(e,t,a){e.exports=a.p+"static/media/1.1.464dfa09.jpg"},58:function(e,t,a){e.exports=a.p+"static/media/1.2.d6d0f92e.jpg"},59:function(e,t,a){e.exports=a.p+"static/media/1.3.180b5c7b.jpg"},61:function(e,t,a){e.exports=a.p+"static/media/couch1.de9ab538.jpg"},62:function(e,t,a){e.exports=a.p+"static/media/couch2.d830b3b6.jpg"},63:function(e,t,a){e.exports=a.p+"static/media/couch3.bc2cb3fb.jpg"},64:function(e,t,a){e.exports=a.p+"static/media/couch4.3e43295a.jpg"},65:function(e,t,a){e.exports=a(86)},70:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),s=a.n(l);a(70),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(6),o=a(13),i=a(94),u=a(25),m="/home",d=r.a.createContext(null),p=function(e){return function(t){return r.a.createElement(d.Consumer,null,(function(a){return r.a.createElement(e,Object.assign({},t,{firebase:a}))}))}},E=d,h=a(8),f=a(31),g=a.n(f),b=(a(71),a(73),{apiKey:"AIzaSyDmG3L3LQhZ1KQhX6t1b-FjIdmEv1ualZ0",authDomain:"react-firebase-d6dd4.firebaseapp.com",databaseURL:"https://react-firebase-d6dd4.firebaseio.com",projectId:"react-firebase-d6dd4",storageBucket:"react-firebase-d6dd4.appspot.com",messagingSenderId:"694944377444"}),v=function e(){var t=this;Object(h.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.user=function(e){return t.db.ref("users/".concat(e))},this.users=function(){return t.db.ref("users")},this.message=function(e){return t.db.ref("messages/".concat(e))},this.messages=function(){return t.db.ref("messages")},g.a.initializeApp(b),this.auth=g.a.auth(),this.db=g.a.database(),this.serverValue=g.a.database.ServerValue},C=p((function(e){var t=e.firebase;return r.a.createElement("button",{className:"sign_out_b",type:"button",onClick:t.doSignOut},r.a.createElement(c.b,{to:"/"},"Sign Out"))})),O=r.a.createContext(null),N=a(10),y=a(12),j=a(11),w=function(e){var t=function(t){Object(y.a)(n,t);var a=Object(j.a)(n);function n(e){var t;return Object(h.a)(this,n),(t=a.call(this,e)).state={authUser:JSON.parse(localStorage.getItem("authUser"))},t}return Object(N.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(t){localStorage.setItem("authUser",JSON.stringify(t)),e.setState({authUser:t})}),(function(){localStorage.removeItem("authUser"),e.setState({authUser:null})}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(O.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),n}(r.a.Component);return p(t)},S=a(15),x=function(e){return function(t){var a=function(a){Object(y.a)(l,a);var n=Object(j.a)(l);function l(){return Object(h.a)(this,l),n.apply(this,arguments)}return Object(N.a)(l,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.auth.onAuthStateChanged((function(a){e(a)||t.props.history.push("/signin")}))}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var a=this;return r.a.createElement(O.Consumer,null,(function(n){return e(n)?r.a.createElement(t,a.props):null}))}}]),l}(r.a.Component);return Object(S.a)(o.e,p)(a)}},k=function(){return r.a.createElement(i.a,{title:"My Account",id:"basic-nav-dropdown"},r.a.createElement(i.a.Item,{as:c.b,to:"/account"},"Profile"),r.a.createElement(i.a.Item,{as:c.b,to:"/cart"},"Cart"),r.a.createElement(C,null))},I=function(){return r.a.createElement(i.a,{title:"My Account",id:"basic-nav-dropdown"},r.a.createElement(u.a.Item,{as:c.b,to:"/signin"},"Sign In"),r.a.createElement(u.a.Item,{as:c.b,to:"/signup"},"Sing Up"))},P=function(){return r.a.createElement(O.Consumer,null,(function(e){return e?r.a.createElement(k,null):r.a.createElement(I,null)}))},A=(a(82),function(){return r.a.createElement("header",{className:"main-navigation text-center"},r.a.createElement("nav",{className:"main-navigation_item "},r.a.createElement("ul",null,r.a.createElement("li",null," ",r.a.createElement(c.c,{to:"/"},"Landing")),r.a.createElement("li",null," ",r.a.createElement(c.c,{to:m},"Home")),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/contactus"},"Contact Us")),r.a.createElement("li",null,r.a.createElement(P,null)))))}),U=function(){return r.a.createElement("header",{className:"main-navigation"},r.a.createElement("nav",{className:"main-navigation_item"},r.a.createElement("ul",null,r.a.createElement("li",null," ",r.a.createElement(c.c,{to:"/"},"Landing")),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/contactus"},"Contact Us")),r.a.createElement("li",null,r.a.createElement(P,null)))))},M=function(){return r.a.createElement("div",null,r.a.createElement(O.Consumer,null,(function(e){return e?r.a.createElement(A,null):r.a.createElement(U,null)})))},G=a(57),_=a.n(G),L=a(58),D=a.n(L),T=a(59),R=a.n(T),W=a(32),z=function(){return r.a.createElement(W.a,{className:"carousel"},r.a.createElement(W.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:_.a,alt:"dogo2"})),r.a.createElement(W.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:D.a,alt:"dogo2"})),r.a.createElement(W.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:R.a,alt:"dogo3"})))},V=function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",null,"MAYLA & CO | PET SUPPLIES "),r.a.createElement("h5",{className:"mt-5"},'Site is a demonstration of my web development abilities. You can input/update information for current user under My Account > Profile.  Add items to the card and create "fake" orders to demonstrate the site\'s functionality. Feel free to go through the steps of creating an order, watch your cart update, proceed with the order and message the seller.'))},H=a(16),F=a(9),B=a(93),Y=a(60),J={username:"",email:"",passwordOne:"",passwordTwo:"",error:null,name:"",address:"",city:"",state:"",zip:""},K=function(e){Object(y.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state,a=t.username,r=t.email,l=t.passwordOne,s=(t.cart,t.name),c=t.address,o=t.city,i=t.state,u=t.zip;t.uid;n.props.firebase.doCreateUserWithEmailAndPassword(r,l).then((function(e){n.props.firebase.user(e.user.uid).set({username:a,email:r,name:s,address:c,city:o,state:i,zip:u}).then((function(){n.setState(Object(F.a)({},J)),n.props.history.push(m)})).catch((function(e){n.setState({error:e})}))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(H.a)({},e.target.name,e.target.value))},n.state=Object(F.a)({},J),n}return Object(N.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.passwordOne,l=e.passwordTwo,s=e.error,c=n!==l||""===n||""===a||""===t;return r.a.createElement("div",null,r.a.createElement(B.a,{onSubmit:this.onSubmit,className:"container"},r.a.createElement(B.a.Row,null,r.a.createElement(B.a.Group,{as:Y.a,controlId:"formGridUsername"},r.a.createElement(B.a.Control,{name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Username",className:""})),r.a.createElement(B.a.Group,{as:Y.a,controlId:"formGridEmail"},r.a.createElement(B.a.Control,{name:"email",value:a,onChange:this.onChange,type:"text",placeholder:"Email Address",className:""}))),r.a.createElement(B.a.Row,null,r.a.createElement(B.a.Group,{as:Y.a,controlId:"formGridPassword"},r.a.createElement(B.a.Control,{name:"passwordOne",value:n,onChange:this.onChange,type:"password",placeholder:"Password",className:""})),r.a.createElement(B.a.Group,{as:Y.a,controlId:"formGridPassword"},r.a.createElement(B.a.Control,{name:"passwordTwo",value:l,onChange:this.onChange,type:"password",placeholder:"Confirm Password",className:""}))),r.a.createElement("div",{className:"text-center d-flex "},r.a.createElement("button",{className:"btn btn-dark w-25 ",disabled:c,type:"submit",style:{margin:"auto"}},"Sign Up")),s&&r.a.createElement("p",null,s.message)))}}]),a}(n.Component),Z=function(){return r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(c.b,{to:"/signup"},"Sign Up"))},$=Object(o.e)(p(K)),Q=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},"SignUp Form:"),r.a.createElement($,null))},X=a(56),q={email:"",error:null},ee=function(e){Object(y.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state.email;n.props.firebase.doPasswordReset(t).then((function(){n.setState(Object(F.a)({},q))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(H.a)({},e.target.name,e.target.value))},n.state=Object(F.a)({},q),n}return Object(N.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.error,n=""===t;return r.a.createElement("div",null,r.a.createElement("h3",null,"Reset password with Email:"),r.a.createElement("form",{onSubmit:this.onSubmit,className:"d-flex mt-4 mr-2"},r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address",className:"mr-2"}),r.a.createElement(X.a,{variant:"outline-dark",disabled:n,type:"submit"},"Reset My Password"),a&&r.a.createElement("p",null,a.message)))}}]),a}(n.Component),te=function(){return r.a.createElement("p",null,r.a.createElement(c.b,{to:"/pw-forget"},"Forgot Password?"))},ae=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"PasswordForget"),r.a.createElement(ne,null),r.a.createElement(Z,null))},ne=p(ee),re={email:"",password:"",error:null,guestEmail:"guest@gmail.com",guestPassword:"guestguest"},le=function(e){Object(y.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state,a=t.email,r=t.password;n.props.firebase.doSignInWithEmailAndPassword(a,r).then((function(){n.setState(Object(F.a)({},re)),n.props.history.push(m)})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.logInGuest=function(e,t){n.props.firebase.doSignInWithEmailAndPassword(e,t).then((function(){n.props.history.push(m)}))},n.onChange=function(e){n.setState(Object(H.a)({},e.target.name,e.target.value))},n.state=Object(F.a)({},re),n}return Object(N.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.password,l=t.error,s=t.guestEmail,c=t.guestPassword,o=""===n||""===a;return r.a.createElement(B.a,{onSubmit:this.onSubmit,className:""},r.a.createElement(B.a.Row,null,r.a.createElement(B.a.Group,{as:Y.a,controlId:"formGridEmail",className:""},r.a.createElement(B.a.Control,{name:"email",value:a,onChange:this.onChange,type:"text",placeholder:"Email Address",className:"form-control flex-grow-1"})),r.a.createElement(B.a.Group,{as:Y.a,controlId:"formGridPassword "},r.a.createElement(B.a.Control,{name:"password",value:n,onChange:this.onChange,type:"password",placeholder:"Password",className:"form-control"}))),r.a.createElement("div",{className:"d-flex text-center",style:{margin:"auto"}},r.a.createElement(X.a,{disabled:o,type:"submit",className:"sendEmail mb-1 flex-grow-1 mr-1 w-50",variant:"outline-dark"},"Sign In"),r.a.createElement(X.a,{type:"submit",className:"sendEmail mb-1 ml-1 w-50",variant:"outline-dark",onClick:function(){return e.logInGuest(s,c)}},"Continue as guest")),l&&r.a.createElement("p",null,l.message))}}]),a}(n.Component),se=Object(S.a)(o.e,p)(le),ce=function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",null,"Sign In"),r.a.createElement(se,null),r.a.createElement(te,null),r.a.createElement(Z,null))},oe=a(91),ie=a(61),ue=a.n(ie),me=a(62),de=a.n(me),pe=a(63),Ee=a.n(pe),he=a(64),fe=a.n(he),ge=a(95),be=function(e){Object(y.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).addToCart=function(e){var t;n.setState({cart:{product:e}},(function(){console.log(n.state.cart)}));var a=null===(t=n.props.firebase.auth)||void 0===t?void 0:t.currentUser;n.props.firebase.user(a.uid+"/cart").push(Object(F.a)({},e))},n.state={cart:[],products:[{name:"Dog Bed #1",product_description:"Great couch for small dogs.",price:75.99,image:ue.a,id:"1"},{name:"Dog Bed #2",product_description:"Good couch for medium dogs.",price:85.99,image:de.a,id:"2"},{name:"Dog Bed #3",product_description:"Make your pup fly.",price:95.99,image:Ee.a,id:"3"},{name:"Dog Bed #4",product_description:"Perfect for large dogs.",price:105.99,image:fe.a,id:"4"}]},n}return Object(N.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(O.Consumer,null,(function(t){return r.a.createElement("div",{className:"card-box container"},e.state.products.map((function(a,n){return r.a.createElement(ge.a,{className:"text-center card mb-4",key:n},r.a.createElement(ge.a.Body,null,r.a.createElement("div",{className:"card_image_div"},r.a.createElement(ge.a.Img,{variant:"top",src:a.image,className:"card-img"})),r.a.createElement(ge.a.Title,null,r.a.createElement("span",null,a.name)," ",r.a.createElement("span",null,"$",a.price)),r.a.createElement(ge.a.Text,null,a.product_description),r.a.createElement(X.a,{variant:"dark",className:"",onClick:function(){return e.addToCart(a,t)}},"Add to Cart")))})))}))}}]),a}(n.Component),ve=Object(S.a)(o.e,p)(be),Ce=x((function(e){return!!e}))((function(){return r.a.createElement(O.Consumer,null,(function(e){return r.a.createElement("div",{className:""},r.a.createElement(ve,null))}))})),Oe=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",null,"Home Page"),r.a.createElement("h4",null,"Select an item and press add to cart."),r.a.createElement("p",null,"The Home Page is accessible by signed in user.")),r.a.createElement(oe.a,{className:"container"},r.a.createElement(Ce,null)))},Ne=["Choose...","AL","AK","AS","AZ","AR","CA","CO","CT","DE","DC","FM","FL","GA","GU","HI","ID","IL","IN","IA","KS","KY","LA","ME","MH","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","MP","OH","OK","OR","PW","PA","PR","RI","SC","SD","TN","TX","UT","VT","VI","VA","WA","WV","WI","WY"],ye={loading:!1,error:null,address:"",address2:"",city:"",email:"",name:"",state:"",uid:"",username:"",zip:""},je=function(e){Object(y.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).stateList=Ne.map((function(e,t){return r.a.createElement("option",{key:t},e)})),n.onSubmit=function(e){var t,a=null===(t=n.props.firebase.auth)||void 0===t?void 0:t.currentUser;n.props.firebase.user(a.uid).update({address:n.state.address,address2:n.state.address2,city:n.state.city,email:n.state.email,name:n.state.name,state:n.state.state,username:n.state.username,zip:n.state.zip}),e.preventDefault(),alert("Your profile was updated successfully!")},n.onChange=function(e){n.setState(Object(H.a)({},e.target.name,e.target.value)),console.log(Object(H.a)({},e.target.name,e.target.value))},n.state=Object(F.a)({},ye),n}return Object(N.a)(a,[{key:"componentDidMount",value:function(){var e,t=this;this.setState({loading:!0});var a=null===(e=this.props.firebase.auth)||void 0===e?void 0:e.currentUser;a?this.props.firebase.user(a.uid).on("value",(function(e){var a=e.val();t.setState({loading:!1,address:a.address,address2:a.address2,city:a.city,email:a.email,name:a.name,state:a.state,uid:a.uid,username:a.username,zip:a.zip}),t.setState({loading:!1})})):this.setState({loading:!1})}},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.username,l=t.address,s=t.address2,o=t.city,i=t.email,u=t.state,m=t.zip;return r.a.createElement("div",null,r.a.createElement(B.a,{onSubmit:function(t){return e.onSubmit(t)},className:"container"},r.a.createElement(B.a.Row,null,r.a.createElement(B.a.Group,{as:Y.a,controlId:"formGridName"},r.a.createElement(B.a.Label,null,"Name"),r.a.createElement(B.a.Control,{type:"text",name:"name",onChange:this.onChange,placeholder:"First & Last Name",defaultValue:a})),r.a.createElement(B.a.Group,{as:Y.a,controlId:"formGridUsername"},r.a.createElement(B.a.Label,null,"Username"),r.a.createElement(B.a.Control,{type:"text",name:"username",onChange:this.onChange,placeholder:"Username",defaultValue:n}))),r.a.createElement(B.a.Group,{controlId:"formGridEmail1"},r.a.createElement(B.a.Label,null,"Email"),r.a.createElement(B.a.Control,{name:"email",onChange:this.onChange,placeholder:"Email",defaultValue:i})),r.a.createElement(B.a.Group,{controlId:"formGridAddress1"},r.a.createElement(B.a.Label,null,"Address"),r.a.createElement(B.a.Control,{name:"address",onChange:this.onChange,placeholder:"Street Name & Number",defaultValue:l})),r.a.createElement(B.a.Group,{controlId:"formGridAddress2"},r.a.createElement(B.a.Label,null,"Address 2"),r.a.createElement(B.a.Control,{name:"address2",onChange:this.onChange,placeholder:"Apartment, studio, or floor",defaultValue:s})),r.a.createElement(B.a.Row,null,r.a.createElement(B.a.Group,{as:Y.a,controlId:"formGridCity"},r.a.createElement(B.a.Label,null,"City"),r.a.createElement(B.a.Control,{name:"city",onChange:this.onChange,placeholder:"City",value:o})),r.a.createElement(B.a.Group,{as:Y.a,controlId:"formGridState"},r.a.createElement(B.a.Label,null,"State"),r.a.createElement(B.a.Control,{name:"state",onChange:this.onChange,value:u,as:"select"},this.stateList)),r.a.createElement(B.a.Group,{as:Y.a,controlId:"formGridZip"},r.a.createElement(B.a.Label,null,"Zip"),r.a.createElement(B.a.Control,{name:"zip",onChange:this.onChange,placeholder:"Zip code",value:m}))),r.a.createElement("div",{className:"d-flex justify-content-between mt-2"},r.a.createElement(X.a,{variant:"outline-dark",className:"mb-2 w-25 p-2"},r.a.createElement(c.b,{className:"",to:"/Messages"},"Message History")),r.a.createElement(X.a,{variant:"outline-dark",className:"mb-2 w-25 p-2",type:"submit"},"Submit"),r.a.createElement(X.a,{variant:"outline-dark",className:"mb-2 w-40 p-2"},r.a.createElement(c.b,{to:"/Edit-info"},"Reset Password"),r.a.createElement("br",null)))))}}]),a}(n.Component),we=Object(S.a)(o.e,p)(je),Se=x((function(e){return!!e}))((function(){return r.a.createElement(O.Consumer,null,(function(e){return r.a.createElement("div",{className:""},r.a.createElement("h1",{className:"text-center"},"Profile Information:"),r.a.createElement(we,null))}))})),xe=function(e){Object(y.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={loading:!1,users:[]},n}return Object(N.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.users().on("value",(function(t){var a=t.val(),n=Object.keys(a).map((function(e){return Object(F.a)(Object(F.a)({},a[e]),{},{uid:e})}));e.setState({users:n,loading:!1}),console.log(n)}))}},{key:"componentWillUnmount",value:function(){this.props.firebase.users().off()}},{key:"render",value:function(){var e=this.state,t=e.users,a=e.loading;return r.a.createElement("div",null,r.a.createElement("h1",null,"Admin"),a&&r.a.createElement("div",null,"Loading ..."),r.a.createElement(ke,{users:t}))}}]),a}(n.Component),ke=function(e){var t=e.users;return r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.uid},r.a.createElement("span",null,r.a.createElement("strong",null,"ID:")," ",e.uid),r.a.createElement("span",null,r.a.createElement("strong",null,"E-Mail:")," ",e.email,r.a.createElement("strong",null,"Username")," ",e.name),r.a.createElement("span",null,r.a.createElement("strong",null,"Username:")," ",e.username))})))},Ie=p(xe),Pe=function(e){Object(y.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).cleanCart=function(){var e,t=null===(e=n.props.firebase.auth)||void 0===e?void 0:e.currentUser;n.props.firebase.user(t.uid).update({cart:null})},n.state={error:null,loading:!1,cart:[]},n}return Object(N.a)(a,[{key:"componentDidMount",value:function(){var e,t=this;this.setState({loading:!0});var a=null===(e=this.props.firebase.auth)||void 0===e?void 0:e.currentUser;a?this.props.firebase.user(a.uid+"/cart").on("value",(function(e){var a=e.val();console.log(a),a?t.setState({loading:!1,cart:Object.keys(a).map((function(e){var t=a[e];return Object(F.a)(Object(F.a)({},t),{},{uid:e})}))}):t.setState({loading:!1})})):this.setState({loading:!1})}},{key:"render",value:function(){var e=this,t=this.state,a=t.cart,n=t.loading;return r.a.createElement(O.Consumer,null,(function(t){return r.a.createElement("div",null,n&&r.a.createElement("div",null,"Loading ..."),a.length>0||null!==a?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(X.a,{as:c.b,variant:"dark",onClick:function(){return e.cleanCart()}},"Clean Cart"),r.a.createElement("p",{className:"price text-right"},"Price")," "),r.a.createElement(Ae,{cart:a,className:"container"}," "),r.a.createElement(Me,null)):r.a.createElement("div",{className:"mb-3"},"Cart is empty"))}))}}]),a}(n.Component),Ae=function(e){var t=e.cart;return r.a.createElement("div",null,r.a.createElement("ul",{className:"cart_list"},t.map((function(e){return r.a.createElement(Ue,{key:e.uid,cartItem:e})}))),r.a.createElement("div",null,r.a.createElement("ul",{className:" "},r.a.createElement("li",{className:"total text-right"},"Subtotal (",t.length,"  ",1===t.length?r.a.createElement("span",null,"item"):r.a.createElement("span",null,"items"),") :",r.a.createElement("strong",null," $",t.reduce((function(e,t){return e+t.price}),0))))))},Ue=function(e){var t=e.cartItem;return r.a.createElement("li",{className:"item_li d-flex justify-content-between mb-5 text-center-sm"},r.a.createElement("img",{src:t.image,className:"item_icon",alt:t.name}),r.a.createElement("div",{className:"flex-fill text-left ml-5"},r.a.createElement("h3",{className:""},t.name),r.a.createElement("h5",{className:""},t.product_description)),r.a.createElement("h4",null,"$",t.price," "))},Me=function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement(X.a,{variant:"dark"},r.a.createElement(c.c,{className:"button button-dark",to:"/Checkout"},"Proceed to Checkout")))},Ge=Object(S.a)(o.e,p)(Pe),_e=Object(S.a)(x((function(e){return!!e}))((function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center"},"My Cart:"),r.a.createElement("div",{className:" text-center container"},r.a.createElement("div",null,r.a.createElement(Ge,null))))}))),Le=(a(84),a(92)),De=function(e){Object(y.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).onCreateMessage=function(e,t){n.props.firebase.messages().push({userId:t.uid,name:n.state.name,last_name:n.state.last_name,email:n.state.email,text:n.state.text,createdAt:n.props.firebase.serverValue.TIMESTAMP}),n.setState({text:""}),console.log(Object(H.a)({},e.target.name,e.target.value)),e.preventDefault(),n.props.history.push("/submittedPage")},n.onChange=function(e){n.setState(Object(H.a)({},e.target.name,e.target.value)),console.log(Object(H.a)({},e.target.name,e.target.value))},n.state={name:"",last_name:"",email:"",text:"",error:null,loading:!1,userId:"",messages:[]},n}return Object(N.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.last_name,l=t.email,s=t.text,c=t.error,o=(t.messages,t.loading,""===a||""===n||""===l||""===s);return r.a.createElement(O.Consumer,null,(function(t){return r.a.createElement("div",{className:"text-center"},r.a.createElement(B.a,{onSubmit:function(a){return e.onCreateMessage(a,t)},className:"contactUsForm"},r.a.createElement("h1",null,"Contact Us"),r.a.createElement(Le.a,null,r.a.createElement(Y.a,null,r.a.createElement(B.a.Control,{name:"name",value:a,onChange:e.onChange,placeholder:"First name"})),r.a.createElement(Y.a,null,r.a.createElement(B.a.Control,{name:"last_name",value:n,onChange:e.onChange,placeholder:"Last name"}))),r.a.createElement(Le.a,null,r.a.createElement(Y.a,{className:"mt-2"},r.a.createElement(B.a.Control,{name:"email",value:l,type:"email",onChange:e.onChange,placeholder:"Enter email"}))),r.a.createElement(Le.a,null,r.a.createElement(Y.a,{className:"mt-2"},r.a.createElement(B.a.Control,{name:"text",value:s,onChange:e.onChange,placeholder:"Message",as:"textarea",rows:3}))),r.a.createElement("div",{className:"text-center "},r.a.createElement(X.a,{type:"submit",disabled:o,className:"sendEmail mt-2 ",variant:"outline-dark"},"Send Email")),c&&r.a.createElement("p",null,c.message)))}))}}]),a}(n.Component),Te=Object(S.a)(o.e,p)(De),Re=function(){return r.a.createElement("div",null,r.a.createElement(Te,null))},We=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"MAYLA & CO  | PET SUPPLIES  \xa9 2020",r.a.createElement("span",{className:"icongroup"},r.a.createElement("i",{className:"fa fa-cc-visa"})," ",r.a.createElement("i",{className:"fa fa-cc-mastercard"}))))},ze=function(){return r.a.createElement("div",{className:"subPage"},r.a.createElement("h2",null,"Thank You for your email."),r.a.createElement("h4",null,"We will contact you in 24 hours."),r.a.createElement(c.b,{to:m},"Return to Home Page"),r.a.createElement("br",null),r.a.createElement(c.b,{to:"/Messages"},"Check previous Messages"))},Ve=function(e){Object(y.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state={name:"",last_name:"",email:"",text:"",error:null,loading:!1,userId:"",messages:[]},n}return Object(N.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.messages().on("value",(function(t){var a=t.val();if(a){console.log(a);var n=Object.keys(a).filter((function(e){return a[e].userId===JSON.parse(localStorage.getItem("authUser")).uid})).map((function(e){return Object(F.a)(Object(F.a)({},a[e]),{},{uid:e})}));e.setState({messages:n,loading:!1})}else e.setState({messages:null,loading:!1});console.log(e.state.messages)}))}},{key:"componentWillUnmount",value:function(){this.props.firebase.messages().off()}},{key:"render",value:function(){var e=this.state,t=e.messages,a=e.loading;return r.a.createElement(O.Consumer,null,(function(e){return r.a.createElement("div",null,a&&r.a.createElement("div",null,"Loading ..."),t?r.a.createElement(He,{messages:t}):r.a.createElement("div",null,"There are no messages ..."))}))}}]),a}(n.Component),He=function(e){var t=e.messages;return r.a.createElement("ul",null,t.map((function(e){return r.a.createElement(Fe,{key:e.uid,message:e})})))},Fe=function(e){var t=e.message,a=new Date(t.createdAt);return r.a.createElement("li",null,r.a.createElement("strong",null,t.name," ",t.last_name)," ",r.a.createElement("br",null),"Time: ",a.toLocaleString(),r.a.createElement("br",null),"Message: ",t.text)},Be=Object(S.a)(o.e,p)(Ve),Ye=Object(S.a)(x((function(e){return!!e}))((function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Message History:"),r.a.createElement("div",null,r.a.createElement(Be,null)),r.a.createElement(c.b,{to:"/contactus"},"Go back to Contact Us"))}))),Je={passwordOne:"",passwordTwo:"",error:null},Ke=function(e){Object(y.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state.passwordOne;n.props.firebase.doPasswordUpdate(t).then((function(){n.setState(Object(F.a)({},Je))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(H.a)({},e.target.name,e.target.value))},n.state=Object(F.a)({},Je),n}return Object(N.a)(a,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,a=e.passwordTwo,n=e.error,l=t!==a||""===t;return r.a.createElement("div",null,r.a.createElement("h3",{className:"mt-3"},"Reset password now:"),r.a.createElement("form",{onSubmit:this.onSubmit,className:"d-flex  mr-2"},r.a.createElement("input",{name:"passwordOne",value:t,onChange:this.onChange,type:"password",placeholder:"New Password",className:"mr-2"}),r.a.createElement("input",{name:"passwordTwo",value:a,onChange:this.onChange,type:"password",placeholder:"Confirm New Password",className:"mr-2"}),r.a.createElement(X.a,{variant:"outline-dark",disabled:l,type:"submit"},"Reset My Password"),n&&r.a.createElement("p",null,n.message)))}}]),a}(n.Component),Ze=p(Ke),$e=function(){return r.a.createElement("div",null,r.a.createElement(ne,null),r.a.createElement(Ze,null))},Qe={loading:!1,error:null,address:"",address2:"",city:"",email:"",name:"",state:"",uid:"",username:"",zip:""},Xe=function(e){Object(y.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).state=Object(F.a)({},Qe),n}return Object(N.a)(a,[{key:"componentDidMount",value:function(){var e,t=this;this.setState({loading:!0});var a=null===(e=this.props.firebase.auth)||void 0===e?void 0:e.currentUser;a?this.props.firebase.user(a.uid).on("value",(function(e){var a=e.val();t.setState({loading:!1,address:a.address,addres2:a.address2,city:a.city,email:a.email,name:a.name,state:a.state,uid:a.uid,username:a.username,zip:a.zip}),t.setState({loading:!1})})):this.setState({loading:!1})}},{key:"render",value:function(){var e=this.state,t=e.name,a=(e.username,e.address),n=e.address2,l=e.city,s=(e.email,e.state),o=e.zip;return r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"mx-auto"}," ",r.a.createElement("strong",null,"1. Shipping information:"),r.a.createElement("li",{className:"li_info"},t),r.a.createElement("li",{className:"li_info"},a," ",n),r.a.createElement("li",{className:"li_info"},l,", ",s," ",o)),r.a.createElement("ul",{className:"info_list"}," ",r.a.createElement("strong",null,"2. Payment method:"),r.a.createElement("li",{className:"li_info"},r.a.createElement("i",{className:"fa fa-cc-visa mr-1"})," ",r.a.createElement("strong",{className:"mr-1"}," Visa")," ending 2253"),r.a.createElement("li",{className:"li_info"},r.a.createElement(c.b,{className:"mr-1",to:"/account"},"Billing address: "),"Same as shipping address.")),r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(X.a,{variant:"dark"},r.a.createElement(c.c,{className:"button button-dark ",to:m},"Place Order & Return Home"))))}}]),a}(n.Component),qe=Object(S.a)(o.e,p)(Xe),et=x((function(e){return!!e}))((function(){return r.a.createElement(O.Consumer,null,(function(e){return r.a.createElement("div",{className:""},r.a.createElement("h1",{className:"text-center"},"Checkout"),r.a.createElement("h4",{className:"text-center"},"Please verify information:"),r.a.createElement(qe,null))}))})),tt=w((function(){return r.a.createElement(c.a,{basename:"/mayla-co"},r.a.createElement("div",null,r.a.createElement(M,null),r.a.createElement(z,null),r.a.createElement("div",{className:"main-content"},r.a.createElement(o.a,{exact:!0,path:"/",component:V}),r.a.createElement(o.a,{exact:!0,path:"/signup",component:Q}),r.a.createElement(o.a,{exact:!0,path:"/signin",component:ce}),r.a.createElement(o.a,{exact:!0,path:"/pw-forget",component:ae}),r.a.createElement(o.a,{exact:!0,path:m,component:Oe}),r.a.createElement(o.a,{exact:!0,path:"/account",component:Se}),r.a.createElement(o.a,{exact:!0,path:"/admin",component:Ie}),r.a.createElement(o.a,{exact:!0,path:"/contactus",component:Re}),r.a.createElement(o.a,{exact:!0,path:"/cart",component:_e}),r.a.createElement(o.a,{exact:!0,path:"/submittedPage",component:ze}),r.a.createElement(o.a,{exact:!0,path:"/Messages",component:Ye}),r.a.createElement(o.a,{exact:!0,path:"/Edit-info",component:$e}),r.a.createElement(o.a,{exact:!0,path:"/Checkout",component:et})),r.a.createElement(We,null)))}));a(85);s.a.render(r.a.createElement(E.Provider,{value:new v},r.a.createElement(tt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.13fb5669.chunk.js.map