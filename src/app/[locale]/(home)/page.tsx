import classes from '@/styles/modules/Home.module.css';

export default async function Page() {
  await new Promise(resolve => setTimeout(resolve, 10000)); // ← задержка

  return (
    <div className={classes.home}>
      <h1>Home Page</h1>
    </div>
  );
}
