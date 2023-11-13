import Grid from '@/components/grid'

export default function Loading() {
  return (
    <Grid className="grid-cols-2 lg:grid-cols-3">
      {Array(12)
        .fill(0)
        .map((_, index) => {
          return (
              index < 3 ? (
                <Grid.Item key={index} className="animate-pulse bg-neutral-800 dark:bg-neutral-300" />
              ) : (
                <Grid.Item key={index} className="animate-pulse bg-neutral-400 dark:bg-neutral-700" />
              )
          );
        })}
    </Grid>
  );
}