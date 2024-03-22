import { Table2 } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full h-16  text-background bg-foreground flex items-center p-4 gap-2 shadow-lg">
        <Table2  size={24}/>
        <h1 className="font-medium text-2xl h-full leading-8">Trello</h1>
    </header>
  )
}

export default Header