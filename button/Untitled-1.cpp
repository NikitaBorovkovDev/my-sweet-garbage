#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main ()
{
  vector<string> arr;
  string str ("Привет; Как; Дела");
  string delim("; ");
  size_t prev = 0;
  size_t next;
  size_t delta = delim.length();

  while( ( next = str.find( delim, prev ) ) != string::npos ){
    //Отладка-start
    string tmp = str.substr( prev, next-prev );
    cout << tmp << endl;
    //Отладка-end
    arr.push_back( str.substr( prev, next-prev ) );
    prev = next + delta;
  }
  //Отладка-start
  string tmp = str.substr( prev );
  cout << tmp << endl;
  //Отладка-end
  arr.push_back( str.substr( prev ) );

  return 0;
}