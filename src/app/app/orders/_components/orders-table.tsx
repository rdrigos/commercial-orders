import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react';

export function OrdersTable(): React.JSX.Element {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-muted/50">
          <TableHead>Portal</TableHead>
          <TableHead>Ordem de Compra</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Valor Bruto</TableHead>
          <TableHead>Items</TableHead>
          <TableHead>Ordem de Compra X3</TableHead>
        </TableRow>
      </TableHeader>
    </Table>
  );
}
