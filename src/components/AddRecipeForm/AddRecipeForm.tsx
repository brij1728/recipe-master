'use client';

import React, { useState } from 'react';

export const AddRecipeForm: React.FC = () => {
  const [ingredients, setIngredients] = useState<string[]>(['']);
  const [steps, setSteps] = useState<string[]>(['']);

  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };

  const handleRemoveIngredient = (index: number) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  const handleIngredientChange = (index: number, value: string) => {
    const newIngredients = ingredients.map((ingredient, i) =>
      i === index ? value : ingredient,
    );
    setIngredients(newIngredients);
  };

  const handleAddStep = () => {
    setSteps([...steps, '']);
  };

  const handleRemoveStep = (index: number) => {
    const newSteps = steps.filter((_, i) => i !== index);
    setSteps(newSteps);
  };

  const handleStepChange = (index: number, value: string) => {
    const newSteps = steps.map((step, i) => (i === index ? value : step));
    setSteps(newSteps);
  };

  return (
    <form className='space-y-4 p-4 bg-white shadow-md rounded-md'>
      <div>
        <label
          htmlFor='title'
          className='block text-sm font-medium text-gray-700'
        >
          Title
        </label>
        <input
          type='text'
          id='title'
          name='title'
          className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
        />
      </div>
      <div>
        <label
          htmlFor='category'
          className='block text-sm font-medium text-gray-700'
        >
          Category
        </label>
        <select
          id='category'
          name='category'
          className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
        >
          <option>Select category</option>
          {/* Add more categories here */}
        </select>
      </div>
      <div>
        <label
          htmlFor='description'
          className='block text-sm font-medium text-gray-700'
        >
          Description
        </label>
        <textarea
          id='description'
          name='description'
          className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
        />
      </div>
      <div>
        <label
          htmlFor='imageURL'
          className='block text-sm font-medium text-gray-700'
        >
          Image URL
        </label>
        <input
          type='text'
          id='imageURL'
          name='imageURL'
          className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
        />
      </div>
      <div>
        <label
          htmlFor='cookingTime'
          className='block text-sm font-medium text-gray-700'
        >
          Cooking Time (In Minutes)
        </label>
        <input
          type='number'
          id='cookingTime'
          name='cookingTime'
          className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
        />
      </div>
      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Ingredients
        </label>
        {ingredients.map((ingredient, index) => (
          <div key={index} className='flex items-center mt-2'>
            <input
              type='text'
              value={ingredient}
              onChange={e => handleIngredientChange(index, e.target.value)}
              className='block w-full p-2 border border-gray-300 rounded-md'
              placeholder={`Ingredient ${index + 1}`}
            />
            <button
              type='button'
              onClick={() => handleRemoveIngredient(index)}
              className='ml-2 text-red-500'
            >
              Delete
            </button>
          </div>
        ))}
        <button
          type='button'
          onClick={handleAddIngredient}
          className='mt-2 text-blue-500'
        >
          + Add Ingredient
        </button>
      </div>
      <div>
        <label className='block text-sm font-medium text-gray-700'>Steps</label>
        {steps.map((step, index) => (
          <div key={index} className='flex items-center mt-2'>
            <textarea
              value={step}
              onChange={e => handleStepChange(index, e.target.value)}
              className='block w-full p-2 border border-gray-300 rounded-md'
              placeholder={`Step ${index + 1}`}
            />
            <button
              type='button'
              onClick={() => handleRemoveStep(index)}
              className='ml-2 text-red-500'
            >
              Delete
            </button>
          </div>
        ))}
        <button
          type='button'
          onClick={handleAddStep}
          className='mt-2 text-blue-500'
        >
          + Add Step
        </button>
      </div>
      <button
        type='submit'
        className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-md'
      >
        Create Recipe
      </button>
    </form>
  );
};
