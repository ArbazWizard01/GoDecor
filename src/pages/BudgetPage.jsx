import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Calculator from '../components/budget/Calculator';

const BudgetPage = () => {
  return (
    <MainLayout>
      <Calculator />
    </MainLayout>
  );
};

export default BudgetPage;