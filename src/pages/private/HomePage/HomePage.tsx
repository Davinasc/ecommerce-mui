import useSWR from 'swr';

import { PRODUCTS_ENDPOINTS } from '@/constants';
import { productsApi } from '@/services/api';
import { ProductListItem } from '@/types/api';
import { Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Grid, Typography } from '@mui/material';

export default function HomePage() {
  const { data, error, isLoading } = useSWR(PRODUCTS_ENDPOINTS.list, productsApi.list);

  const hasError = !isLoading && error;
  const hasNoData = !isLoading && !error && !data?.length;
  const hasData = !isLoading && !error && data && data.length > 0;

  return (
    <div>
      <h1>All Products</h1>

      <Grid container spacing={2}>
        {isLoading && (
          <Grid size={12} sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <CircularProgress />
          </Grid>
        )}

        {hasError && (
          <Grid size={12}>
            <Typography gutterBottom variant="h5" component="div">
              Failed to load products.
            </Typography>
          </Grid>
        )}

        {hasNoData && (
          <Grid size={12}>
            <Typography>No products found.</Typography>
          </Grid>
        )}

        {hasData &&
          data.map((product: ProductListItem) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={product.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia component="img" alt={product.name} height="140" image={product.imageUrl} />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>

                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    €{product.price}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button size="small">Add to cart</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
