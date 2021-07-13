import DropDown from "./DropDown";

const items = [
{
  id:1 ,
  name: 'English',
},
{
  id:2 ,
  name: 'Русский',
},
{
  id:3 ,
  name: 'Deutsche',
},
{
  id:4 ,
  name: 'Italiano',
},
{
  id:5 ,
  name: '日本語',
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
