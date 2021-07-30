import DropDown from "./DropDown";

const items = [
{
  id:"a",
  name: 'English fdfsd',
},
{
  id:"b" ,
  name: 'Русский fdsf ',
},
{
  id:3 ,
  name: 'Deutsche fsd f',
},
{
  id:4 ,
  name: 'Italianof  fs',
},
{
  id:5 ,
  name: '日本語f 2',
},
]

const names = [
  {
    id:1 ,
    name: 'Stive',
  },
  {
    id:2 ,
    name: 'Sven',
  },
  {
    id:3 ,
    name: 'Den',
  },
  {
    id:4 ,
    name: 'Jon',
  },
  {
    id:5 ,
    name: 'Finn',
  },
  ]


function App() {
  return (
    <div className="App">
       <DropDown items={items} title="Country" multiSelect={true}/>
       <DropDown items={names} title="Name" multiSelect={false}/>
       <DropDown items={items} title="Country" multiSelect={true}/>
       <DropDown items={names} title="Name" multiSelect={false}/>
    </div>
  );
}

export default App;
