const hashAlgo = (key, size) => {
  let hashCode = 0;

  for (let i = 0; i < key.length; i++) {
    hashCode += key.charCodeAt(i);
  }
  return hashCode % size;
};

class hashTable {
  constructor(size) {
    this.size = size;
    this.buckets = Array(this.size);

    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Map();
    }
  }

  insert(key, val) {
    const idx = hashAlgo(key, this.size);
    this.buckets[idx].set(key, val);
  }

  remove(key) {
    const idx = hashAlgo(key, this.size);
    const removed = this.buckets[idx].get(key);
    this.buckets[idx].delete(key);
    return removed;
  }

  search(key) {
    const idx = hashAlgo(key, this.size);
    return this.buckets[idx].get(key);
  }
}

const ht = new hashTable(20);
ht.insert('USA', 'Washington');
ht.insert('Ukraine', 'kyiv');
ht.insert('Poland', 'Warsaw');
ht.insert('Austria', 'Vienna');
ht.insert('France', 'Paris');

ht.remove('Austria');
ht.search('Ukraine');

console.log(ht);
