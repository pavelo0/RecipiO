import { Button } from '@/components/ui/button';
import { main } from './api/groq';
import { Input } from './components/ui/input';
import { useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const App = () => {
  const [isRecipeReady, setIsRecipeReady] = useState<boolean>(false);
  const [recipe, setRecipe] = useState<string>('');
  const productsInputRef = useRef<HTMLInputElement>(null);
  const cuisineInputRef = useRef<HTMLInputElement>(null);
  async function handleClick() {
    if (productsInputRef.current && cuisineInputRef.current) {
      setIsRecipeReady(true);
      const productsString = productsInputRef.current.value;
      const cuisineString = cuisineInputRef.current.value;
      const recipeRes = JSON.stringify(
        await main(productsString, cuisineString)
      );
      setRecipe(recipeRes);
    }
  }

  return (
    <>
      <div className="mb-4 flex w-full flex-col justify-between gap-8 border-4 border-gray-300 bg-gray-700 p-10 align-middle">
        <h1 className="text-center text-2xl font-bold text-white">
          Generate a recipe
        </h1>
        <div className="flex flex-col gap-3">
          <Input
            ref={productsInputRef}
            placeholder="What products should be in the dish?"
          />
          <Input
            ref={cuisineInputRef}
            placeholder="What products should be in the dish?"
          />
        </div>
        <Button onClick={handleClick}>Generate</Button>
      </div>
      {isRecipeReady ? (
        <div className="flex w-full flex-col justify-between gap-8 border-2 border-black p-10 align-middle">
          <h2 className="text-center text-2xl font-bold">Your recipe</h2>
          <ReactMarkdown>{recipe.length === 0 ? '' : recipe}</ReactMarkdown>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default App;
